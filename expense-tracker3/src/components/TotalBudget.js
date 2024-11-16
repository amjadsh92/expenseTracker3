

export default function TotalBudget({transactions}){

   const totalBudget =  () => {
         
        let budget = 0;

        for (let transaction of transactions){

            if (transaction.type === 'income'){

                budget += transaction.amount
                
            }

            else if (transaction.type === 'expense'){

                budget -= transaction.amount
                
            }


            } 
            
      return budget

    }
    

      return(


        <div  class="container flex row">
        <h3>Total Budget = </h3>
         
        <h3>{totalBudget}$</h3>

        </div>



      )


}