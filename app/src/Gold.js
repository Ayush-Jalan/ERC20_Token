import gold from './utils/Gold.json';
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xdc4F37a23a1921Aa765ad0a3c4706C57FAa73029";
let goldContract;
try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      goldContract = new ethers.Contract(CONTRACT_ADDRESS, gold.abi, signer);

    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error)
}

export default goldContract;