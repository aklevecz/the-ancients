import { useEffect, useState } from "react";
import PhotoGrid from "../containers/PhotoGrid";
import getIpnsFolder from "../libs/getIpnsFolder";

export async function getStaticProps() {
 const ipnsFolder = getIpnsFolder()
    return {
        props: { ipnsFolder },
    };
}

export default function Photos({ ipnsFolder }) {
    const [imgs, setImgs] = useState([]);
    useEffect(() => {
        fetch(ipnsFolder + "/files.json")
            .then((r) => r.json())
            .then((d) => setImgs(d));
    }, []);
    
    if (imgs.length === 0) {
        return <div>loading...</div>
    }
    return <PhotoGrid imgs={imgs} ipnsFolder={ipnsFolder} />;
}
