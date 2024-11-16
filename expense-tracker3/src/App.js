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

  function filterTransaction(dataToFilter){

     //let filteredTransactions = transactions;
     
      if(dataToFilter.minAmount){
        setFilteredTransactions(filteredTransactions.filter(transaction => parseFloat(transaction.amount) >= parseFloat(dataToFilter.minAmount)));
    }

      if(dataToFilter.maxAmount){
          setFilteredTransactions(filteredTransactions.filter(transaction => parseFloat(transaction.amount) <= parseFloat(dataToFilter.maxAmount)));
      }

      if (dataToFilter.filterDate){


         setFilteredTransactions(filteredTransactions.filter( transaction => transaction.date == dataToFilter.filterDate ));
      
      }

      
      if (dataToFilter.filterType){


          setFilteredTransactions(filteredTransactions.filter( transaction => transaction.type == dataToFilter.filterType));
        
        }

  


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
      <ShowTransactions transactions ={transactions} filteredTransactions = {filteredTransactions} filterOn={filterOn} />


      


      </div> 
    </>






       
  );
}

export default App;
