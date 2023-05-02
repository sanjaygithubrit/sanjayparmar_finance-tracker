import { useState } from 'react';
import "./Register.css"
import Loginvalidation from './Loginvalidation';
import { useNavigate } from "react-router-dom";



export default function Login() {

    // States for registration

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        email:"",
        password:"",
       emailpassword:"",
    });
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();

    function handleinput(event) {

        const newobj = { ...login, [event.target.name]: event.target.value }
        setLogin(newobj)

    }

function redirectregister() {

     navigate("/register");

}
  


    const handleSubmit = (e) => {
        e.preventDefault();

        const success = Loginvalidation(login);

        setError(success)
        
        if (success.emailpassword === "Success") {
            setSubmitted(true)
            navigate("/alltransaction")
        }

    };
    
    const successMessage = () => {
        return (
            <div
                className="Success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>Successfully Login</h1>
            </div>
        );
    };



    return (

        <div className='App'>
            <div className="form">
                <div>
                    <h1>User Login</h1>
                </div>

              
                <div className="messages">

                    {successMessage()}
                </div>

                <form onSubmit={handleSubmit}>
           
                    <label className="label">Email</label>
                    <input onChange={handleinput} className="input" name='email' type="email" />
                    {error.email && <p style={{ color: "red" }}>{error.email}</p>}

                    <label className="label">Password</label>
                    <input onChange={handleinput} className="input" name='password' type="password" />
                    {error.password && <p style={{ color: "red" }}>{error.password}</p>}
                    {error.emailpassword && <p style={{ color: "red" }}>{error.emailpassword}</p>}

                    <button className="btn" type="submit">Login</button>
                    <span>Don't have an account:<span className='loginhere' onClick={redirectregister}>Registerhere</span></span>
                </form>
            </div>
        </div>
    );
}