
import React, {  useState } from "react";
import fruits from '../../Fruit';
import Header from '../../components/Header';

import './Transfer.css'


 
const TransferF = ()=> {

    const [address, setAddress] = useState('')
    const [amount, setAmount] = useState('')

    const transfer = async () => {
        console.log("Going to pop wallet now to pay gas...")
        let transferTxn = await fruits.transfer(address, parseInt(amount));

        console.log("Mining...please wait.")
        await transferTxn.wait();
        console.log(amount,address);
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${transferTxn.hash}`);
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
        <label>
            To (Address):
            <input type="text" name="address" value={address}  onChange={e => setAddress( e.target.value )}/>
        </label>
        <label>
            Amount :
            <input type="text" name="amount" value={amount} onChange={e => setAmount(e.target.value )}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
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