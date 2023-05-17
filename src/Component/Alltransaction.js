import React, { useState, useEffect } from "react";
import "../../src/assets/style/Alltransaction.css";
import { Link } from "react-router-dom";
import { Table } from "./Table";
import { useNavigate } from "react-router-dom";
import { selectgroupby } from "../assets/constant/constant";
import {useDispatch, useSelector} from "react-redux";
import { deletetransactiondata } from "../store/slices/Transaction";

export const Alltransaction = () => {
 
    const [alltransaction, setAlltransaction] = useState([]);
    const [groupby, setGroupby] = useState([]);
    const [grp, setGrp] = useState(false);
    const [groupvalue, setGroupvalue] = useState("");
    
    const transactionalldata = useSelector((state)=> state.transactions)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setAlltransaction(transactionalldata);
    }, []);


    useEffect(() => {
        console.log(transactionalldata,"dataaaaa");
        setAlltransaction(transactionalldata);
       
    }, [transactionalldata]);

    useEffect(() => {
        console.log(groupvalue,"sasas");
        setAlltransaction(transactionalldata);
        if (groupvalue=="") {
            
        } else {
            console.log("pppp");
            groupbydata()
        }
            
    }, [groupvalue,transactionalldata]);

    function Logout() {
        document.cookie=`Token=;max-age=`+0;
        navigate("/login");
    }

    function deleterecord(d_id) {
         dispatch(deletetransactiondata(d_id))
    }

    function group(event) {

        setGroupvalue(event.target.value)
             
    }     
    function groupbydata() {
        const groupBy = (array, key) => {
            let sanjay = array.reduce((result, currentValue) => {
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                    currentValue
                );
                return result;
            }, []);
            return sanjay;
        };

        if (groupvalue === "none") {
            setGrp(false)
        } else {
            const personGroupedByColor = groupBy(alltransaction, groupvalue);
            setGroupby(personGroupedByColor);
            setGrp(true);
        }
    }

    return (
        <>
            <div className="maingroupby">
                <div className="groupby">
                    <span className="spangroupby">Group By:</span>
                    <select
                        name="toaccount"
                        defaultValue="default"
                        className="searchspan"
                        onChange={group}
                    >
                        <option value="default" disabled>
                            select......{" "}
                        </option>
                        {selectgroupby.map((key) => (
                            <option key={key.label} value={key.value}>
                                {key.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="addtransactioninall">
                    <Link className="groupby" to="addtransaction">
                        {" "}
                        Addtransaction{" "}
                    </Link>
                </div>
                <div onClick={Logout} className="addtransactioninall">
                    Logout
                </div>
            </div>
            <div className="addtransactionmaindiv">
                {grp ? (
                    <div>
                        {Object.values(groupby).map((element, index) => (
                            <div key={index}>
                                <h1>{Object.keys(groupby)[index]}</h1>
                                <Table all={element} deleterecord={deleterecord} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <Table all={alltransaction} deleterecord={deleterecord} />
                )}
            </div>
        </>
    );
};

