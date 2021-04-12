import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
    const [open, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(null)
    const ratBalance = useSelector((state:RootState) => state.wallet.ratBalance)
    const openNav = () => setOpen(true)
    const closeNav = () => setOpen(false)
    const globalClose = (e) => {
        const t = e.target
        if (t.className.includes("Layout_nav") || t.parentElement.className.includes("nav_button")) {
            return;
        }
        closeNav()
    }
    useEffect(() => {
        if(open) {
            document.body.addEventListener("click", globalClose)
        }
        return () => document.body.removeEventListener("click", globalClose) 
    },[open])

    const checkMobile = () => setIsMobile(window.innerWidth < 768)

    useEffect(() => {
        window.addEventListener("resize", checkMobile)
        checkMobile()
        return () => window.removeEventListener("resize", checkMobile)
    },[])

    return (
        <div className={styles.app}>
           {isMobile && <button onClick={openNav} className={`${styles.opener} ${open ? styles.open : ""}`}></button>}
            <Nav isMobile={isMobile} open={open} ratBalance={ratBalance}/>
            <div className={styles.main}>{children}</div>
            <div className={styles.footer}>FOOTER</div>
        </div>
    );
}
