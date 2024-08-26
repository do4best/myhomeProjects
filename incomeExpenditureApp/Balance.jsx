import React, {useContext} from 'react';
import {GlobalContext} from "./containercomponents/glocalData.jsx";

function Balance(props) {
    const {Transactions} = useContext(GlobalContext)
    const amounts = Transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, cur) => ( acc += cur ), 0).toFixed(2);
    return (
        <>
            <h4 className={"text-center mt-4"}>Your Balance <span className={"text-success"}>${total}</span></h4>

        </>
    );
}

export default Balance;