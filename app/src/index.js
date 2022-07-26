import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*
import React,{Component, useEffect, useState} from 'react';
import {Card,Button } from 'semantic-ui-react';
import { ethers } from "ethers";
import fruit from './Fruit';


class CampaignIndex extends Component{

  static async getInitialProps(){
    const campaigns= await fruit.methods.getDeployedCampaigns().call();

    return{campaigns};
  }

  renderCampaigns(){
    const items= this.props.campaigns.map(address=>{
      return{
        header:address,
        description:(
          <Link route ={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });

    return<Card.Group items={items}/>;
  }

  render(){
    return(
      <Layout>
        <div>
          <h3>Fruit</h3>


          {this.renderCampaigns()}

         </div>
       </Layout>
     );
  }
}

export default CampaignIndex;
*/
