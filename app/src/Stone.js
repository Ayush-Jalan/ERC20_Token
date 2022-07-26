import stone from './utils/Stone.json';
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x790C61d3BF7c8085D4e71c1947D7ef15384E24CA";
let stoneContract;
try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      stoneContract = new ethers.Contract(CONTRACT_ADDRESS, stone.abi, signer);

    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error)
}

export default stoneContract;