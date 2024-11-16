import { useState } from "react";
import { useEffect } from "react";
import {useRef} from "react"



export default function FilterTransaction({filterTransaction}){



  const minAmount = useRef();
  const maxAmount = useRef();
  const filterDate = useRef();
  const filterType = useRef();


  let data = {minAmount, maxAmount, filterDate, filterType}
          
  const applyFilter = (e) => {
    e.preventDefault();
    const dataToFilter = {
      minAmount: minAmount.current.value,
      maxAmount: maxAmount.current.value,
      filterDate: filterDate.current.value,
      filterType: filterType.current.value,
    };
    filterTransaction(dataToFilter)
  };

    
         
            

        return(

         
           <div  class="container more-padding filters flex column space-between">
            <h3>Filters</h3>
            <div class="filter-section flex space-around">
                <input type="number"  placeholder="Min Amount" ref={minAmount} />
                <input type="number" placeholder="Max Amount" ref={maxAmount} />
                <input type="date"   ref={filterDate}/>
                <select id="filter-type" ref={filterType}>
                   
                    <option value="income" >Income</option>
                    <option value="expense">Expense</option>
                   
                </select>
                
                <button type ="button" onClick={applyFilter}>Apply Filters</button>
                <button >Clear Filters</button>
            </div>
            
            </div>
          
    
    
            )
            
    

    }
    

     


