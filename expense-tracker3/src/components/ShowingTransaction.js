import { useState } from "react";
import { useEffect } from "react";
import {useRef} from "react"



export default function ShowTransactions({transactions}){

    console.log(transactions)
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
                     
                        {  transactions.map((transaction,index) =>  (
       

                       <tr key={index}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.type}</td>
                        <td>
                            
                            <button className="delete-btn">Delete</button>
                        </td>
                        </tr>

                    ))}
                                        
                </tbody>
                </table>



            </div>
            
        </div>


         
           
    
    
    
            )
            
    

    }
    

     


