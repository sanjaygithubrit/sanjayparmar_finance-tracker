import React, { useState } from "react";
// import Dropdown from "./Dropdown";
import validation  from "./validation";
export const Addtransaction = () => {

    const [transaction, setTransaction] = useState({
        transactiondate: "",
        month: "",
        transactiontype: "",
        fromaccount: "",
        toaccount: "",
        amount: "",
        receipt: "",
        notes: "",
    });


    const month = [
        { value: 'Jan 2023', label: 'Jan 2023' },
        { value: 'Feb 2023', label: 'Feb 2023' },
        { value: 'Mar 2023', label: 'Mar 2023' },
        { value: 'Arp 2023', label: 'Arp 2023' },
        { value: 'May 2023', label: 'May 2023' },
        { value: 'Jun 2023', label: 'Jun 2023' },
        { value: 'Jul 2023', label: 'Jul 2023' },
        { value: 'Aug 2023', label: 'Aug 2023' },
        { value: 'Sep 2023', label: 'Sep 2023' },
        { value: 'Oct 2023', label: 'Oct 2023' },
        { value: 'Nov 2023', label: 'Nov 2023' },
        { value: 'Des 2023', label: 'Des 2023' },
    ];


    const transactiontype = [
        { value: 'Home Expense', label: 'Home Expense' },
        { value: 'Personal Expense', label: 'Personal Expense' },
        { value: 'Income', label: 'Income' },
    ];


    const fromaccount = [
        { value: 'Personal Account', label: 'Personal Account' },
        { value: 'Real Living', label: 'Real Living' },
        { value: 'My Dream Home', label: 'My Dream Home' },
        { value: 'Full Circle', label: 'Full Circle' },
        { value: 'Core Realtors', label: 'Core Realtors' },
        { value: 'Big Block', label: 'Big Block' },
    ];

    const toaccount = [
        { value: 'Personal Account', label: 'Personal Account' },
        { value: 'Real Living', label: 'Real Living' },
        { value: 'My Dream Home', label: 'My Dream Home' },
        { value: 'Full Circle', label: 'Full Circle' },
        { value: 'Core Realtors', label: 'Core Realtors' },
        { value: 'Big Block', label: 'Big Block' },
    ];

    const [error, setError] = useState({})






    function handleinput(event) {
        const newobj = { ...transaction, [event.target.name]: event.target.value }
        setTransaction(newobj)
        // console.log(newobj)
    }



    // function validation(values, interest, achievement) {
    //     const error = {}
    //     const data = [...achievement]
    //     for (let i = 0; i < data.length; i++) {
    //         if (data[i].title === "") {
    //             data[i].titlecheck = "Enter title"
    //         } else {
    //             data[i].titlecheck = ""
    //         }
    //         if (data[i].date === "") {
    //             data[i].datecheck = "Enter date"
    //         } else {
    //             data[i].datecheck = ""
    //         }

    //         setAchievement(data)
    //     }

    //     if (interest.length === 0) {

    //         error.interest = "please check the interest"
    //     }

    //     if (values.firstname === "") {
    //         error.firstname = " please enter firstname"
    //     }
    //     else if (!isNaN(values.firstname)) {
    //         error.firstname = "please Enter only char"
    //     }
    //     else if (values.firstname.length < 2) {
    //         error.firstname = "please Enter atleast 2 char"
    //     }


    //     if (values.lastname === "") {
    //         error.lastname = " please enter lastname"
    //     }
    //     else if (!isNaN(values.lastname)) {
    //         error.lastname = "please Enter only char"
    //     }
    //     else if (values.lastname.length < 2) {
    //         error.lastname = "please Enter atleast 2 char"
    //     }

    //     if (values.phone === "") {
    //         error.phone = " please enter phone no"
    //     }
    //     else if (values.phone.length < 10) {
    //         error.phone = "please Enter 10 digit"
    //     }
    //     else if (isNaN(values.phone)) {
    //         error.phone = "please Enter only number"
    //     }

    //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //     if (values.email === "") {
    //         error.email = " please enter email"
    //     }
    //     else if (!values.email.match(mailformat)) {
    //         error.email = "please Enter valid email"
    //     }

    //     const max = "1980-31-12"

    //     if (values.dob === "") {
    //         error.dob = " please enter Dob"
    //     }
    //     else if (values.dob > max) {
    //         error.dob = "please Enter dob less 1980"
    //     }

    //     if (values.state === "") {
    //         error.state = " please enter state"
    //     }
    //     else if (values.state < 2) {
    //         error.state = "please Enter atlest 2 char"
    //     } else if (!isNaN(values.state)) {
    //         error.firstname = "please Enter only char"
    //     }

    //     if (values.city === "") {
    //         error.city = " please enter city"
    //     }
    //     else if (values.city < 2) {
    //         error.city = "please Enter atlest 2 char"
    //     } else if (!isNaN(values.city)) {
    //         error.city = "please Enter only char"
    //     }

    //     if (values.address === "") {
    //         error.address = " please enter address"
    //     }
    //     else if (values.address < 15) {
    //         error.address = "please Enter atlest 15 char"
    //     }

    //     if (values.gender === "") {
    //         error.gender = "Please Provide gender"
    //     }




    //     return error;
    // }



    function submitform(e) {
        e.preventDefault()
         setError(validation(transaction))


    }




    return (
        <>
            <h1 className="maindiv"> Form </h1>
            <div className="maindiv">

                <form className="mainform" onSubmit={submitform}>


                    <div>
                        <span className="form__label">
                            Transaction Date:
                        </span>
                        <input type="Date" name="transactiondate" className="form_input" placeholder="Enter Transaction Date " onChange={handleinput} />
                        {/* {error.date && <p style={{ color: "red" }}>{error.date}</p>} */}

                    </div>
                   

                    <br />
                    <div>
                        <span className="form__label">
                            Month Year:
                        </span>
                        <select name="month" onChange={handleinput}>
                            {month.map((key) => (
                                <option key={key.label} value={key.value}>
                                    {key.label}
                                </option>
                            ))}
                            <option>

                            </option>
                        </select>
                        {/* {error.month && <p style={{ color: "red" }}>{error.month}</p>} */}
                    </div>
                    <br />

                    <div>
                        <span className="form__label">
                            Transaction type:
                        </span>
                        <select name="transactiontype" onChange={handleinput}>
                            {transactiontype.map((key) => (
                                <option key={key.label} value={key.value}>
                                    {key.label}
                                </option>
                            ))}
                            <option>

                            </option>
                        </select>
                        {/* {error.transactiontype && <p style={{ color: "red" }}>{error.transactiontype}</p>} */}
                    </div>

                  

                   
                    <br />

                    <div>
                        <span className="form__label">
                            From Account
                        </span>
                        <select name="fromaccount" onChange={handleinput}>
                            {fromaccount.map((key) => (
                                <option key={key.label} value={key.value}>
                                    {key.label}
                                </option>
                            ))}
                            <option>

                            </option>
                        </select>
                        {/* {error.fromaccount && <p style={{ color: "red" }}>{error.fromaccount}</p>} */}
                    </div>

                    <br/>

                    <div>
                        <span className="form__label">
                        toaccount
                        </span>
                        <select name="toaccount" onChange={handleinput}>
                            {toaccount.map((key) => (
                                <option key={key.label} value={key.value}>
                                    {key.label}
                                </option>
                            ))}
                            <option>

                            </option>
                        </select>
                        {/* {error.toaccount && <p style={{ color: "red" }}>{error.toaccount}</p>} */}
                    </div>

                    <br />
                    <div>
                        <span className="form__label">
                            Amount:
                        </span>
                        <input type="number" name="amount" className="form_input" placeholder="Enter Amount" onChange={handleinput} />
                        {/* {error.amount && <p style={{ color: "red" }}>{error.amount}</p>} */}

                    </div>
                    <br />
                    <div>
                        <span className="form__label">
                            Notes
                        </span>
                        <textarea placeholder="Enter Address" name="notes" onChange={handleinput} ></textarea>
                        {/* {error.notes && <p style={{ color: "red" }}>{error.notes}</p>} */}

                    </div>
                    <br />



                    <button type="submit"> Submit</button>
                </form>
            </div>
        </>

    )
}