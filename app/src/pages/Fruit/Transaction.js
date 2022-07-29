
import React, {  useState } from "react";
import Header from '../../components/Header';
import TransactionTable from '../../components/TxnTable/Transactiontable';


 


const TransactionF = () => {

        const [txn, setTxn] = useState([])   
        const getTranactions = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
        console.log(accounts[0]);
        console.log("Retreiving txns")
        const txns =await fetch(`https://api-rinkeby.etherscan.io/api?module=account&action=tokentx&contractaddress=0x346bAbd7EE42eC13DAf26a1a21F75eaB5aF3499F&address=${accounts[0]}&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken`)
        .then((res) => res.json());
        const propertyValues = Object.values(txns.result);
 
        console.log(propertyValues);
        setTxn(propertyValues);

      }

        const renderTable = () => (
            <div>
            <button onClick={getTranactions} className="cta-button connect-wallet-button">
               Get Transaction History
            </button>
            <TransactionTable head = {["Block Number" , "TimeStamp", "Transaction Hash"]} Arr = {txn}></TransactionTable>
            </div>
          );

  return (
    <div className="App">
      <Header/>
        <div className="token">
          <p className="token-text">Fruit Token</p>
        </div>  
        <div className="Txntable">
          {renderTable()}
        </div>
    </div>
  );
};

export default TransactionF;