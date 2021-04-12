import Image from "next/image";
import styles from "../styles/Photos.module.css";

export default function PhotoGrid({imgs, ipnsFolder}) {

    return (
        <div className={styles.container}>
            {imgs.length > 0 &&
                imgs.map((img) => {
                    return (
                        <div className={styles.img_container} key={img}>
                            <div className={styles.img_wrapper}>
                                <Image
                                    loader={() => {
                                        return `${ipnsFolder}/${img}`;
                                    }}
                                    src={`./${img}`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
