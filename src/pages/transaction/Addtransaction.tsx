import {  useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../assets/style/Alltransaction.css"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addtransactiondata,edittransactiondata } from "../../store/slices/Transaction";
import { month,transactiontype,fromaccount,toaccount,transaction } from "../../assets/constant/constant";
import { RootState } from "../../store/index";

export const Addtransaction:React.FC = () => {

  const dispatch = useDispatch();

  const [addtransaction, setAddtransaction] = useState<any>(transaction);
 
  const navigate = useNavigate();

const transactiondata = useSelector((state:RootState)=> state.transactions)

  var { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      var editdata =[...transactiondata];
      var idd = id

      let index = editdata.findIndex(x => x.id === Number(idd) );

      const value:any =  editdata[index];
      let x:any
      for ( x in value) {
        setValue(x,value[x])
      }
      setAddtransaction(value);
    } 
    
  },[]);

  const today = new Date();

  let userSchema = yup.object().shape({
    transactiondate: yup.date()
    .typeError("Transaction Date is Required")
    .max(today ,"Enter Valid Transaction Date"),
      month: yup.string().required("Month Year is Required"),
      transactiontype: yup.string().required("Transaction Type is Required"),
      fromaccount: yup.string().required("From Account  is Required"),
      toaccount:yup.string().required("To Account  is Required").notOneOf([yup.ref("fromaccount")],"From and to must not be same") ,
      amount: yup.string().required("Amount  is Required"),
     receipt:yup.mixed().test("required", "You need to provide a file", (value: any | undefined) => {
      // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
      if (value.length > 0) {  
        return true;
      }
      return false;

    }).test("type", "We only support jpeg and jpg format", function (value:any|undefined) {
      if (typeof value ==="string") {
        return true;
      }else{
 
        return value[0] && (value[0].type === "image/jpg" || value[0].type === "image/jpeg" || value[0].type === "image/png");
      }
    }).test("fileSize", "The file is too large", (value: any | undefined) => {
      console.log(typeof value,"jjjj");
      if (typeof value ==="string") {
        return true;
      }else{
        return value[0] && value[0].size <= 2000000;
      }
    }),
      notes: yup  
      .string() 
      .trim()
      .required("Notes is a required field")
      .min(2, "Notes Min 2 character"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors  },
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });

  async function bs(file:any) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    await new Promise<void>(resolve => reader.onload = () => resolve())
    return reader.result
}
function removeimage() {
  const newobj = { ...addtransaction, receipt: "" };
  setAddtransaction(newobj);
  setValue("receipt","")
}

  const onSubmitHandler = async(data:any) => {
console.log(data.transactiondate,"transaction date");

        if (typeof (data.receipt) !== "string") {
        let url = await bs(data.receipt[0])

        data.receipt = url;
  }

  if (id) {

 let editdata = {...data}
    dispatch(edittransactiondata({id:id,data:editdata}))
  
} else {

    let newdata= {...data}
    const len = transactiondata.reduce(sum => sum + 1, 0);
    const addid = transactiondata[len-1].id 
    newdata.id = addid+1;
      dispatch(addtransactiondata(newdata))
}
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
             
              {...register("transactiondate", { required: true })}
             
              placeholder="Enter Transaction Date "
           
            />
            {errors.transactiondate && (
              <p style={{ color: "red" }}>{errors.transactiondate.message?.toString()}</p>
            )}
          </div>

          
          
          <br/>
          <div>
            <span className="form__label">Month Year:</span>
            <select
  
             {...register("month", { required: true })}
            >
              {month.map((k) => (
                <option key={k.label} value={k.value}>
                  {k.label}
                </option>
              ))}
            </select>
            {errors.month && <p style={{ color: "red" }}>{errors.month.message?.toString()}</p>}
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
              <p style={{ color: "red" }}>{errors.transactiontype.message?.toString()}</p>
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
              <p style={{ color: "red" }}>{errors.fromaccount.message?.toString()}</p>
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
              <p style={{ color: "red" }}>{errors.toaccount.message?.toString()}</p>
            )}
          </div>

          <br />
          <div>

            <span className="form__label">Amount:</span>

            <input
              type="number"
              {...register("amount", { required: true })}
              placeholder="Enter Amount"
            />
            {errors.amount && <p style={{ color: "red" }}>{errors.amount.message?.toString()}</p>}
          </div>
          <br />
          <div>
            <label htmlFor="fromfile" className="form__label">
              Receipt:
            </label>
          {addtransaction.receipt===""?( <input
                type="file"
                id="fromfile"
                {...register("receipt", {onChange: async (e) => {
                  let file = await bs(e.target.files[0])
                  const newobj = { ...addtransaction, receipt:file};
                  setAddtransaction(newobj)
                  }})}
              />):( 
                <div>
                   <img src={addtransaction.receipt} alt="sde" />
                <span style={{ color: "red" }} onClick={removeimage} >remove</span></div>)}
              <div>
              {errors.receipt && <p style={{ color: "red" }}>{errors.receipt.message?.toString()}</p>}
              </div>
                       
          </div>
          
          <br />
          <div>
            <span className="form__label">Notes:</span>
            <textarea
              placeholder="notes"
              {...register("notes", { required: true })}
            ></textarea>
            {errors.notes && <p style={{ color: "red" }}>{errors.notes.message?.toString()}</p>}
          </div>
          <br />
          <div>
                  <input className="addtransactionback1" type="submit"></input>
                </div>     
        </form>
      </div>
    </>
  );
};




