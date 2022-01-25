import { useContext, useState } from "react";
import { TransactionContext } from "../pages/home-page/HomePage";
import { convertToFloat } from "../utils/utils";

export const TransactionTab = () => {
    const {web3} = useContext(TransactionContext);
    const [form, setForm] = useState({
        senderEth: "",
        receiverEth: "",
        amount: 0,
        disabled: true
    });

    const inputChangeHandler = (field, event, mapper = (val) => val) => {
        const newVals = {
            ...form,
            [field]: mapper(event.target.value)
        };
        setForm({
            ...newVals,
            disabled: !isFormValid(newVals)
        });
    };

    const submitAction = () => {
        if (!form.disabled) {
            if (!web3.utils.isAddress(form.senderEth)) {
                alert('Invalid Sender Address')
            }
            if (!web3.utils.isAddress(form.receiverEth)) {
                alert('Invalid Receiver Address')
            }
            if (form.amount <= 0) {
                alert('Invalid amount');
            }
        }
    };
    const isFormValid = (form) => (form.senderEth && form.receiverEth && form.amount);
    return (
            <div className="content form text-left p-1">
                <h4>Transfer <span className="gold-color">Ethereum</span></h4>
                <div>
                    <div className="form-group d-flex flex-column my-2">
                        <label htmlFor="senderAddress">Sender ETH Address</label>
                        <input type="text" className="formControl" id="senderAddress" placeholder="Enter your address"
                            value={form.senderEth} onChange={(event) => inputChangeHandler("senderEth", event)} />
                        <small className="form-text text-muted">Enter your wallet address. Note: you will need to approve this with your private key.</small>
                    </div>
                    <div className="form-group d-flex flex-column my-2">
                        <label htmlFor="receiverAddress">Receiver ETH Address</label>
                        <input type="text" className="formControl" id="receiverAddress" placeholder="Enter receiver address"
                            value={form.receiverEth} onChange={(event) => inputChangeHandler("receiverEth", event)}  />
                        <small className="form-text text-muted">Enter the wallet address of the recipient.</small>
                    </div>
                    <div className="form-group d-flex flex-column my-2">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" className="formControl focus-gold-outline" id="amount" placeholder="Enter amount" 
                            value={form.amount} onChange={(event) => inputChangeHandler("amount", event, val => convertToFloat(val, -1))} />
                        <small className="form-text text-muted">How much you want to send in ETH.</small>
                    </div>

                    <div className="actions text-right">
                        <div className="d-inline-flex flex-column my-2">
                            <button className="btn btn-primary" disabled={form.disabled}
                                onClick={submitAction}>Transfer</button>
                            <div>
                                <small className="form-text text-muted">Click the button to deposit your ETH to the contract.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // <TransactionContext.Consumer>
        // </TransactionContext.Consumer>
    );
};