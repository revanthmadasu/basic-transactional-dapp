import { ApproverTab } from "../../components/ApproverTab";
import { BalanceTab } from "../../components/BalanceTab";
import { TransactionTab } from "../../components/TransactionTab";
import { NavTabs } from "../../shared-components/NavTabs";

export const HomePage = () => {
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
        <div className="m-5 p-3 rounded border-light blur-20 dark-bg-2">
            <div className="header text-left">
                <h2>Welcome to your transactional dapp.</h2>
                <h3>Send <span className="gold-color">money</span> through contract:</h3>
            </div>
            <div className="tabs-section">
                <NavTabs tabs={tabs}></NavTabs>
            </div>
        </div>
    )
};