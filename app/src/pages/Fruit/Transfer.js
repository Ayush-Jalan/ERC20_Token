
import React, { useEffect, useState } from "react";
//import { ethers } from "ethers";
//import fruit from './utils/Fruit.json';
import fruits from '../../Fruit';
import Header from '../../components/Header';
import {BrowserRouter,Routes,Route, Switch, Link} from "react-router-dom";


 


const TransferF = () => {

    const getTranactions = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
        console.log(accounts[0]);
        console.log("Retreiving txns")
        const txns =await fetch("https://api-rinkeby.etherscan.io/api?module=account&action=tokentx&contractaddress=0x346bAbd7EE42eC13DAf26a1a21F75eaB5aF3499F&address=0xAABEDDe5e0B28B89D3D71426fFba93975FC16fff&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken")
        .then((res) => res.json());
        console.log(txns.result);
      }

  return (
    <div className="App">
      <Header/>
        <div className="token">
          <p className="token-text">Fruit Token</p>
          <p className="token-text">Transfer</p>
        </div>  
        <form>
        <label>
            To (Address):
            <input type="text" name="name" />
        </label>
        <label>
            Value :
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  );
};

export default TransferF;
