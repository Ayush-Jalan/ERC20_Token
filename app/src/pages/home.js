import React, {  useState } from "react";
import Header from '../components/Header';
import fruits from '../Fruit';
import golds from '../Gold';
import stones from '../Stone';
import woods from '../Wood';
import {Routes,Route, Link} from "react-router-dom";
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
                <a href="https://rinkeby.etherscan.io/address/0x346bAbd7EE42eC13DAf26a1a21F75eaB5aF3499F" target="_blank" rel="noreferrer">
                    0x346bAbd7EE42eC13DAf26a1a21F75eaB5aF3499F
                </a>
                <button onClick={askBalanceFruit} className="b-button balance-button">
                    Get Balance: {balanceFruit}
                </button>
                <nav>
                   
                    <li><Link to="Fruit/Transfer">Transfer Tokens</Link></li>
                    <li><Link to="/Fruit/transaction">See Transaction History</Link></li>
                    
                </nav>
                <Routes>
                    <Route path="Fruit/Transfer" element={<TransferF />} />
                    <Route path="/Fruit/transaction" element={<TransactionF />} />
                </Routes>
                <p className="token-text">Gold Token</p>
                <a href="https://rinkeby.etherscan.io/address/0xdc4F37a23a1921Aa765ad0a3c4706C57FAa73029" target="_blank" rel="noreferrer">
                0xdc4F37a23a1921Aa765ad0a3c4706C57FAa73029
                </a>
                <button onClick={askBalanceGold} className="b-button balance-button">
                    Get Balance: {balanceGold}
                </button>
                <nav>
                    <ul>
                    <li><Link to="/Gold/Transfer">Transfer Tokens</Link></li>
                    <li><Link to="/Gold/Transaction">See Transaction History</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/Gold/Transfer" element={<TransferG />}  />
                    <Route path="/Gold/Transaction" element={<TransactionG />} />
                </Routes>
                <p className="token-text">Wood Token</p>
                <a href="https://rinkeby.etherscan.io/address/0x3a3641BD7188cF01B88A84d69ad5Dea690a9750A" target="_blank" rel="noreferrer">
                0x3a3641BD7188cF01B88A84d69ad5Dea690a9750A
                </a>
                <button onClick={askBalanceWood} className="b-button balance-button">
                    Get Balance : {balanceWood}
                </button>
                <nav>
                    <ul>
                    <li><Link to="/Wood/Transfer">Transfer Tokens</Link></li>
                    <li><Link to="/Wood/Transaction">See Transaction History</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/Wood/Transfer" element={<TransferW />} />
                    <Route path="/Wood/Transaction" element={<TransactionW />} />
                </Routes>
                <p className="token-text">Stone Token</p>
                <a href="https://rinkeby.etherscan.io/address/0x790C61d3BF7c8085D4e71c1947D7ef15384E24CA" target="_blank" rel="noreferrer">
                0x790C61d3BF7c8085D4e71c1947D7ef15384E24CA
                </a>
                <button onClick={askBalanceStone} className="b-button balance-button">
                Get Balance : {balanceStone}
                </button>
                <nav>
                    <ul>
                    <li><Link to="/Stone/Transfer">Transfer Tokens</Link></li>
                    <li><Link to="/Stone/Transaction">See Transaction History</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/Stone/Transfer" element={<TransferS />}  />
                    <Route path="/Stone/Transaction" element={<TransactionS />} />
                </Routes>
            </div>
        </div>
        
    )
};

export default Home;