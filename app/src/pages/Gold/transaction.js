
import React, { useEffect, useState } from "react";
//import { ethers } from "ethers";
//import fruit from './utils/Fruit.json';
import fruits from '../../Fruit';

import {BrowserRouter,Routes,Route, Switch, Link} from "react-router-dom";

const TransactionF = () => {

  const [currentAccount, setCurrentAccount] = useState("");
  
  const checkIfWalletIsConnected = async () => {

    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }


      const accounts = await ethereum.request({ method: "eth_requestAccounts" });


      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error);
    }
  }

  let txns;
  const getTranactions = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
    console.log(accounts[0]);
    console.log("Retreiving txns")
    const txn =await fetch("https://api-rinkeby.etherscan.io/api?module=account&action=tokentx&contractaddress=0x346bAbd7EE42eC13DAf26a1a21F75eaB5aF3499F&address=0xAABEDDe5e0B28B89D3D71426fFba93975FC16fff&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken")
    .then((res) => res.json());
    console.log(txn.result);
    txns= txn.result;
  }


  // Render Methods
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  const renderConnectedContainer = () => (
    <button className="cta-button connect-wallet-button">
      Connected Account : {currentAccount}
    </button>
  );

  const rendertable = () => (
    <tr>
        <th>Txn Hash</th>
        <th>Block Number</th>
        <th>To</th>
        <th>Value</th>
    </tr>
  );
  const tableRows = txns.map((info) => {
    return (
      <tr>
        <td>{info.hash}</td>
        <td>{info.blockNumber}</td>
        <td>{info.to}</td>
        <td>{info.value}</td>
      </tr>
    );
  });


  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">Welcome to Age of Empires</p>
          <p className="sub-text">
            Keep a track of your Age Of Empire Tokens!
          </p>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            renderConnectedContainer()
          )}
        </div>
        <div className="token">
          <p className="token-text">Fruit Token</p>
        </div>  
        <div className="Txntable">
          <table>
            <tr>
            <th>Txn Hash</th>
            <th>Block Number</th>
            <th>To</th>
            <th>Value</th>
            </tr>
            <tbody>
            {tableRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionF;
