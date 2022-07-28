import React, { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route, Switch, Link} from "react-router-dom";
//import './Header.css';

const Header = () => {

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

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  return(
      <div className="header-container">
        <p className="header gradient-text">Welcome to Age of Empires</p>
        <p className="sub-text">
          Keep a track of your Age Of Empire Tokens!
        </p>   
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>

          </ul>
        </nav>
        {currentAccount === "" ? (
          renderNotConnectedContainer()
        ) : (
          renderConnectedContainer()
        )}
      </div>
    );
  };

  export default Header;