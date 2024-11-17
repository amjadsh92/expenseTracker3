import { useState } from "react";
import React from 'react';
import './App.css';
import './styles/base/color.css'
import './styles/base/utilities.css'
import './styles/home.css'
import TotalBudget from "./components/TotalBudget.js";
import AddTransaction from "./components/AddTransaction.js";
import FilterTransaction from "./components/FilteringTransaction.js";
import ShowTransactions from "./components/ShowingTransaction.js";

function App() {

  const [transactions, setTransactions] = useState([])
  let [filteredTransactions, setFilteredTransactions] = useState([])
  let [filterOn, setFilterOn] = useState(false)

  function addTransaction(transactionToAdd) {
    setTransactions([...transactions, transactionToAdd]);
    setFilteredTransactions([...transactions, transactionToAdd])
  }

  function deleteTransaction(indexToDelete) {
    
    const updatedTransactions = transactions.filter((_, index) => index !== indexToDelete);
    setTransactions(updatedTransactions);

    
    
    const updatedFilteredTransactions = filteredTransactions.filter((_, index) => index !== indexToDelete);
    setFilteredTransactions(updatedFilteredTransactions);
    
  }

  function filterTransaction(dataToFilter) {
    let filtered = transactions; 
  
    if (dataToFilter.minAmount) {
      filtered = filtered.filter(transaction => 
        parseFloat(transaction.amount) >= parseFloat(dataToFilter.minAmount)
      );
    }
  
    if (dataToFilter.maxAmount) {
      filtered = filtered.filter(transaction => 
        parseFloat(transaction.amount) <= parseFloat(dataToFilter.maxAmount)
      );
    }
  
    if (dataToFilter.filterDate) {
      filtered = filtered.filter(transaction => 
        transaction.date === dataToFilter.filterDate
      );
    }
  
    if (dataToFilter.filterType) {
      filtered = filtered.filter(transaction => 
        transaction.type === dataToFilter.filterType
      );
    }
  
    setFilteredTransactions(filtered); 
  }

  


  return (
    <>
    <header>
        <h1 className="auto fit-content"> Expense Tracker App</h1>
    </header>
    <div className="App flex column space-evenly">

      <TotalBudget transactions = {transactions} />
      <AddTransaction addTransaction = {addTransaction} />
      <FilterTransaction filterTransaction = {filterTransaction} setFilterOn={setFilterOn} />
      <ShowTransactions transactions ={transactions} filteredTransactions = {filteredTransactions} deleteTransaction = {deleteTransaction} filterOn={filterOn} />


      


      </div> 
    </>






       
  );
}

export default App;
