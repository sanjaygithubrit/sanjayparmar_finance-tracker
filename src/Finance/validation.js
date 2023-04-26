import { Link } from "react-router-dom";

     
     function validation(transaction) {
       
        const error = {}
        console.log(transaction.receipt,"rec");
        if (transaction.transactiondate === "") {
            error.transactiondate = "Please enter Transaction date"
        }else if(transaction.month ===""){
            error.month =" Please select Month"
        }else if(transaction.transactiontype ===""){
            error.transactiontype =" Please select transactiontype"
        }else if(transaction.fromaccount ===""){
            error.fromaccount =" Please select Fromaccount"
        }else if(transaction.toaccount ===""){
            error.toaccount =" Please select toaccount"
        }else if(transaction.fromaccount === transaction.toaccount){
            error.toaccount =" Please select different toaccount"
        }else if(transaction.amount ===""){
            error.amount =" Please enter Amount"
        }else if(transaction.notes ===""){
            error.notes =" Please enter notes"
        }
        else{
           
        
            var get =  JSON.parse(localStorage.getItem("Transaction") || "[]");
          
           
            get.push(transaction);

            localStorage.setItem('Transaction', JSON.stringify(get));

            <Link to="/alltransaction"> All</Link>
        }

        return error;
    }

    export default validation;


