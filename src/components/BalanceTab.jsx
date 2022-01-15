import React from "react";

export const BalanceTab = () => {
    return (
        <div className="text-left p-1">
            <h4>Balance</h4>
            <div className="d-inline-flex flex-column">
                <button className="btn btn-gold-gradient">Get Balance</button>
                <small className="text-muted">Click button to get the current contract balance.</small>
            </div>
        </div>
    );
}