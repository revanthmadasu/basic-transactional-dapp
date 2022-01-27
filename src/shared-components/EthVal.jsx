export const EthVal = (props) => {
    return (
        <span className="eth-value">
            <span className="value">{props.value}</span>
            <span className="curr-ext">ETH</span>
        </span>
    );
};