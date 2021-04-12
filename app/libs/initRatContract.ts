import {ethers} from "ethers"
import RaptorToken from "../contracts/RaptorToken.json"
// const RAT_ADDRESS = "0x76F30BA0E6A4Ed174465717f20Aa3fe2eD65aC65";

export default function (wallet) {
    const RAT_ADDRESS = process.env.NEXT_PUBLIC_RINKEBY_RAT_ADDRESS
    const contract = new ethers.Contract(
        RAT_ADDRESS,
        RaptorToken.abi,
        wallet.provider
    );
    return contract
}
