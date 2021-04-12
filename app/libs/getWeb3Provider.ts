import { ethers } from "ethers";

export default function getWeb3Provider() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider;
}
