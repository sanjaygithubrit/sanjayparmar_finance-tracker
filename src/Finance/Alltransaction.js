import React, { useState, useEffect } from "react";
import "./Alltransaction.css";
import { Link } from "react-router-dom";
import { Table } from "./Component/Table";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {Tabledata} from "../../src/Context/Context";

export const Alltransaction = () => {

   
    const [alltransaction, setAlltransaction] = useState([]);
    const [groupby, setGroupby] = useState([]);
    const [grp, setGrp] = useState(false);
    const [groupvalue, setGroupvalue] = useState("");
    const selectgroupby = [
        { value: "month", label: "Month Year" },
        { value: "transactiontype", label: "Transaction Type" },
        { value: "fromaccount", label: "From Account" },
        { value: "toaccount", label: "To Account" },
        { value: "none", label: "none" },
    ];
    const {datastate,setDatastate} = useContext(Tabledata);
    useEffect(() => {
        setAlltransaction(datastate);
    }, []);

    useEffect(() => {
       setAlltransaction(datastate);
    }, [datastate]);

    const navigate = useNavigate();

    function Logout() {
        localStorage.removeItem("Token");
        navigate("/login");
    }
    function deleterecord(d_id) {
              let deletedata = [...datastate];
            let filterdata = deletedata.filter(item => item.id !== d_id)
            setDatastate(filterdata)
            }

        
    function group(event) {
        setGroupvalue(event.target.value)
    }     

    useEffect(() => {
        if (groupvalue=="") {
            
        } else {
            groupbydata()
        }
            
    }, [groupvalue]);

    
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
        const personGroupedByColor = groupBy(alltransaction, groupvalue);

        setGroupby(personGroupedByColor);
        setGrp(true);
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
                    <Link className="groupby" to="/Addtransaction">
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

