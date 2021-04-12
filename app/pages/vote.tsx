import { useEffect, useState } from "react";
import Votes from "../containers/Votes";
import getIpnsFolder from "../libs/getIpnsFolder";

export async function getStaticProps() {
    const ipnsFolder = getIpnsFolder();
    return {
        props: {
            ipnsFolder,
        },
    };
}

const CURRENT_VOTE = "boner.jpg";
const BACKUP_FOLDER = "/backup"
export default function Vote({ ipnsFolder }) {
    const [loading, setLoading] = useState(true)
    const [imgSrc, setImgSrc] = useState("")
    useEffect(() => {
        const img = new Image()
        const ipnsPath = `${ipnsFolder}/${CURRENT_VOTE}`
        img.onload = () => {setLoading(false);};
        img.onerror = e => {
            const backupPath = `${BACKUP_FOLDER}/${CURRENT_VOTE}`
            img.src = backupPath
            setImgSrc(backupPath)
        }        
        setImgSrc(ipnsPath)
        img.src = ipnsPath
    },[])

    if (loading) {
        return <div>loading...</div>
    }

    return <Votes imgSrc={imgSrc} currentVote={CURRENT_VOTE} />;
}
