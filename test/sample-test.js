const { expect } = require("chai");

describe("Deploys the contract", function () {
    before(async function () {
        const RATToken = await ethers.getContractFactory("RaptorToken");
        this.ratToken = await RATToken.deploy(100);
        await this.ratToken.deployed();

        const RATExchange = await ethers.getContractFactory("RaptorExchange");
        this.ratExhange = await RATExchange.deploy(this.ratToken.address);
        await this.ratExhange.deployed();

        const accounts = await ethers.getSigners();
        this.address = accounts[0].address;

        this.stakeAmount = 10;
        this.name = "chickenman";
    });

    it("Staking reduces user's tokens", async function () {
        let balance = await this.ratToken.balanceOf(this.address);

        this.ratToken.approve(this.ratExhange.address, this.stakeAmount);

        await this.ratToken.allowance(this.address, this.ratToken.address);

        const bname = ethers.utils.formatBytes32String(this.name);
        this.ratExhange.stake(10, bname);
        const newBalance = await this.ratToken.balanceOf(this.address);

        expect(parseInt(newBalance, 10)).to.equal(
            parseInt(balance, 10) - this.stakeAmount
        );
    });

    it("Staking was recorded", async function () {
        const userStake = await this.ratExhange.stakers(this.address);
        expect(parseInt(userStake, 10)).to.equal(10);
    });

    it("Name was recorded", async function () {
        const name = await this.ratExhange.names(this.address);
        const sName = ethers.utils.parseBytes32String(name)
        expect(sName).to.equal(this.name);
    });

    it("User receives withdrawed tokens", async function () {
        const withdrawAmount = 10;
        const balance = await this.ratToken.balanceOf(this.address);
        this.ratExhange.withdrawStake(withdrawAmount);
        const newBalance = await this.ratToken.balanceOf(this.address);
        expect(parseInt(newBalance, 10)).to.equal(
            parseInt(balance, 10) + withdrawAmount
        );
    });
});
