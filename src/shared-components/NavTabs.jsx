import React from "react";

export const NavTabs = (props) => {
    const tabs = props.tabs;
    const tabBtns = tabs.map(tab => {
        return (
            <li className="nav-item" role="presentation" key={tab.tabId}>
                <button className={"nav-link" + (tab.initialActive ? " active" : "")} id={"nav-"+tab.tabId+"-tab"} data-bs-toggle="tab" data-bs-target={"#nav-"+tab.tabId}
                    type="button" role="tab" aria-controls={"nav-"+tab.tabId}>
                        {tab.navTitle}
                </button>
            </li>
        )
    });
    const tabContent = tabs.map(tab => {
        return(
            <div className={"tab-pane fade" + (tab.initialActive ? " active show" : "")} id={"nav-"+tab.tabId} role="tabpanel" aria-labelledby={"nav-"+tab.tabId+"-tab"}>
                {tab.tabContent}
            </div>
        );
    });
    return (
        <React.Fragment>
            <ul className="nav nav-tabs custom-tabs" role="tablist">
                {tabBtns}
            </ul>
            <div className="tab-content" id="nav-tabContent">
                {tabContent}
            </div>
        </React.Fragment>
    );
};