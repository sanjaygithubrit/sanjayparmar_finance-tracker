import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slices/Users";
import { RootState } from "../store/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type RegisterForm = {
    name: string;
    email:string;
    password:string;
    id:Number;
  };

export  const Register:React.FC=()=> {

  const [submitted, setSubmitted] = useState(false);

  const registeralldata = useSelector((state:RootState) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let userSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .required("Name is a required field")
      .min(2, "Notes Min 2 character"),
    email: yup
      .string()
      .required("Email is required")
      .email("This is not a valid email")
      .test(
        "all ready registered",
        "User All Ready register",
        function (value) {
          var registerdata = registeralldata;
          function already(rdata:any) {
          return rdata.email === value;
          }
          const compare = registerdata.find(already);
            if (compare === undefined) {
            return true;
          } else {
            return false;
          }
        }
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters.")
      .max(25, "Password must be a maximum limit of 25 characters."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm <RegisterForm>({ resolver: yupResolver(userSchema) });



  const registersubmit = (data:RegisterForm) => {
    let newdata:RegisterForm = { ...data };

    if (registeralldata.length === 0) {
      newdata.id = 1;
      dispatch(addUser(newdata));
    }
    else {
                const addid = registeralldata[registeralldata.length-1].id
                newdata.id = addid + 1;
                dispatch(addUser(newdata))
        }
    setSubmitted(true);
    reset();
    navigate("/login");
  };

    const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User successfully registered!!</h1>
      </div>
    );
  };

  function redirectlogin() {
    navigate("/login");
  }

  return (
    <div className="App">
      <div className="form">
        <div>
          <h1>User Registration</h1>
        </div>

        <div className="messages">{successMessage()}</div>

        <form onSubmit={handleSubmit(registersubmit)}>
          <div className="divname">
            <span className="lablestyle">Name:</span>
            <input
              className="input"
        
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter Name"
            />
          </div>
          {errors.name && (
            <p className="errorp" style={{ color: "red" }}>
              {errors.name.message}
            </p>
          )}
          <div className="divname">
            <label className="lablestyle">Email:</label>
            <input
              className="input"
             
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Email"
            />
          </div>
          {errors.email && (
            <p className="errorp" style={{ color: "red" }}>
              {errors.email.message}
            </p>
          )}
          <div className="divname">
            <label className="lablestyle">Password:</label>
            <input
              className="input"
            
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter Password"
            />
          </div>
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <button className="btn" type="submit">
            Register
          </button>
          <span>
            Have already an account?
            <span className="loginhere" onClick={redirectlogin}>
              Login here
            </span>
          </span>
        </form>
      </div>
    </div>
  );
}
