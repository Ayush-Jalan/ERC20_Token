
import React, { useEffect, useState } from "react";
//import { ethers } from "ethers";
//import fruit from './utils/Fruit.json';
import woods from '../../Wood';
import Header from '../../components/Header';
import {BrowserRouter,Routes,Route, Switch, Link} from "react-router-dom";
import TransactionTable from '../../components/TxnTable/Transactiontable';


 


const TransactionW = () => {

    const getTranactions = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
        console.log(accounts[0]);
        console.log("Retreiving txns")
        const txns =await fetch(`https://api-rinkeby.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3a3641BD7188cF01B88A84d69ad5Dea690a9750A&address=${accounts[0]}&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken`)
        .then((res) => res.json());
        console.log(txns.result);
        const propertyValues = Object.values(txns.result[0]);
        console.log(typeof(propertyValues));
        console.log(propertyValues);
      }

        const rawMaterialArr = [
            {Supplier : "Inventory",
             RawMaterial : "Cotton",
             QuantityLeft : 100
            },
            {Supplier : "Inventory",
            RawMaterial : "Cotton",
            QuantityLeft : 100
           },
               {Supplier : "Inventory",
             RawMaterial : "Cotton",
             QuantityLeft : 100
            },
        ];

        const renderTable = () => (
            <button onClick={getTranactions} className="cta-button connect-wallet-button">
              Transactions
            </button>
          );

  return (
    <div className="App">
      <Header/>
        <div className="token">
          <p className="token-text">Wood Token</p>
          <p className="token-text">Transaction History</p>
        </div>  
        <TransactionTable head = {["Supplier" , "Raw Material", "Quantity Left Kg"]} Arr = {rawMaterialArr}></TransactionTable>
        <div className="Txntable">
          {renderTable()}
        </div>
    </div>
  );
};

export default TransactionW;
