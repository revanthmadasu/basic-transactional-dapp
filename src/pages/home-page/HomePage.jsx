import { ApproverTab } from "../../components/ApproverTab";
import { BalanceTab } from "../../components/BalanceTab";
import { TransactionTab } from "../../components/TransactionTab";
import { NavTabs } from "../../shared-components/NavTabs";
import Web3 from "web3";
import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext({

});
export const HomePage = () => {
    const [account, setAccount] = useState();
    let [web3, setWeb3] = useState(null);
    const context = {
        web3: web3,
        account: account
    };
    useEffect(() => {
        async function load() {
            let web3Instance = new Web3(Web3.givenProvider || "http://localhost:9545");
            setWeb3(web3Instance);
            const accounts = await web3Instance.eth.requestAccounts();
            setAccount(accounts[0]);
        }
        load();
    }, []);
    const tabs = [
        {
            tabId: "transfer",
            navTitle: "Transfer",
            tabContent: <TransactionTab></TransactionTab>,
            initialActive: true
        },
        {
            tabId: "balance",
            navTitle: "Balance",
            tabContent: <BalanceTab></BalanceTab>,
        },
        {
            tabId: "approver",
            navTitle: "Approver",
            tabContent: <ApproverTab></ApproverTab>
        }
    ];
    return (
        <TransactionContext.Provider value={context}>
            <div className="m-5 p-3 rounded border-light blur-20 dark-bg-2">
                <div className="header text-left">
                    <h2>Welcome to your transactional dapp.</h2>
                    <h3>Send <span className="gold-color">money</span> through contract:</h3>
                </div>
                <div className="tabs-section">
                    <NavTabs tabs={tabs}></NavTabs>
                </div>
            </div>
        </TransactionContext.Provider>
    )
};