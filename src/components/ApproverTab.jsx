import React from "react";

export const ApproverTab = () => {
    return (
        <div className="text-left p-1">
            <h4>Approver</h4>
            <div className="d-inline-flex flex-column">
                <div className="my-2 d-inline-flex flex-column">
                    <button className="btn btn-primary">
                        Get Approver
                    </button>
                    <small className="text-muted">
                        Click button to get the address of the approver.
                    </small>
                </div>
                <button className="btn btn-primary my-2">
                    Approve Transaction
                </button>
            </div>
        </div>
    );
};