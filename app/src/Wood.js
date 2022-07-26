import wood from './utils/Wood.json';
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x3a3641BD7188cF01B88A84d69ad5Dea690a9750A";
let woodContract;
try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      woodContract = new ethers.Contract(CONTRACT_ADDRESS, wood.abi, signer);

    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error)
}

export default woodContract;