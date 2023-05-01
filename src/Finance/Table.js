import React, { useState, useEffect } from "react";
import "./Alltransaction.css";
import { useNavigate } from "react-router-dom";

export const Table = (prop) => {

    
    const [page, setPage] = useState(1)
    const [alltransaction, setAlltransaction] = useState([])
    const [order, setOrder] = useState("ASC")

    const pageperrecord = 3;

    const number = Math.ceil(prop.all.length / pageperrecord);
    let pagearray = []

    for (let i = 1; i <= number; i++) {
        pagearray.push(i);
    }

    const recordstart = (page - 1) * pageperrecord;
    const recordend = (page) * pageperrecord;



    useEffect(() => {
        setAlltransaction(prop.all.slice(recordstart, recordend))
    }, [prop.all, page])

    const navigate = useNavigate();

    function View(alltransaction) {

        navigate("/view", { state: alltransaction });

    }

    function edit(id) {
        navigate(`/addtransaction/${id}`)
    }

    function funpage(value) {
        setPage(value);
        console.log(value, "value")
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
            setAlltransaction(prop.all.slice(recordstart, recordend))
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
            setAlltransaction(prop.all.slice(recordstart, recordend))
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
                            <th>Edit</th>
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
                                <td onClick={() => View(alltransaction)} >View </td>
                                <td onClick={()=>edit(alltransaction.id)}>Edit</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className="paginationdiv">
                    {pagearray.map((value, index) =>
                        <span className="pagenumber" onClick={() => funpage(value)} > {value}</span>
                    )}
                </div>
            </div>




        </>

    )
}

