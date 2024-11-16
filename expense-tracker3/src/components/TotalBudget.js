import { useState } from "react";
import { useEffect } from "react";



export default function TotalBudget({transactions}){

  

         let [budget, setBudget] = useState(0)
         
         
         useEffect(() => {
            if (transactions?.length) {
              let calculatedBudget = 0;
        
              transactions.forEach((transaction) => {
                if (transaction.type === "income") {
                  calculatedBudget += parseInt(transaction.amount);
                } else if (transaction.type === "expense") {
                  calculatedBudget -= parseInt(transaction.amount);
                }
              });
        
              setBudget(calculatedBudget);
            }
          }, [transactions]); 

            

        return(


            <div  class="container flex row">
            <h3>Total Budget = {budget}$ </h3>
                
            
    
            </div>
    
    
    
            )
            
    

    }
    

     


