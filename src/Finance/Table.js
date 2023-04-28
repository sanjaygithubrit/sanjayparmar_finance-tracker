import React, { useState, useEffect } from "react";
import "./Alltransaction.css";
import { useNavigate } from "react-router-dom";

export const Table = (prop) => {

    const [alltransaction, setAlltransaction] = useState([])
    const [order, setOrder] = useState("ASC")

    useEffect(() => {
        setAlltransaction(prop.all)
    }, [prop.all])

    const navigate = useNavigate();

    function View(alltransaction) {

        navigate("/view",{ state: alltransaction });

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
            setAlltransaction(prop.all)
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
            setAlltransaction(prop.all)
            setOrder("ASC")
        }
    }

    return (
        <>

            <div className="addtransactionmaindiv">
                <table>
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
                            <th>View</th>
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
                                <td>{new Intl.NumberFormat("en-IN").format(alltransaction.amount)}</td>
                                <td><img src={alltransaction.receipt} /></td>
                                <td>{alltransaction.notes}</td>
                                <td onClick={()=>View(alltransaction)} >View</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>

    )
}

