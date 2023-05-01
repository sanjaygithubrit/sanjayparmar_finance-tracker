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
        }else if(transaction.receipt === ""){
            error.receipt =" Please enter receipt"
        }else if(transaction.receipt === "size"){
            error.receipt =" Please enter Correct Size"
        }else if(transaction.receipt ==="type"){
            error.receipt =" Please enter png,jpg,svg"
        }else if(transaction.notes ===""){
            error.notes =" Please enter notes"
        }
        else{
            
            if (transaction.id === undefined) {
            var data =  JSON.parse(localStorage.getItem("Transaction") || "[]");

            var id =  data.length + 1;
         
            transaction.id = id;

            data.push(transaction);

            localStorage.setItem('Transaction', JSON.stringify(data));
            
            } 
            else {

                var editdata =  JSON.parse(localStorage.getItem("Transaction") || "[]");

                editdata[transaction.id-1]= transaction;

                localStorage.setItem('Transaction', JSON.stringify(editdata));

            }
            // var get =  JSON.parse(localStorage.getItem("Transaction") || "[]");

            // var id =  get.length + 1;
            // console.log(id,"id")
            // transaction.id = id;

            // get.push(transaction);

            // localStorage.setItem('Transaction', JSON.stringify(get));

          error.success = "Transaction Sucsess"

        }

        return error;
    }

    export default validation;


