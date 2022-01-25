import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../pages/home-page/HomePage";
import { EthVal } from "../shared-components/EthVal";

export const BalanceTab = () => {
    const {web3, account} = useContext(TransactionContext);
    const [balance, setBalance] = useState(0);
    const getBalance = () => {
        if (web3) {
            web3.eth.getBalance(account, (error, response) => {
                if (error) {
                    alert("Error occured while trying to get balance");
                } else {
                    setBalance((web3 && web3.utils.fromWei(response)) || 0);
                }
            });
        } 
    };
    useEffect(() => {
        getBalance();
    }, [web3, account]);
    return (
        <div className="text-left p-1">
            <h4>Balance</h4>
            <div className="d-inline-flex flex-column">
                <EthVal value={balance}></EthVal>
                <button className="btn btn-gold-gradient" onClick={getBalance}>Get Balance</button>
                <small className="text-muted">Click button to get the current contract balance.</small>
            </div>
        </div>
    );
}