import { useState } from "react";
import { useEffect } from "react";
import {useRef} from "react"



export default function ShowTransactions({transactions, filteredTransactions, deleteTransaction,  filterOn}){
    
    console.log(transactions)
    console.log(filteredTransactions)
    console.log(filterOn)



   return(



    <div  className ="transaction-table flex column space-between">
            <h3>Transactions</h3>
            <div class = "expense-table flex space-around">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                        { !filterOn ? (transactions.map((transaction,index) =>  (
       

                       <tr key={index}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.type}</td>
                        <td>
                            
                            <button onClick={() => deleteTransaction(index)} className="delete-btn">Delete</button>
                        </td>
                        </tr>

                    ))) : (filteredTransactions.map((filteredTransaction,index) =>  (
       

                        <tr key={index}>
                         <td>{filteredTransaction.date}</td>
                         <td>{filteredTransaction.description}</td>
                         <td>{filteredTransaction.amount}</td>
                         <td>{filteredTransaction.type}</td>
                         <td>
                             
                             <button onClick={()=>deleteTransaction(index)} className="delete-btn">Delete</button>
                         </td>
                         </tr>
 
                     ))) }
                                        
                </tbody>
                </table>



            </div>
            
        </div>


         
           
    
    
    
            )
            
    

    }
    

     


