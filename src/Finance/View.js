import React, { useState, useEffect } from "react";
import "./Alltransaction.css";
import { useLocation } from "react-router-dom";

export const View = () => {

    const location = useLocation();

    return (
        <>
            <div>
                <div>
                    <span>Transaction Date:</span>
                    <h1> {location.state.transactiondate}</h1>
                </div>
                <div>
                    <span>Month Year :</span>
                    <h1> {location.state.month}</h1>
                </div>
                <div>
                    <span>Transaction type:</span>
                    <h1> {location.state.transactiontype}</h1>
                </div>
                <div>
                    <span>From Account:</span>
                    <h1> {location.state.fromaccount}</h1>
                </div>
                <div>
                    <span>toaccount:</span>
                    <h1> {location.state.toaccount}</h1>
                </div>
                <div>
                    <span>Receipt:</span>
                    <img src={location.state.receipt} />
                </div>
                <div>
                    <span>Amount:</span>
                    <h1> {new Intl.NumberFormat("en-IN").format(location.state.amount)}</h1>
                </div>
                <div>
                    <span>Notes:</span>
                    <h1> {location.state.notes}</h1>
                </div>

                {/* <h1> {location.state.transactiondate}</h1>
       <h1> {location.state.month}</h1>
       <h1> {location.state.transactiontype}</h1>
       <h1> {location.state.fromaccount}</h1>
       <h1> {location.state.toaccount}</h1>
       <img src={location.state.receipt}/>
     
       <h1> {new Intl.NumberFormat("en-IN").format(location.state.amount)}</h1>
       <h1> {location.state.notes}</h1> */}

            </div>

        </>

    )


}




