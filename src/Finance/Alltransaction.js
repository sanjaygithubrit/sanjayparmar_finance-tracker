import React, { useState, useEffect } from "react";


export const Alltransaction = () => {

    const [alltransaction, setAlltransaction] = useState([])
    const [order, setOrder] = useState("ASC")
    const [groupby, setGroupby] = useState([])

    const selectgroupby = [
        { value: 'month', label: 'Month Year' },
        { value: 'transactiontype', label: 'Transaction Type' },
        { value: 'fromaccount', label: 'From Account' },
        { value: 'toaccount', label: 'To Account' },
        { value: 'none', label: 'none' },
    ];



    useEffect(() => {
        // console.log(typeof localtransaction,"pppp");

        setAlltransaction(JSON.parse(localStorage.getItem("Transaction") || "[]"));
    }, []);


    function group(event) {

const grouptype = event.target.value;

const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };
  
  // Group by color as key to the person array
  const personGroupedByColor = groupBy(alltransaction, grouptype);
  setGroupby(personGroupedByColor);
console.log(personGroupedByColor,"wwww");


    }
   


    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...alltransaction].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setAlltransaction(sorted);
            setOrder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...alltransaction].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setAlltransaction(sorted);
            setOrder("ASC")
        }
    }

    const Amountsorting = (col) => {
        if (order === "ASC") {
            const sorted = [...alltransaction].sort((a, b) =>{
               return a.amount-b.amount
            }
            );
            setAlltransaction(sorted);
            setOrder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...alltransaction].sort((a, b) =>{
            return b.amount-a.amount
            }
            );
            setAlltransaction(sorted);
            setOrder("ASC")
        }
    }   
    return (
        <>
            <table className="usertable">
                <thead>
                    <tr>
                        <th onClick={() => sorting("transactiondate")}>transactiondate</th>
                        <th onClick={() => sorting("month")}>month</th>
                        <th onClick={() => sorting("transactiontype")}>transactiontype</th>
                        <th onClick={() => sorting("fromaccount")}>fromaccount</th>
                        <th onClick={() => sorting("toaccount")}>toaccount</th>
                        <th onClick={() => Amountsorting("amount")}>amount</th>
                        <th>receipt</th>
                        <th onClick={() => sorting("notes")}>notes</th>
                    </tr>
                </thead>
                <tbody>

                    {alltransaction.map((alltransaction, index) => (
                        <tr key={index}>

                            <td>{alltransaction.transactiondate}</td>
                            <td>{alltransaction.month}</td>
                            <td>{alltransaction.transactiontype}</td>
                            <td>{alltransaction.fromaccount}</td>
                            <td>{alltransaction.toaccount}</td>
                            <td>{alltransaction.amount}</td>
                            <td><img src={alltransaction.receipt} /></td>
                            <td>{alltransaction.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div>
                        <span className="form__label">
                        Group By
                        </span>
                        <select name="toaccount"  onChange={group}>
                        <option  disabled>select...... </option>    
                            {selectgroupby.map((key) => (
                                <option key={key.label} value={key.value}>
                                    {key.label}
                                </option>
                            ))}
                           
                        </select>
                        
                    </div>


                    {/* <table className="usertable">
                <thead>
                    <tr>
                        <th onClick={() => sorting("transactiondate")}>transactiondate</th>
                        <th onClick={() => sorting("month")}>month</th>
                        <th onClick={() => sorting("transactiontype")}>transactiontype</th>
                        <th onClick={() => sorting("fromaccount")}>fromaccount</th>
                        <th onClick={() => sorting("toaccount")}>toaccount</th>
                        <th onClick={() => Amountsorting("amount")}>amount</th>
                        <th>receipt</th>
                        <th onClick={() => sorting("notes")}>notes</th>
                    </tr>
                </thead>
                <tbody>

                    {alltransaction.map((alltransaction, index) => (
                        <tr key={index}>

                            <td>{alltransaction.transactiondate}</td>
                            <td>{alltransaction.month}</td>
                            <td>{alltransaction.transactiontype}</td>
                            <td>{alltransaction.fromaccount}</td>
                            <td>{alltransaction.toaccount}</td>
                            <td>{alltransaction.amount}</td>
                            <td><img src={alltransaction.receipt} /></td>
                            <td>{alltransaction.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
{/* {console.log(groupby,"mmmmm")} */}





        </>

    )
}