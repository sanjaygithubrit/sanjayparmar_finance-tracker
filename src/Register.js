import { useState } from 'react';
import "./Register.css"
import Registervalidation from './Registervalidation';
import { useNavigate } from "react-router-dom";


export default function Register() {

    // States for registration

    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();

    function handleinput(event) {

        const newobj = { ...register, [event.target.name]: event.target.value }
        setRegister(newobj)

    }

    function redirectlogin() {

        navigate("/login");
   
   }


    const handleSubmit = (e) => {
        e.preventDefault();

        const success = Registervalidation(register);
        setError(success)

        if (success.name === "" && success.email === "" && success.password === "") {
            navigate("/login");
            setSubmitted(true)
        }

    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User successfully registered!!</h1>
            </div>
        );
    };



    return (

        <div className='App'>
            <div className="form">
                <div>
                    <h1>User Registration</h1>
                </div>

              
                <div className="messages">

                    {successMessage()}
                </div>

                <form onSubmit={handleSubmit}>
           
                    <label className="label">Name</label>
                    <input onChange={handleinput} className="input" name='name' type="text" />
                    {error.name && <p style={{ color: "red" }}>{error.name}</p>}

                    <label className="label">Email</label>
                    <input onChange={handleinput} className="input" name='email' type="email" />
                    {error.email && <p style={{ color: "red" }}>{error.email}</p>}

                    <label className="label">Password</label>
                    <input onChange={handleinput} className="input" name='password' type="password" />
                    {error.password && <p style={{ color: "red" }}>{error.password}</p>}

                    <button className="btn" type="submit">Register</button>
                    <span>Have already an account?<span className='loginhere' onClick={redirectlogin}>Login here</span></span>
                </form>
            </div>
        </div>
    );
}