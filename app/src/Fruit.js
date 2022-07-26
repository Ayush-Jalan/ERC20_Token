import fruit from './utils/Fruit.json';
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x346bAbd7EE42eC13DAf26a1a21F75eaB5aF3499F";
let fruitContract;
try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      fruitContract = new ethers.Contract(CONTRACT_ADDRESS, fruit.abi, signer);

    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error)
}

export default fruitContract;
