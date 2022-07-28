import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import TransactiontableContent from './Transactiontablecontent';

/**
 * Header component for Studyportal.
 */

const TransactionTable = (props) => {
    
  return (
    <div className = "raw-table-container">
        <div className = "raw-table-head">
            <div className = "table-content-div">{props.head[0]}</div>
            <div className = "table-content-div">{props.head[1]}</div>
            <div className = "table-content-div">{props.head[2]}</div>
        </div>
        {props.Arr.map(function(x, i){
            return <TransactiontableContent item = {x}></TransactiontableContent>
        })}
    </div>
  );
};

export default TransactionTable;