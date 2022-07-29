import './App.css';
import React, {} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
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

  return (
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
