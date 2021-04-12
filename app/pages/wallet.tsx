import styles from "../styles/Wallet.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ConnectWallet from "../containers/ConnectWallet";
import WalletView from "../containers/WalletView";

declare global {
    interface Window {
        ethereum: any;
    }
}

export default function Wallet() {
    const wallet = useSelector((state: RootState) => state.wallet);
    return (
        <div className={styles.container}>
            {!wallet.address && <ConnectWallet />}
            {wallet.address !== 0x0 && <WalletView wallet={wallet}/>}
        </div>
    );
}
