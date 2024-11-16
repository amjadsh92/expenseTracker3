import { useRef } from "react";

export default function AddTransaction({addTransaction}){

  
  const descriptionRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();
  const typeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      description: descriptionRef.current.value,
      amount: amountRef.current.value,
      date: dateRef.current.value,
      type: typeRef.current.value,
    };
    addTransaction(transaction)
    
  };

    

    return(



        <section  className=" container more-padding transaction-form flex column space-between">
            <h3>Add Transaction</h3>
            <form  className="flex space-around" onSubmit={handleSubmit}>
                <input type="text"  placeholder="Description" ref={descriptionRef} />
                <input type="number"  placeholder="Amount" ref={amountRef} />
                <input type="date" ref={dateRef} />
                <select ref={typeRef}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <button type="submit" >Add Transaction</button>
            </form>
        </section>

    )




}