import React, {useContext} from 'react';
import {GlobalContext} from "./containercomponents/glocalData.jsx";
import OnlyTransaction from "./onlyTransaction.jsx";

function TransictionList(props) {
    const {Transactions} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {Transactions.map((transaction)=> (
                  <OnlyTransaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </>
    );
}

export default TransictionList;