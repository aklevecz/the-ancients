import { useSelector } from "react-redux";

import styles from "../../styles/Vote.module.css";
export default function ConfirmName({ imgUrl, proposedName }) {
    return (
        <div className={styles.imgbg_container}>
            <div className={styles.imgbg_wrapper}>
                <img src={imgUrl} />
            </div>
            <div className={styles.imgbg_content}>
                <div>
                    you are proposing this cactus be named:{" "}
                    <span className={styles.emphasized_name}>
                        {proposedName}  
                    </span>
                </div>
                <div>
                    you will need to stake 10 RAT to do this, ok?
                </div>
            </div>
        </div>
    );
}
