import React, { useState,useEffect } from "react";


export const Alltransaction = () => {

    const [alltransaction, setAlltransaction] = useState([])

        useEffect(() => {
        // console.log(typeof localtransaction,"pppp");

        setAlltransaction(JSON.parse(localStorage.getItem("Transaction") || "[]"));
      }, []);



    return (
        <>
        <img src="C:\fakepath\Path(2).png"></img>
         <table className="usertable">
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
          {alltransaction.map((alltransaction, index) => (
            <tr key={index}>
              <td>{alltransaction.transactiondate}</td>
              <td>{alltransaction.month}</td>
              <td>{alltransaction.transactiontype}</td>
              <td>{alltransaction.fromaccount}</td>
              <td>{alltransaction.toaccount}</td>
              <td>{alltransaction.amount}</td>
              <td><img src={alltransaction.receipt}/></td>
              <td>{alltransaction.notes}</td>
              <td>{alltransaction.receipt}</td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
           {/* {console.log(alltransaction,"alltransaction")} */}
        </>

    )
}