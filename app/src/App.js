import './App.css';
import React, { useEffect, useState } from "react";
//import { ethers } from "ethers";
//import fruit from './utils/Fruit.json';
import fruits from './Fruit';
import golds from './Gold';
import stones from './Stone';
import woods from './Wood';
import {BrowserRouter,Routes,Route, Switch, Link} from "react-router-dom";
import TransferF from './pages/Fruit/Transfer';
import TransactionF from './pages/Fruit/Transaction';
import TransferG from './pages/Gold/Transfer';
import TransactionG from './pages/Gold/Transaction';
import TransferW from './pages/Wood/Transfer';
import TransactionW from './pages/Wood/Transaction';
import TransferS from './pages/Stone/Transfer';
import TransactionS from './pages/Stone/Transaction';
import Home from './pages/home';

 


const App = () => {

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

  const askBalanceFruit = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
    console.log(accounts[0]);
    console.log("Retreiving balance")
    let balance = await fruits.balanceOf(accounts[0]);
    console.log("Retrieved total balance...", balance.toNumber());
  }

  const askBalanceGold = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
    console.log(accounts[0]);
    console.log("Retreiving balance")
    let balance = await golds.balanceOf(accounts[0]);
    console.log("Retrieved total balance...", balance.toNumber());
  }
  
  const askBalanceWood = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
    console.log(accounts[0]);
    console.log("Retreiving balance")
    let balance = await woods.balanceOf(accounts[0]);
    console.log("Retrieved total balance...", balance.toNumber());
  }

  const askBalanceStone = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
    console.log(accounts[0]);
    console.log("Retreiving balance")
    let balance = await stones.balanceOf(accounts[0]);
    console.log("Retrieved total balance...", balance.toNumber());
    return balance.toNumber();
  }

  const getTranactions = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
    console.log(accounts[0]);
    console.log("Retreiving txns")
    const txns =await fetch("https://api-rinkeby.etherscan.io/api?module=account&action=tokentx&contractaddress=0x346bAbd7EE42eC13DAf26a1a21F75eaB5aF3499F&address=0xAABEDDe5e0B28B89D3D71426fFba93975FC16fff&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken")
    .then((res) => res.json());
    console.log(txns.result);
  }

  const transfer = async () => {
    
        console.log("Going to pop wallet now to pay gas...")
        let transferTxn = await stones.transfer("0xF8c15F397434Bd6ECE77499299b1408804B50422", 100);

        console.log("Mining...please wait.")
        await transferTxn.wait();
        
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${transferTxn.hash}`);
  
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

  const renderTable = () => (
    <button onClick={getTranactions} className="cta-button connect-wallet-button">
      Transactions
    </button>
  );


  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  return (
   /* <div className="App">
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
          <label  onClick={askBalanceFruit} className="b-button balance-button ">
                Show Balance: {askBalanceFruit}
          </label>
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to="Fruit/Transfer">Transfer</Link></li>
                <li><Link to="/Fruit/transaction">Transactions</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="Fruit/Transfer" element={<TransferF />} />
              <Route path="/Fruit/transaction" element={<TransactionF />} />
            </Routes>
          </BrowserRouter>
          <p className="token-text">Gold Token</p>
          <button onClick={askBalanceGold} className="b-button balance-button">
                Show Balance
          </button>
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to="/Gold/transfer">Transfer</Link></li>
                <li><Link to="/Gold/transaction">Transactions</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/Gold/transfer" />
              <Route path="/Gold/transaction" />
            </Routes>
          </BrowserRouter>
          <p className="token-text">Wood Token</p>
          <button onClick={askBalanceWood} className="b-button balance-button">
                Show Balance
          </button>
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to="/Wood/transfer">Transfer</Link></li>
                <li><Link to="/Wood/transaction">Transactions</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/Wood/transfer" />
              <Route path="/Wood/transaction" />
            </Routes>
          </BrowserRouter>
          <p className="token-text">Stone Token</p>
          <button onClick={askBalanceStone} className="b-button balance-button">
                Show Balance
          </button>
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to="/Stone/transfer">Transfer</Link></li>
                <li><Link to="/Stone/transaction">Transactions</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/Stone/transfer" />
              <Route path="/Stone/transaction" />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="Txntable">
          {renderTable()}
        </div>
      </div>
    </div>*/
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Fruit/Transfer" element={<TransferF />} />
      <Route path="/Fruit/Transaction" element={<TransactionF />} />
      <Route path="/Gold/Transfer" element={<TransferG />} />
      <Route path="/Gold/Transaction" element={<TransactionG />} />
      <Route path="/Wood/Transfer" element={<TransferW />} />
      <Route path="/Wood/Transaction" element={<TransactionW />} />
      <Route path="/Stone/Transfer" element={<TransferS />} />
      <Route path="/Stone/Transaction" element={<TransactionS />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
