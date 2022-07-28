import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import fruits from '../Fruit';
import golds from '../Gold';
import stones from '../Stone';
import woods from '../Wood';
import {BrowserRouter,Routes,Route, Switch, Link} from "react-router-dom";
import TransferF from './Fruit/Transfer';
import TransactionF from './Fruit/Transaction';
import TransferG from './Gold/Transfer';
import TransactionG from './Gold/Transaction';
import TransferW from './Wood/Transfer';
import TransactionW from './Wood/Transaction';
import TransferS from './Stone/Transfer';
import TransactionS from './Stone/Transaction';
import './home.css';

const Home = () => {

    const [balanceFruit, setBalanceFruit] = useState()
    const [balanceGold, setBalanceGold] = useState()
    const [balanceStone, setBalanceStone] = useState()
    const [balanceWood, setBalanceWood] = useState()

    const askBalanceFruit = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
        console.log(accounts[0]);
        console.log("Retreiving balance")
        let balance = await fruits.balanceOf(accounts[0]);
        console.log("Retrieved total balance...", balance.toNumber());
        setBalanceFruit(parseInt(balance));
      }
    
      const askBalanceGold = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
        console.log(accounts[0]);
        console.log("Retreiving balance")
        let balance = await golds.balanceOf(accounts[0]);
        console.log("Retrieved total balance...", balance.toNumber());
        setBalanceGold(parseInt(balance));
      }
      
      const askBalanceWood = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
        console.log(accounts[0]);
        console.log("Retreiving balance")
        let balance = await woods.balanceOf(accounts[0]);
        console.log("Retrieved total balance...", balance.toNumber());
        setBalanceWood(parseInt(balance));
      }
    
      const askBalanceStone = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });   
        console.log(accounts[0]);
        console.log("Retreiving balance")
        let balance = await stones.balanceOf(accounts[0]);
        console.log("Retrieved total balance...", balance.toNumber());
        setBalanceStone(parseInt(balance));
      }
    return (
        <div className="App">
            <Header/>
            <div className="token">
                <p className="token-text">Fruit Token</p>
                <button onClick={askBalanceFruit} className="b-button balance-button">
                    Get Balance: {balanceFruit}
                </button>
                <nav>
                    <ul>
                    <li className="Link"><Link to="Fruit/Transfer">Transfer Tokens</Link></li>
                    <li><Link to="/Fruit/transaction">See Transaction History</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="Fruit/Transfer" element={<TransferF />} />
                    <Route path="/Fruit/transaction" element={<TransactionF />} />
                </Routes>
                <p className="token-text">Gold Token</p>
                <button onClick={askBalanceGold} className="b-button balance-button">
                    Get Balance: {balanceGold}
                </button>
                <nav>
                    <ul>
                    <li><Link to="/Gold/transfer">Transfer Tokens</Link></li>
                    <li><Link to="/Gold/transaction">See Transaction History</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/Gold/transfer" />
                    <Route path="/Gold/transaction" />
                </Routes>
                <p className="token-text">Wood Token</p>
                <button onClick={askBalanceWood} className="b-button balance-button">
                    Get Balance : {balanceWood}
                </button>
                <nav>
                    <ul>
                    <li><Link to="/Wood/transfer">Transfer Tokens</Link></li>
                    <li><Link to="/Wood/transaction">See Transaction History</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/Wood/transfer" />
                    <Route path="/Wood/transaction" />
                </Routes>
                <p className="token-text">Stone Token</p>
                <button onClick={askBalanceStone} className="b-button balance-button">
                Get Balance : {balanceStone}
                </button>
                <nav>
                    <ul>
                    <li><Link to="/Stone/transfer">Transfer Tokens</Link></li>
                    <li><Link to="/Stone/transaction">See Transaction History</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/Stone/transfer" />
                    <Route path="/Stone/transaction" />
                </Routes>
            </div>
        </div>
        
    )
};

export default Home;