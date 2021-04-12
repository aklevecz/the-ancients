export default () => {
    const isDev = process.env.NODE_ENV === "development";
    const host = isDev ? "http://localhost:8080" : process.env.IPFS_GATEWAY;
    const ipnsFolder = `${host}/ipns/${process.env.IPNS_PHOTO}`;
    return ipnsFolder
}