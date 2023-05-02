import React, { useState, useEffect } from "react";
import "./Alltransaction.css";
import { Link } from "react-router-dom";
import { Table } from "./Table";

import { useNavigate } from "react-router-dom";


export const Alltransaction = () => {

    const [alltransaction, setAlltransaction] = useState([])
   
    const [order, setOrder] = useState("ASC")
    const [groupby, setGroupby] = useState([])
    const [grp, setGrp] = useState(false)

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

    const navigate = useNavigate();

   function Logout() {

        localStorage.removeItem("Token");
           navigate("/login")
           
    }

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
        setGrp(true)
    }

    return (
        <>
            <div className="maingroupby">
                <div className="groupby">
                    <span className="spangroupby" >
                        Group By:
                    </span>
                    <select name="toaccount" defaultValue="default" className="searchspan" onChange={group}>
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
                <div onClick={Logout} className="addtransactioninall">
                   Logout
                </div>
            </div>
            <div className="addtransactionmaindiv">

                {grp ? <div>

                    {Object.values(groupby).map((element, index) =>

                        <div key={index}>
                            <h1>{Object.keys(groupby)[index]}</h1>
                            <Table all={element} />

                        </div>
                    )}
                </div> : <Table all={alltransaction} />
                }
            </div>
        </>

    )
}

