import React, { useState, useEffect } from "react";
import "./Alltransaction.css";
import { Link } from "react-router-dom";


export const Alltransaction = () => {

    const [alltransaction, setAlltransaction] = useState([])
    const [order, setOrder] = useState("ASC")
    const [groupby, setGroupby] = useState([])
    const [grp, setGrp] = useState(true)

    const selectgroupby = [
        { value: 'month', label: 'Month Year' },
        { value: 'transactiontype', label: 'Transaction Type' },
        { value: 'fromaccount', label: 'From Account' },
        { value: 'toaccount', label: 'To Account' },
        { value: 'none', label: 'none' },
    ];

    useEffect(() => {
        setAlltransaction(JSON.parse(localStorage.getItem("Transaction") || "[]"));
    }, []);


    function group(event) {

        const grouptype = event.target.value;

        const groupBy = (array, key) => {
            let sanjay = array.reduce((result, currentValue) => {
                // If an array already present for key, push it to the array. Else create an array and push the object
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                    currentValue
                );
                return result;
            }, []);
            return sanjay;
        };
        const personGroupedByColor = groupBy(alltransaction, grouptype);
      
        setGroupby(personGroupedByColor);
        setGrp(false)
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
            setOrder("no")
        }
        if (order === "no") {
        
            setAlltransaction(JSON.parse(localStorage.getItem("Transaction") || "[]"));
            setOrder("ASC")
        }
    }

    const Amountsorting = (col) => {
        if (order === "ASC") {
            const sorted = [...alltransaction].sort((a, b) => {
                return a.amount - b.amount
            }
            );
            setAlltransaction(sorted);
            setOrder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...alltransaction].sort((a, b) => {
                return b.amount - a.amount
            }
            );
            setAlltransaction(sorted);
            setOrder("no")
        }
        if (order === "no") {
            setAlltransaction(JSON.parse(localStorage.getItem("Transaction") || "[]"));
            setOrder("ASC")
        }
    }

    return (
        <>
    <div className="maingroupby">
                <div className="groupby">
                    <span className="spangroupby" >
                        Group By:
                    </span>
                    <select name="toaccount" defaultValue="default" className="selectbox" onChange={group}>
                        <option value="default" disabled>select...... </option>
                        {selectgroupby.map((key) => (
                            <option key={key.label} value={key.value}>
                                {key.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="addtransactioninall">
                    <Link className="groupby" to='/Addtransaction'> Addtransaction </Link>
                </div>
    </div>
        <div className="addtransactionmaindiv">

            {grp ? <table>
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
                            <td>{new Intl.NumberFormat("en-IN").format( alltransaction.amount)}</td>
                            <td><img src={alltransaction.receipt} /></td>
                            <td>{alltransaction.notes}</td>
                        </tr>
                    ))}

                </tbody>
            </table> : <div>
              
                {Object.values(groupby).map((element, index) =>
               
                    <div key={index}>
                    <h1>{Object.keys(groupby)[index]}</h1>
                        <table >
                            <thead>
                                <tr>
                                    <th>transactiondate</th>
                                    <th>month</th>
                                    <th>transactiontype</th>
                                    <th>fromaccount</th>
                                    <th>toaccount</th>
                                    <th>amount</th>
                                    <th>receipt</th>
                                    <th>notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {element.map((element, ind) => {
                                    return (
                                        <tr key={element} >
                                            <td>{element.transactiondate}</td>
                                            <td>{element.month}</td>
                                            <td>{element.transactiontype}</td>
                                            <td>{element.fromaccount}</td>
                                            <td>{element.toaccount}</td>
                                            <td>{new Intl.NumberFormat("en-IN").format( element.amount)}</td>
                                            <td><img src={element.receipt} /></td>
                                            <td>{element.notes}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                                </table>
                            </div>
                  )}
                </div>
            }
                </div>
            </>
            
    )
}

