
import React, { useState } from "react";
//import { ethers } from "ethers";
//import fruit from './utils/Fruit.json';
import woods from '../../Wood';
import Header from '../../components/Header';
import '../Fruit/Transfer.css';


const TransferW = () => {

  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState();

  const submit = e => {
    e.preventDefault()
    transfer()
  }

  const transfer = async () => {
    try{
      setError(null);
        console.log("Going to pop wallet now to pay gas...")
        let transferTxn = await woods.transfer(address, parseInt(amount));

        console.log("Mining...please wait.")
        await transferTxn.wait();
        
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${transferTxn.hash}`);
        setError('Txn successful!');
    } catch(err){
      setError(err.message);
    }
  }
  
     

  return (
    <div className="App">
      <Header/>
        <div className="token">
          <p className="token-text">Wood Token</p>
          <p className="token-text">Transfer</p>
        </div>  
        <form onSubmit={submit}>
        <label className="lab">
            To (Address):
            <input type="text" name="address" value={address}  onChange={e => setAddress( e.target.value )}/>
        </label>
        <label className="lab">
            Amount :
            <input type="text" name="amount" value={amount} onChange={e => setAmount(e.target.value )}/>
        </label>
        <input className="butt" type="submit" value="Submit" />
        </form>
        {error && <div className="er">{error}</div>}
    </div>
  );
};

export default TransferW;
