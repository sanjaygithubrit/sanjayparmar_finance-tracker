import React, { useEffect, useState } from "react";
import Validation from "./Component/validation";
import { Link, useParams } from "react-router-dom";

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

  const [error, setError] = useState({
    transactiondate: "",
    month: "",
    transactiontype: "",
    fromaccount: "",
    toaccount: "",
    amount: "",
    receipt: "",
    notes: "",
    success:"",
  });

  let { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      console.log(id, "mm");
    } else {
      var editdata = JSON.parse(localStorage.getItem("Transaction") || "[]");
      console.log(editdata[id - 1]);
      setTransaction(editdata[id - 1]);

      console.log("sanjay");
    }
  }, []);

  // useEffect(()=>{

  //        setTransaction(transaction)

  //     }, [transaction])

  const month = [
    { value: "Jan 2023", label: "Jan 2023" },
    { value: "Feb 2023", label: "Feb 2023" },
    { value: "Mar 2023", label: "Mar 2023" },
    { value: "Arp 2023", label: "Arp 2023" },
    { value: "May 2023", label: "May 2023" },
    { value: "Jun 2023", label: "Jun 2023" },
    { value: "Jul 2023", label: "Jul 2023" },
    { value: "Aug 2023", label: "Aug 2023" },
    { value: "Sep 2023", label: "Sep 2023" },
    { value: "Oct 2023", label: "Oct 2023" },
    { value: "Nov 2023", label: "Nov 2023" },
    { value: "Des 2023", label: "Des 2023" },
  ];

  const transactiontype = [
    { value: "Home Expense", label: "Home Expense" },
    { value: "Personal Expense", label: "Personal Expense" },
    { value: "Income", label: "Income" },
  ];

  const fromaccount = [
    { value: "Personal Account", label: "Personal Account" },
    { value: "Real Living", label: "Real Living" },
    { value: "My Dream Home", label: "My Dream Home" },
    { value: "Full Circle", label: "Full Circle" },
    { value: "Core Realtors", label: "Core Realtors" },
    { value: "Big Block", label: "Big Block" },
  ];

  const toaccount = [
    { value: "Personal Account", label: "Personal Account" },
    { value: "Real Living", label: "Real Living" },
    { value: "My Dream Home", label: "My Dream Home" },
    { value: "Full Circle", label: "Full Circle" },
    { value: "Core Realtors", label: "Core Realtors" },
    { value: "Big Block", label: "Big Block" },
  ];

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    if (file.size > 1048576) {
      const newobj = { ...transaction, receipt: "size" };
      setTransaction(newobj);
    } else if (file.type === "image/png" ||file.type === "image/jpeg" ||file.type === "image/svg+xml" )
     {
      getBase64(file).then((base64) => {
        const newobj = { ...transaction, receipt: base64 };
        setTransaction(newobj);
        // console.log(base64, "base64");
        console.debug("file stored", base64);
      });
    } else {
      const newobj = { ...transaction, receipt: "type" };
      setTransaction(newobj);
    }
  };

  function handleinput(event) {
    const newobj = { ...transaction, [event.target.name]: event.target.value };
    const errorremove = { ...error, [event.target.name]: "",success:"" };
     
    setError(errorremove);
    setTransaction(newobj);
  }

  function removeimage() {
    const newobj = { ...transaction, receipt: "" };
    setTransaction(newobj);
  }

  function submitform(e) {
    e.preventDefault();
    const success = Validation(transaction);
    setError(success);

    if (
      success.transactiondate === "" &&
      success.month === "" &&
      success.transactiontype === "" &&
      success.fromaccount === "" &&
      success.toaccount === "" &&
      success.amount === "" &&
      success.receipt === "" &&
      success.notes === ""
    ) {

      setTransaction(success);
    }
  }

  return (
    <>
      <div className="finance">
        <h1 className="addmaindiv"> Finance Tracker</h1>
        <div className="addmaindiv">
          <Link to="/alltransaction"> Alltransaction </Link>
        </div>
      </div>

      <div className="addtransaction">
        <form className="addtransactionform" onSubmit={submitform}>
          <div>
            <span className="form__label">Transaction Date:</span>
            <input
              type="Date"
              value={transaction.transactiondate}
              name="transactiondate"
              placeholder="Enter Transaction Date "
              onChange={handleinput}
            />
            {error.transactiondate && (
              <p style={{ color: "red" }}>{error.transactiondate}</p>
            )}
          </div>

          <br />
          <div>
            <span className="form__label">Month Year:</span>
            <select
              name="month"
              defaultValue="default"
              value={transaction.month}
              onChange={handleinput}
            >
              <option value="" disabled>
                Select month{" "}
              </option>
              {month.map((k) => (
                <option key={k.label} value={k.value}>
                  {k.label}
                </option>
              ))}
            </select>
            {error.month && <p style={{ color: "red" }}>{error.month}</p>}
          </div>
          <br />

          <div>
            <span className="form__label">Transaction type:</span>
            <select
              name="transactiontype"
              defaultValue="default"
              value={transaction.transactiontype}
              onChange={handleinput}
            >
              <option value="" disabled>
                Select Transaction type{" "}
              </option>
              {transactiontype.map((key) => (
                <option key={key.label} value={key.value}>
                  {key.label}
                </option>
              ))}
            </select>
            {error.transactiontype && (
              <p style={{ color: "red" }}>{error.transactiontype}</p>
            )}
          </div>
          <br />

          <div>
            <span className="form__label">From Account:</span>
            <select
              name="fromaccount"
              defaultValue="default"
              value={transaction.fromaccount}
              onChange={handleinput}
            >
              <option value="" disabled>
                Select From account{" "}
              </option>
              {fromaccount.map((key) => (
                <option key={key.label} value={key.value}>
                  {key.label}
                </option>
              ))}
            </select>
            {error.fromaccount && (
              <p style={{ color: "red" }}>{error.fromaccount}</p>
            )}
          </div>

          <br />

          <div>
            <span className="form__label">toaccount:</span>
            <select
              name="toaccount"
              defaultValue="default"
              value={transaction.toaccount}
              onChange={handleinput}
            >
              <option value="" disabled>
                Select Toaccount{" "}
              </option>
              {toaccount.map((key) => (
                <option key={key.label} value={key.value}>
                  {key.label}
                </option>
              ))}
            </select>
            {error.toaccount && (
              <p style={{ color: "red" }}>{error.toaccount}</p>
            )}
          </div>

          <br />
          <div>
            <span className="form__label">Amount:</span>

            <input
              type="number"
              name="amount"
              value={transaction.amount}
              placeholder="Enter Amount"
              onChange={handleinput}
            />
            {error.amount && <p style={{ color: "red" }}>{error.amount}</p>}
          </div>
          <br />
          <div>
            <label htmlFor="fromfile" className="form__label">
              Receipt:
            </label>
            {transaction.receipt === "" ? (
              <input
                type="file"
                name="receipt"
                id="fromfile"
                onChange={imageUpload}
              />
            ) : (
              <div className="removeimage">
                <img src={transaction.receipt} />
                <div onClick={removeimage}> remove</div>
              </div>
            )}

            {error.receipt && <p style={{ color: "red" }}>{error.receipt}</p>}
          </div>
          <br />
          <div>
            <span className="form__label">Notes:</span>
            <textarea
              placeholder="notes"
              name="notes"
              value={transaction.notes}
              onChange={handleinput}
            ></textarea>
            {error.notes && <p style={{ color: "red" }}>{error.notes}</p>}
          </div>
          <br />
          <button type="submit"> Submit</button>
          {error.success && (
            <p style={{ color: "green", fontSize: 30 }}>{error.success}</p>
          )}
        </form>
      </div>
    </>
  );
};
