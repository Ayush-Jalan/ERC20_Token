
import React, {  useState } from "react";
import fruits from '../../Fruit';
import Header from '../../components/Header';

import './Transfer.css'


 
const TransferF = ()=> {

    const [address, setAddress] = useState('')
    const [amount, setAmount] = useState('')
    const [error, setError] = useState(null);

    const transfer = async () => {
      try{
        setError(null);
        console.log("Going to pop wallet now to pay gas...")
        let transferTxn = await fruits.transfer(address, parseInt(amount));

        console.log("Mining...please wait.")
        await transferTxn.wait();
        console.log(amount,address);
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${transferTxn.hash}`);
      } catch(err){
        setError(err.message);
    }
    }

    const submit = e => {
        e.preventDefault()
        transfer()
      }




  return (
    <div className="App">
      <Header/>
        <div className="token">
          <p className="token-text">Fruit Token</p>
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
        {!error && <div className="er">Txn successful!</div>}
    </div>
  );
};

export default TransferF;


/*
<label>
            To (Address):
            <input type="text" name="address" value={txn.address}  onChange={e => setTxn({...txn, address: e.target.value })}/>
            {txn && <p>{txn}</p>}
        </label>
        <label>
            Amount :
            <input type="text" name="amount" value={txn.amount} onChange={e => setTxn({...txn, address: e.target.value })}/>
            {txn && <p>{amount}</p>}
        </label>
        */