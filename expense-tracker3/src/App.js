import { useState } from "react";
import React from 'react';
import './App.css';
import './styles/base/color.css'
import './styles/base/utilities.css'
import './styles/home.css'
import TotalBudget from "./components/TotalBudget.js";
import AddTransaction from "./components/AddTransaction.js";
import "./components/FilteringTransaction.js"
import "./components/ShowingTransaction.js"

function App() {

  const [transactions, setTransactions] = useState([])

  function addTransaction(transactionToAdd) {
    setTransactions([...transactions, transactionToAdd]);
  }


  return (
    <>
    <header>
        <h1 class="auto fit-content"> Expense Tracker App</h1>
    </header>
    <div className="App flex column space-evenly">

      <TotalBudget transactions = {transactions} />
      <AddTransaction addTransaction = {addTransaction} />

      </div> 
    </>






       
  );
}

export default App;
