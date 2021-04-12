import Link from "next/Link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Layout.module.css";

export default function Nav({ isMobile, open, ratBalance }) {
    const { asPath } = useRouter();

    const isPath = (path) => asPath === path;
    return (
        <div className={styles.header}>
            <div className={styles.heading}>
                <Link href="/">ranch raptor</Link>
            </div>
            <div className={styles.rat_balance}>
                <div className={styles.rat_balance_number}>{ratBalance}</div>
                <div className={styles.rat_balance_token}>
                    <img src="raptor_token.svg"></img>
                </div>
            </div>
            <div
                className={`${styles.nav_desk} ${
                    open && isMobile ? styles.open : ""
                }`}
            >
                <div
                    className={`${
                        isPath("/photos") && styles.active
                    } nav_button`}
                >
                    <Link href="/photos">photos</Link>
                </div>
                <div
                    className={`${isPath("/vote") && styles.active} nav_button`}
                >
                    <Link href="/vote">vote</Link>
                </div>
                <div
                    className={`${
                        isPath("/wallet") && styles.active
                    } nav_button`}
                >
                    <Link href="/wallet">wallet</Link>
                </div>
            </div>
        </div>
    );
}
