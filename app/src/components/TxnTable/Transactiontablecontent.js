import React, { Component, Fragment, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
//import './rawMaterialTable.css';

const TransactiontableContent = (props) => {
  
    
  return (
    <div className = "raw-table-head" id = "raw-table-content">
    <div className = "table-content-div">{Object.values(props.item)[0]}</div>
    <div className = "table-content-div">{Object.values(props.item)[1]}</div>
    <div className = "table-content-div">{Object.values(props.item)[2]}</div>
    </div>
  );
};

export default TransactiontableContent;