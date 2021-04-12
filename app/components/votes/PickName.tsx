import styles from "../../styles/Vote.module.css";

export default function PickName({ imgSrc, currentVote, onInputChange, proposeName }) {
   
   
    return (
        <>
            <div className={styles.img_wrapper}>
                <img
                    src={imgSrc}
                    style={{
                        maxWidth: 500,
                        maxHeight: "90%",
                        margin: "auto",
                        display: "block",
                    }}
                />
            </div>
            <div className={styles.vote_container}>
                <div className={styles.vote_wrapper}>
                    <div>what should I be named?</div>
                    <div>
                        <i>propose a name</i>
                    </div>
                    <input onChange={onInputChange} onKeyDown={(e) => {
                        if (e.key==="Enter") return proposeName()
                    }}></input>
                    <button onClick={proposeName}>corntinue</button>
                </div>
            </div>
        </>
    );
}
