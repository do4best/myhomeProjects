import React from 'react';
import "./style.css"
function AddTransaction(props) {
    const [text,setText] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    return (
        <>
        <h3>Add new transaction</h3>
        <form id="form">
            <div className="form-control">

                <label htmlFor="text">Text</label>
                <input type="text" name={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                >Amount <br/>
                    (negative - expense, positive - income)</label
                >
                <input type="number" name={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..."/>
            </div>
            <button className="btn">Add transaction</button>
        </form>

</>
)
    ;
}

export default AddTransaction;