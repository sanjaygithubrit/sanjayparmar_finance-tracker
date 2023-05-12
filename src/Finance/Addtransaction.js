import { useContext, useEffect, useState } from "react";
// import Validation from "./Component/validation";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";


import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { parse, isDate } from "date-fns";
import parse from "date-fns/parse";
import {Tabledata} from "../../src/Context/Context";

import { useNavigate } from "react-router-dom";

export const Addtransaction = () => {
  const [addtransaction, setAddtransaction] = useState({
    transactiondate: "",
    month: "",
    transactiontype: "",
    fromaccount: "",
    toaccount: "",
    amount: "",
    receipt: "",
    notes: "",
  });

  const {datastate,setDatastate} = useContext(Tabledata);

  const navigate = useNavigate();

  // const [error, setError] = useState({
  //   transactiondate: "",
  //   month: "",
  //   transactiontype: "",
  //   fromaccount: "",
  //   toaccount: "",
  //   amount: "",
  //   receipt: "",
  //   notes: "",
  //   success:"",
  // });

  var { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      console.log(id, "mm");
    } else {
      console.log(id,"id");
      var editdata = datastate;
      var idd = id
     
      // let index = datastate.findIndex(x => x.id ===data.id);
      let ind = editdata.findIndex(({ id }) => id == idd);
      // console.log(ind,"index");
      // console.log(editdata.findIndex(({ id }) => id == idd));
      const value =  editdata[ind];
      console.log("value",value);
      for (let x in value) {
        setValue(x,value[x])
      }
      setAddtransaction(value);

      console.log("sanjay");
    }
  }, []);

  // useEffect(()=>{

  //        setTransaction(transaction)

  //     }, [transaction])

  const month = [
    { label: '-- select option --', value: '' },
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
    { label: '-- select option --', value: '' },
    { value: "Home Expense", label: "Home Expense" },
    { value: "Personal Expense", label: "Personal Expense" },
    { value: "Income", label: "Income" },
  ];

  const fromaccount = [
    { label: '-- select option --', value: '' },
    { value: "Personal Account", label: "Personal Account" },
    { value: "Real Living", label: "Real Living" },
    { value: "My Dream Home", label: "My Dream Home" },
    { value: "Full Circle", label: "Full Circle" },
    { value: "Core Realtors", label: "Core Realtors" },
    { value: "Big Block", label: "Big Block" },
  ];

  const toaccount = [
    { label: '-- select option --', value: '' },
    { value: "Personal Account", label: "Personal Account" },
    { value: "Real Living", label: "Real Living" },
    { value: "My Dream Home", label: "My Dream Home" },
    { value: "Full Circle", label: "Full Circle" },
    { value: "Core Realtors", label: "Core Realtors" },
    { value: "Big Block", label: "Big Block" },
  ];

  // const getBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //     reader.readAsDataURL(file);
  //   });
  // };

  // const imageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file.size > 1048576) {
  //     const newobj = { ...transaction, receipt: "size" };
  //     setTransaction(newobj);
  //   } else if (file.type === "image/png" ||file.type === "image/jpeg" ||file.type === "image/svg+xml" )
  //    {
  //     getBase64(file).then((base64) => {
  //       const errorremove = { ...error, receipt: "",success:"" };
     
  //       setError(errorremove);
  //       const newobj = { ...transaction, receipt: base64 };
  //       setTransaction(newobj);
  //       // console.log(base64, "base64");
  //       console.debug("file stored", base64);
  //     });
  //   } else {
  //     const newobj = { ...transaction, receipt: "type" };
  //     setTransaction(newobj);
  //   }
  // };

  // function handleinput(event) {
  //   const newobj = { ...transaction, [event.target.name]: event.target.value };
  //   const errorremove = { ...error, [event.target.name]: "",success:"" };
     
  //   setError(errorremove);
  //   setTransaction(newobj);
  // }

  // function removeimage() {
  //   const newobj = { ...transaction, receipt: "" };
  //   setTransaction(newobj);
  // }

  // function submitform(e) {
  //   e.preventDefault();
  //   const success = Validation(transaction);
  //   setError(success);

  //   if (
  //     success.transactiondate === "" &&
  //     success.month === "" &&
  //     success.transactiontype === "" &&
  //     success.fromaccount === "" &&
  //     success.toaccount === "" &&
  //     success.amount === "" &&
  //     success.receipt === "" &&
  //     success.notes === ""
  //   ) {

  //     setTransaction(success);
  //   }
  // }
  // function parseDateString(value, originalValue) {
  //   const parsedDate = isDate(originalValue)
  //     ? originalValue
  //     : parse(originalValue, "yyyy-MM-dd", new Date());
  
  //   return parsedDate;
  // }

  const today = new Date();

  let userSchema = yup.object().shape({
    transactiondate: yup.string()
    .required("Transaction Date is Required")
    .max(today, "Enter Valid Transaction Date"),
      month: yup.string().required("Month Year is Required"),
      transactiontype: yup.string().required("Transaction Type is Required"),
      fromaccount: yup.string().required("From Account  is Required"),
   
      toaccount:yup.string().required("To Account  is Required").notOneOf([yup.ref("fromaccount")],"From and to must not be same") ,
      amount: yup.string().required("Amount  is Required"),
     receipt:yup.mixed().test("required", "You need to provide a file", (value) => {
      // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
      if (value.length > 0) {  
        return true;
      }
      return false;
      
    }).test("type", "We only support jpeg and jpg format", function (value) {
      if (typeof value ==="string") {
        return true;
      }else{
        console.log("sanjjjjjjjjjjjj");
        return value[0] && (value[0].type === "image/jpg" || value[0].type === "image/jpeg" || value[0].type === "image/png");
      }
    }).test("fileSize", "The file is too large", (value) => {
      console.log(typeof value,"jjjj");
      if (typeof value ==="string") {
        return true;
      }else{
        return value[0] && value[0].size <= 2000000;
      }
      // console.log(value[0].size,"size");
}),
      notes: yup  
      .string("notes should be a string") 
      .trim()
      .required("Notes is a required field")
      .min(2, "Notes Min 2 character"),
    // createdOn: date().default(() => new Date()),
  });

  const {
    register,
    handleSubmit,
    formState: { errors  },
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });

  async function bs(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    await new Promise(resolve => reader.onload = () => resolve())
    return reader.result
}
function removeimage() {
  const newobj = { ...addtransaction, receipt: "" };
  setAddtransaction(newobj);
  setValue("receipt","")
}

  
  const onSubmitHandler = async(data) => {
console.log(data.receipt,"reciptttt");
    if (typeof (data.receipt) !== "string") {
      let url = await bs(data.receipt[0])

      data.receipt = url;
  }


    setAddtransaction(data)
   
    if (data.id === undefined) {
      var data1 =  datastate;

      var id =  datastate[data1.length - 1].id;
   console.log(id,"beforid");
      data.id = id + 1;
console.log(data.id,"dataid");
      data1.push(data);
setDatastate(data1)
navigate("/alltransaction");
      // localStorage.setItem('Transaction', JSON.stringify(data1));
      
      } 
      else {

          var editdata =  datastate;
         let index = datastate.findIndex(x => x.id ===data.id);
         console.log(index,"index");
          editdata[index]= data;
           setDatastate(editdata)
          // localStorage.setItem('Transaction', JSON.stringify(editdata));

      }
    // var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
    // var id = get.length + 1;
    // data.id = id;
    // get.push(data);

    // // localStorage.setItem('Transaction', JSON.stringify(get));
    // localStorage.setItem("addtransaction", JSON.stringify(get));
    reset();
    navigate("/alltransaction");
  };

  return (
    <>
      <div className="finance">
        <h1 className="addmaindiv"> Finance Tracker</h1>
        <div className="addmaindiv">
          <Link to="/alltransaction"> Alltransaction </Link>
        </div>
      </div>

      <div className="addtransaction">
      <form className="addtransactionform" onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <span className="form__label">Transaction Date:</span>
            <input
              type="Date"
              name="transactiondate"   
              {...register("transactiondate", { required: true })}
             
              placeholder="Enter Transaction Date "
           
            />
            {errors.transactiondate && (
              <p style={{ color: "red" }}>{errors.transactiondate.message}</p>
            )}
          </div>

          <br/>
          <div>
            <span className="form__label">Month Year:</span>
            <select
          name="month"
             {...register("month", { required: true })}
            >

              {month.map((k) => (
                <option key={k.label} value={k.value}>
                  {k.label}
                </option>
              ))}
            </select>
            {errors.month && <p style={{ color: "red" }}>{errors.month.message}</p>}
          </div>
          <br />

          <div>
            <span className="form__label">Transaction type:</span>
            <select
          
           
              {...register("transactiontype", { required: true })}
            >
            
              {transactiontype.map((key) => (
                <option key={key.label} value={key.value}>
                  {key.label}
                </option>
              ))}
            </select>
            {errors.transactiontype && (
              <p style={{ color: "red" }}>{errors.transactiontype.message}</p>
            )}
          </div>
          <br />

          <div>
            <span className="form__label">From Account:</span>
            <select
            
              {...register("fromaccount", { required: true })}
            >
            
              {fromaccount.map((key) => (
                <option key={key.label} value={key.value}>
                  {key.label}
                </option>
              ))}
            </select>
            {errors.fromaccount && (
              <p style={{ color: "red" }}>{errors.fromaccount.message}</p>
            )}
          </div>

          <br />

          <div>
            <span className="form__label">toaccount:</span>
            <select
           

              {...register("toaccount", { required: true })}
            >
          
              {toaccount.map((key) => (
                <option key={key.label} value={key.value}>
                  {key.label}
                </option>
              ))}
            </select>
            {errors.toaccount && (
              <p style={{ color: "red" }}>{errors.toaccount.message}</p>
            )}
          </div>

          <br />
          <div>

            <span className="form__label">Amount:</span>

            <input
              type="number"
              name="amount"
              {...register("amount", { required: true })}
              placeholder="Enter Amount"
              
            />
            {errors.amount && <p style={{ color: "red" }}>{errors.amount.message}</p>}
          </div>
          <br />
          <div>
            <label htmlFor="fromfile" className="form__label">
              Receipt:
            </label>
          {addtransaction.receipt==""?( <input
                type="file"
                name="receipt"
                id="fromfile"
                {...register("receipt", {onChange: async (e) => {
                  let file = await bs(e.target.files[0])
                  const newobj = { ...addtransaction, receipt:file};
      
                  setAddtransaction(newobj)
                  }}, { required: true })}
              />):( 
                <div><img src={addtransaction.receipt} />
                <span style={{ color: "red" }} onClick={removeimage} >remove</span></div>)}
              <div>
             
              {errors.receipt && <p style={{ color: "red" }}>{errors.receipt.message}</p>}
              </div>
           

            
          </div>
          <br />
          <div>
            <span className="form__label">Notes:</span>
            <textarea
              placeholder="notes"
              name="notes"
              {...register("notes", { required: true })}
            ></textarea>
            {errors.notes && <p style={{ color: "red" }}>{errors.notes.message}</p>}
          </div>
          <br />
          <div>
                  <input className="addtransactionback1" type="submit"></input>
                </div>
          {/* <button type="submit"> Submit</button> */}
         
        </form>
      </div>
    </>
  );
};




