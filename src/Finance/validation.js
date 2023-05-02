


     function validation(transaction) {
       
        const error = {
            transactiondate: "",
            month: "",
            transactiontype: "",
            fromaccount: "",
            toaccount: "",
            amount: "",
            receipt: "",
            notes: "",
        }
       
        if (transaction.transactiondate === "") {
            error.transactiondate = "Please enter Transaction date"
        }
        if(transaction.month ===""){
            error.month =" Please select Month"
        }
        if(transaction.transactiontype ===""){
            error.transactiontype =" Please select transactiontype"
        }
        if(transaction.fromaccount ===""){
            error.fromaccount =" Please select Fromaccount"
        }
        if(transaction.toaccount ===""){
            error.toaccount =" Please select toaccount"
        }else if(transaction.fromaccount === transaction.toaccount){
            error.toaccount =" Please select different toaccount"
        }
        if(transaction.amount ===""){
            error.amount =" Please enter Amount"
        }
        if(transaction.receipt === ""){
            error.receipt =" Please enter receipt"
        }else if(transaction.receipt === "size"){
            error.receipt =" Please enter Correct Size"
        }else if(transaction.receipt ==="type"){
            error.receipt =" Please enter png,jpg,svg"
        }
        if(transaction.notes ===""){
            error.notes =" Please enter notes"
        }


        if (error.transactiondate === "" && error.month === "" && error.transactiontype === "" && error.fromaccount === "" && error.toaccount === "" && error.amount === "" && error.receipt === "" && error.notes === "") {
      

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
           
          error.success = "Transaction Sucsess"
    
            }
    


      
        return error;
    }

    export default validation;


