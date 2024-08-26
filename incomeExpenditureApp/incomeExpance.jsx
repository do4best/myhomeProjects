import React, {useContext} from 'react';
import {GlobalContext} from "./containercomponents/glocalData.jsx";

function IncomeExpance(props) {
    const {Transactions} = useContext(GlobalContext);
    const amount = Transactions.map(transaction => transaction.amount);
    const income = amount.filter(transaction => transaction > 0).reduce((accu,item) => (accu + item),0).toFixed(2);
    const expanse = (amount.filter(transaction => transaction < 0).reduce((accu, item) => (accu + item),0)*-1).toFixed(2);
    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">{income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">-{expanse}</p>
                </div>
            </div>

        </>
    );
}

export default IncomeExpance;