


function Loginvalidation(login) {

    console.log(login, "login");

    const error = {
        email: "",
        password: "",
        emailpassword: "",
    }
    
    if (login.email === "") {
        error.email = "Please enter Email"
    }
    if (login.password === "") {
        error.password = "Please enter password"
    }

    if (error.email === "" && error.password === "") {
      

        var data = JSON.parse(localStorage.getItem("Register") || "[]");

        for (let i = 0; i < data.length; i++) {

            if (data[i].email === login.email && data[i].password === login.password) {

                function stringGen(len) {
                    var text = "";
                    
                    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
                    
                    for (var i = 0; i < len; i++)
                      text += charset.charAt(Math.floor(Math.random() * charset.length));
                    
                    return text;
                  }

                  const Token = stringGen(16)

                  localStorage.setItem('Token',Token);
                

                error.emailpassword = "Success"
                break;

            } else {
                error.emailpassword = "Email or Password Wrong"
            }
            }
        }

        return error;
    }

    export default Loginvalidation;


