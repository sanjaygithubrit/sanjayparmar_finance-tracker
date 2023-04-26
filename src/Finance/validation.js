
     
     function validation(transaction) {
       
        const error = {}
        // const fileSizeKiloBytes = transaction.receipt.size / 1024
        // console.log(fileSizeKiloBytes,"size")
        // const MIN_FILE_SIZE = 1024 // 1MB

// const image = event.target.files[0];
// if (!image) {
//  console.log('image is required');
//  return false;
//  }
//  if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
//    console.log('select valid image.');
//   return false;
//  }

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
        // else if(transaction.receipt ==""){
        // error.receipt = "please choose file"
        // }else if(!transaction.receipt.match(/\.(jpg|jpeg|png|gif)$/)){
        //     error.receipt ="Please Choose jpg,jpeg,png,gif"
        // }
        else{
           
        
            var get =  JSON.parse(localStorage.getItem("Transaction") || "[]");
          
           
            get.push(transaction);

            localStorage.setItem('Transaction', JSON.stringify(get));
        }

        return error;
    }

    export default validation;


