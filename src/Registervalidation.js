


function Registervalidation(register) {

    const error = {
        name: "",
        email: "",
        password: "",
    }
   

    if (register.name === "") {
        error.name = "Please enter Name"
    } else if (!isNaN(register.name)) {
        error.name = "Please Enter only char"
    } else if (register.name.length < 2) {
        error.name = "Please Enter min 2 char"
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (register.email === "") {
        error.email = "Please enter Email   "
    } else if (!register.email.match(mailformat)) {
        error.email = "please Enter valid email"
    } else if (!register.email.match(mailformat)) {
        error.email = "please Enter valid email"
    }

    if (register.password === "") {
        error.password = "Please enter Password"
    } else if (register.password.length < 6) {
        error.password = "password length must be 6 digit"
    }

    if (error.name === "" && error.email === "" && error.password === "") {
       

        var data = JSON.parse(localStorage.getItem("Register") || "[]");

        for (let i = 0; i < data.length; i++) {

            if (data[i].email === register.email) {

               
                error.email = "User Already Register"
               
                break;

            }

            }        
    }


    if (error.name === "" && error.email === "" && error.password === "") {
       
        const registerarray =  JSON.parse(localStorage.getItem("Register") || "[]");

        var id =  registerarray.length + 1;
     
        register.id = id;

        registerarray.push(register);

        localStorage.setItem('Register', JSON.stringify(registerarray));
                    
    }


   return error;
}

export default Registervalidation;


