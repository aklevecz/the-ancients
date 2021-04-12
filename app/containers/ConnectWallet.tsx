import * as ethers from "ethers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { INIT_WALLET } from "../types";

const NO_WALLET_ALERT =
    "I don't see a wallet to connect :( -- srry if I'm wrong, I suggest looking up MetaMask. I'll have more instructions later & you're welcome to bug me for advice :) this thingy is still in development!";

export default function ConnectWallet() {
    const dispatch = useDispatch();

    const initWallet = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((accounts: any) => {
                const signer = provider.getSigner();
                dispatch({
                    type: INIT_WALLET,
                    payload: { signer, address: accounts[0], provider },
                });
            });
    };
    const connectWallet = () => {
        if (!window.ethereum) {
            return alert(NO_WALLET_ALERT);
        }
        initWallet();
    };

    const createRandomWallet = () => {
        // const wallet = ethers.Wallet.createRandom()
        // console.log(wallet._mnemonic())

        console.log(
            ethers.Wallet.fromMnemonic(
                "diary bounce cannon tape equip stool fame bottom diet note acid sail"
            )
        );
    };

    useEffect(() => {
        if (!window.ethereum) {
            return null;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        signer
            .getAddress()
            .then((address) => {
                console.log(address);
                dispatch({
                    type: INIT_WALLET,
                    payload: { signer, address, provider },
                });
            })
            .catch((e) => {
                console.log("need to authorize connection");
            });
    }, []);

    return (
        <>
            <button onClick={connectWallet}>Connect wallet</button>
            <button onClick={createRandomWallet}>Create wallet</button>
        </>
    );
}
