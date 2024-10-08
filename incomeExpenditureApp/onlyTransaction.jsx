import React from 'react';
import PropTypes from "prop-types";

function OnlyTransaction({transaction}) {
    const sign = transaction.amount<0?'-':'+';
    return (
        <>
            <li  className={transaction.amount<0?"minus":"plus"}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                <button className="delete-btn">x</button>
            </li>
        </>
    );
}

export default OnlyTransaction;
OnlyTransaction.propTypes = {
    transaction: PropTypes.any,
}