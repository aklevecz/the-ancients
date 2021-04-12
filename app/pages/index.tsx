import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ranch raptor</title>
            </Head>
            <div className={styles.main}>
                <img src="raptor_token.svg"/>
            </div>
        </div>
    );
}
