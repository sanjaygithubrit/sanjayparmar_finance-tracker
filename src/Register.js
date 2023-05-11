import { useState } from "react";
import "./Register.css";
// import Registervalidation from "./Registervalidation";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {
  // States for registration

//   const [registerfild, setRegisterfild] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

  let userSchema = yup.object().shape({
    name: yup
      .string("name should be a string")
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
          var registerdata = JSON.parse(
            localStorage.getItem("Register") || "[]"
          );

          function already(rdata) {
            console.log(rdata);
            return rdata.email === value;
            // return rdata.email === value
          }
          const compare = registerdata.find(already);
          console.log(compare, "compare");
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
  } = useForm({ resolver: yupResolver(userSchema) });

  // const [error, setError] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  // });
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  // function handleinput(event) {

  //     const newobj = { ...register, [event.target.name]: event.target.value }
  //     setRegister(newobj)

  // }

  function redirectlogin() {
    navigate("/login");
  }

  const registersubmit = (data) => {
    const registerarray = JSON.parse(localStorage.getItem("Register") || "[]");

    var id = registerarray.length + 1;

    data.id = id;

    registerarray.push(data);

    localStorage.setItem("Register", JSON.stringify(registerarray));
    setSubmitted(true);
    reset();
    // e.preventDefault();
    // const success = Registervalidation(register);
    // setError(success)
    // if (success.name === "" && success.email === "" && success.password === "") {
    //     navigate("/login");
    //     setSubmitted(true)
    // }
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
              name="name"
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
              name="email"
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
              name="password"
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
