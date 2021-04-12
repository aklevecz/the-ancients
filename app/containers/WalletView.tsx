import { useEffect } from "react";
import styles from "../styles/Wallet.module.css";
import { useDispatch } from "react-redux";
import { getRatBalance } from "../actions";

export default function WalletView({ wallet }) {
    const dispatch = useDispatch();

    const copy = () => {
        navigator.clipboard.writeText(wallet.address);
    };

    useEffect(() => {
        dispatch(getRatBalance())
    }, []);

    return (
        <div>
            <div onClick={copy} className={styles.address}>
                {wallet.address}
            </div>
            <div className={styles.token_container}>
                <div style={{ color: "#c18961" }}>{wallet.ratBalance}</div>
                <div>
                    <img src="raptor_token.svg" />
                </div>
            </div>
        </div>
    );
}
