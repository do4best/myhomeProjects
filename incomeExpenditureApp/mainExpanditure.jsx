import React from 'react';
import Header from "./Header.jsx";
import Balance from "./Balance.jsx";
import TransictionList from "./transictionList.jsx";
import AddTransaction from "./addTransaction.jsx";
import IncomeExpance from "./incomeExpance.jsx";
import {GlobalProvider} from "./containercomponents/glocalData.jsx";

function MainExpanditure(props) {
    return (
        <>
            <GlobalProvider>
      <Header/>
            <Balance/>
            <IncomeExpance/>
            <TransictionList/>
            <AddTransaction/>
            </GlobalProvider>
        </>
    );
}

export default MainExpanditure;