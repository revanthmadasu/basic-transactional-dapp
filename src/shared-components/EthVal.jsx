export const EthVal = (props) => {
    return (
        <span class="eth-value">
            <span className="value">{props.value}</span>
            <span className="curr-ext">ETH</span>
        </span>
    );
};