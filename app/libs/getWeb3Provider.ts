import { ethers } from "ethers";

export default function getWeb3Provider() {
    if (!window.ethereum) {
        return null;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider;
}
