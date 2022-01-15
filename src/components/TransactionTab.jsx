export const TransactionTab = () => {
    return (
        <div className="content form text-left p-1">
            <form action="">
                <div className="form-group d-flex flex-column my-2">
                    <label htmlFor="senderAddress">Sender ETH Address</label>
                    <input type="text" className="formControl" id="senderAddress" placeholder="Enter your address" />
                    <small className="form-text text-muted">Enter your wallet address. Note: you will need to approve this with your private key.</small>
                </div>
                <div className="form-group d-flex flex-column my-2">
                    <label htmlFor="receiverAddress">Receiver ETH Address</label>
                    <input type="text" className="formControl" id="receiverAddress" placeholder="Enter receiver address" />
                    <small className="form-text text-muted">Enter the wallet address of the recipient.</small>
                </div>
                <div className="form-group d-flex flex-column my-2">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="formControl focus-gold-outline" id="amount" placeholder="Enter amount" />
                    <small className="form-text text-muted">How much you want to send in ETH.</small>
                </div>

                <div className="actions text-right">
                    <div className="d-inline-flex flex-column my-2">
                        <button type="submit" className="btn btn-primary rounded-pill">Transfer</button>
                        <div>
                            <small className="form-text text-muted">Click the button to deposit your ETH to the contract.</small>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};