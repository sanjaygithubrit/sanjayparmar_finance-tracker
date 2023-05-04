import React, { useState, useEffect } from "react";
import "./Alltransaction.css";
import { useNavigate } from "react-router-dom";


export const Table = (prop) => {
    const [filterval, setFilval] = useState("");
    const [page, setPage] = useState(1);
    const [alltransaction, setAlltransaction] = useState([]);
    const [alldata, setAlldata] = useState([]);
    
    const [sorting, setSorting] = useState({
        column: "",
        order: "",
        type: "",
    });


    const navigate = useNavigate();

    function View(alltransaction) {
        navigate("/view", { state: alltransaction });
    }

    function edit(id) {
        navigate(`/addtransaction/${id}`);
    }

    function funpage(value) {
        setPage(value);
        // console.log(value, "value");
    }


    useEffect(() => {
        setAlldata(prop.all);
       
    }, [prop]);

    

    const pageperrecord = 3;

    const number = Math.ceil(alldata.length / pageperrecord);
    var pagearray = [];

    for (let i = 1; i <= number; i++) {
        pagearray.push(i);
    }

    useEffect(() => {
        

        const recordstart = (page - 1) * pageperrecord;
        const recordend = page * pageperrecord;

       

       let { column, order, type } = sorting;
        // console.log(alldata,"10000");
        let  searched = [...alldata];
        // console.log(searched,"100");
    //   console.log(sorting,"sss");
        if (column) {
            
            switch (type) {
                case "date":
                    switch (order) {
                        case "ASC":
                            searched = searched.sort((a, b) =>
                                new Date(a[column]).getTime() > new Date(b[column]).getTime()
                                    ? 1
                                    : -1
                            );
                          
                            break;
                        case "DESC":
                            searched = searched.sort((a, b) =>
                                new Date(a[column]).getTime() < new Date(b[column]).getTime()
                                    ? 1
                                    : -1
                            );
                         
                            break;
                        
                        default:
                            
                          
                    }
                    break;

                case "currency":
                    switch (order) {
                        case "ASC":
                            
                            searched = searched.sort((a, b) =>
                                +a[column] > +b[column] ? 1 : -1
                            );
                            break;
                        case "DESC":
                            searched = searched.sort((a, b) =>
                                +a[column] < +b[column] ? 1 : -1
                            );
                            break;
                        default:
                           
                    }
                    break;
                default:
                  
                    switch (order) {
                        case "ASC":
                            
                            searched = searched.sort((a, b) =>
                                a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
                            );
                  
                            break;
                        case "DESC":
                            searched = searched.sort((a, b) =>
                                a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
                            );
                         
                            break;
                        default:
                    
                    }
            }
        }

        setAlltransaction(searched.slice(recordstart, recordend));
    }, [sorting,page,alldata]);



    const sort = (column, type) => {
        const tempsorting = { ...sorting };

        if (column === tempsorting.column) {
            switch (tempsorting.order) {
                case "":
                    tempsorting.column = column;
                    tempsorting.order = "ASC";
                    tempsorting.type = type;
                    break;
                case "ASC":
                    tempsorting.column = column;
                    tempsorting.order = "DESC";
                    tempsorting.type = type;
                    break;
                default:
                    console.log("sanjay");
                    tempsorting.order = "";
                    tempsorting.column=column;
                    tempsorting.type = type;
            }
        } else {
            console.log(column);
            tempsorting.column = column;
            tempsorting.order = "ASC";
            tempsorting.type = type;
        }

        setSorting(tempsorting);
      
    };

  

    const searchVal = (e) => {
        if (e.target.value === "") {
            setAlldata(prop.all);
            // setAlltransaction(alldata);
        } else {
            const searchdata = alldata.filter(
                (item) =>
                    item.transactiondate
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    item.month.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    item.transactiontype
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    item.fromaccount
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    item.toaccount.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    item.amount.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    item.notes.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setAlldata(searchdata);
            // setAlltransaction(searchdata);
        }
        setFilval(e.target.value);
    };

    return (
        <>
            <div className="searchdiv">
                <input
                    value={filterval}
                    className="searchspan"
                    onInput={(e) => searchVal(e)}
                ></input>
                <span className="searchspan">Search</span>
               
            </div>
            <div>

           
            </div>
            <div className="addtransactionmaindiv">
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => sort("transactiondate", "date")}>
                                transactiondate
                            </th>
                            <th onClick={() => sort("month", "string")}>month</th>
                            <th onClick={() => sort("transactiontype", "string")}>
                                transactiontype
                            </th>
                            <th onClick={() => sort("fromaccount", "string")}>fromaccount</th>
                            <th onClick={() => sort("toaccount", "string")}>toaccount</th>
                            <th onClick={() => sort("amount", "currency")}>amount</th>
                            <th>receipt</th>
                            <th onClick={() => sort("notes", "string")}>notes</th>
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
                                <td>
                                    {new Intl.NumberFormat("en-IN").format(alltransaction.amount)}
                                </td>
                                <td>
                                    <img src={alltransaction.receipt} />
                                </td>
                                <td>{alltransaction.notes}</td>
                                <td onClick={() => View(alltransaction)}>View </td>
                                <td onClick={() => edit(alltransaction.id)}>Edit</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="paginationdiv">
                    {pagearray.map((value, index) =>
                        page === value ? (
                            <span className="pagenumberselect" onClick={() => funpage(value)}>
                                {value}
                            </span>
                        ) : (
                            <span className="pagenumber" onClick={() => funpage(value)}>
                                {value}{" "}
                            </span>
                        )
                    )}
                </div>
            </div>
        </>
    );
};


