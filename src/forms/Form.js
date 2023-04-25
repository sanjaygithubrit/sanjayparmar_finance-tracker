import React, { useState } from "react";
import "./form.css"

export const Form = () => {

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        dob: "",
        state: "",
        city: "",
        address: "",
        gender: "",
    });
    const [interest, setInterest] = useState([])
    const [error, setError] = useState({})


    const [achievement, setAchievement] = useState([
        { title: "", date: "", }
    ])


    function interesthandle(event) {
        console.log(event.target, "sanjay")
        const { value, checked } = event.target;
        if (checked) {
            setInterest([...interest, value])
        } else {
            setInterest(interest.filter((e) => e !== value))
        }
    }

    function handleinput(event) {
        const newobj = { ...values, [event.target.name]: event.target.value }
        setValues(newobj)
    }

    function handleaddremove(event, index) {
        let newform = [...achievement]
        newform[index][event.target.name] = [event.target.value]

        setAchievement(newform)
    }

    function validation(values, interest, achievement) {
        const error = {}
        const data = [...achievement]
        for (let i = 0; i < data.length; i++) {
            if (data[i].title === "") {
                data[i].titlecheck = "Enter title"
            } else {
                data[i].titlecheck = ""
            }
            if (data[i].date === "") {
                data[i].datecheck = "Enter date"
            } else {
                data[i].datecheck = ""
            }

            setAchievement(data)
        }

        if (interest.length === 0) {

            error.interest = "please check the interest"
        }

        if (values.firstname === "") {
            error.firstname = " please enter firstname"
        }
        else if (!isNaN(values.firstname)) {
            error.firstname = "please Enter only char"
        }
        else if (values.firstname.length < 2) {
            error.firstname = "please Enter atleast 2 char"
        }


        if (values.lastname === "") {
            error.lastname = " please enter lastname"
        }
        else if (!isNaN(values.lastname)) {
            error.lastname = "please Enter only char"
        }
        else if (values.lastname.length < 2) {
            error.lastname = "please Enter atleast 2 char"
        }

        if (values.phone === "") {
            error.phone = " please enter phone no"
        }
        else if (values.phone.length < 10) {
            error.phone = "please Enter 10 digit"
        }
        else if (isNaN(values.phone)) {
            error.phone = "please Enter only number"
        }

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (values.email === "") {
            error.email = " please enter email"
        }
        else if (!values.email.match(mailformat)) {
            error.email = "please Enter valid email"
        }

        const max = "1980-31-12"

        if (values.dob === "") {
            error.dob = " please enter Dob"
        }
        else if (values.dob > max) {
            error.dob = "please Enter dob less 1980"
        }

        if (values.state === "") {
            error.state = " please enter state"
        }
        else if (values.state < 2) {
            error.state = "please Enter atlest 2 char"
        } else if (!isNaN(values.state)) {
            error.firstname = "please Enter only char"
        }

        if (values.city === "") {
            error.city = " please enter city"
        }
        else if (values.city < 2) {
            error.city = "please Enter atlest 2 char"
        } else if (!isNaN(values.city)) {
            error.city = "please Enter only char"
        }

        if (values.address === "") {
            error.address = " please enter address"
        }
        else if (values.address < 15) {
            error.address = "please Enter atlest 15 char"
        }

        if (values.gender === "") {
            error.gender = "Please Provide gender"
        }




        return error;
    }



    function submitform(e) {
        e.preventDefault()
        setError(validation(values, interest, achievement))


    }

    function removefield(index) {
        const rows = [...achievement];
        console.log(index, "index")
        rows.splice(index, 1);
        setAchievement(rows);
    }

    function Addfield() {
        const addrow = { title: "", date: "", }
        const add = [...achievement, addrow]

        setAchievement(add)
        console.log(achievement)
    }


    return (
        <>
            <h1 className="maindiv"> Form </h1>
            <div className="maindiv">

                <form onSubmit={submitform} className="mainform">
                    <div >
                        <span className="form__label">
                            First Name:
                        </span>
                        <input type="text" name="firstname" className="form_input" placeholder="Enter First name" onChange={handleinput} />
                        {error.firstname && <p style={{ color: "red" }}>{error.firstname}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            Last Name:
                        </span>
                        <input type="text" name="lastname" className="form_input" placeholder="Enter Last name" onChange={handleinput} />
                        {error.lastname && <p style={{ color: "red" }}>{error.lastname}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            Phone No:
                        </span>
                        <input type="number" name="phone" className="form_input" placeholder="Enter Phone Number" onChange={handleinput} />
                        {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">

                            Email:
                        </span>
                        <input type="email" name="email" className="form_input" placeholder="Enter Email " onChange={handleinput} />
                        {error.email && <p style={{ color: "red" }}>{error.email}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            Date of Birth:
                        </span>
                        <input type="Date" name="dob" className="form_input" placeholder="Enter DOB " onChange={handleinput} max="1980-31-12" />
                        {error.dob && <p style={{ color: "red" }}>{error.dob}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            Gender:
                        </span>

                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            id="Male"
                            checked={values.gender === "Male"}
                            onChange={handleinput}
                        />
                        <label htmlFor="Male">Male</label>

                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            id="Female"
                            checked={values.gender === "Female"}
                            onChange={handleinput}
                        />
                        <label htmlFor="Female">Female</label>



                        {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            State:
                        </span>
                        <input type="text" name="state" className="form_input" placeholder="Enter State name" onChange={handleinput} />
                        {error.state && <p style={{ color: "red" }}>{error.state}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            City:
                        </span>
                        <input type="text" name="city" className="form_input" placeholder="Enter City name" onChange={handleinput} />
                        {error.city && <p style={{ color: "red" }}>{error.city}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            Address:
                        </span>
                        <textarea placeholder="Enter Address" name="address" onChange={handleinput} ></textarea>
                        {error.address && <p style={{ color: "red" }}>{error.address}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            Interest:
                        </span>
                        <br />
                        <br />
                        <input
                            type="checkbox"
                            id="topping"
                            name="photography"
                            value="photography"

                            onChange={interesthandle}
                        />photography
                        <br />
                        <input
                            type="checkbox"
                            id="dance"
                            name="dance"
                            value="dance"

                            onChange={interesthandle}
                        />dance
                        <br />
                        <input
                            type="checkbox"
                            id="writing"
                            name="writing"
                            value="writing"

                            onChange={interesthandle}
                        />writing
                        <br />
                        <input
                            type="checkbox"
                            id="drawing"
                            name="drawing"
                            value="drawing"

                            onChange={interesthandle}
                        />drawing
                        <br />
                        <input
                            type="checkbox"
                            id="shopping"
                            name="shopping"
                            value="shopping"

                            onChange={interesthandle}
                        />shopping
                        <br />
                        {error.interest && <p style={{ color: "red" }}>{error.interest}</p>}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            achievement:
                        </span>

                    </div>
                    <br />




                    {achievement.map((element, index) => {
                        return (<div key={index}>
                        <div>
                            <span className="form__label">
                                title:
                            </span>
                            <input type="text" name="title" value={element.title || ""} onChange={(e) => handleaddremove(e, index)} className="form_input" placeholder="Enter Title" />
                            {element.titlecheck && <p style={{ color: "red" }}>{element.titlecheck}</p>}
                            </div>
                            <div>
                            <span className="form__label">
                                <br />
                                Date:
                            </span>
                            <input type="text" name="date" value={element.date || ""} onChange={(e) => handleaddremove(e, index)} className="form_input" placeholder="Enter Date" />
                            {element.datecheck && <p style={{ color: "red" }}>{element.datecheck}</p>}
                            </div>
                            <div>
                            <p className="addremove" onClick={() => removefield(index)}>Remove Field</p>
                            
                            </div>
                            {/* <button onClick={removefield}> Remove Field</button><br/> */}
                        </div>)

                    })}
                    <p className="addremove" onClick={Addfield} >Add field</p>

                    {/* <button onClick={Addfield}>Add Field</button> */}

                    <br />

                    <button type="submit"> Submit</button>
                </form>
            </div>
        </>

    )
}


