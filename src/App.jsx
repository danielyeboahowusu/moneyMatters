import React, { useState, useEffect } from 'react'
import Userform from './component/userform'
import Home from './component/Home'
import TransactionEntryForm from './component/TransactionEntryForm'
import TransactionData from './component/TransactionData'
import TransactionDetails from './component/TransactionDetails'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const  [transactionData,setTransactionData]=useState(
    [
    {id:1,
    date:'1/1/2010',
    transaction_type:"",
    category:"",
    mode_of_paymentIn:"",
    mode_of_paymentOut:"",
    description:"",
    amount:0
    }
  ]
  )


  const [cashBalance,setCashBalance]=useState(0)
  const [momoBalance,setMomoBalance]=useState(0)
  const [bankBalance,setBankBalance]=useState(0)

  const [income, setIncome]=useState(0.00)
  const [expense, setExpense]=useState(0.00)

  const [selectData,setSelectedData]=useState(null)

  const mopBalance=[{cash_balance:cashBalance, momo_balance:momoBalance,bank_balance:bankBalance}]
  const pandLBalance=[{income:income, expense:expense}]


const handleTransactionformSubmit = (newTransaction)=>{
  setTransactionData([...transactionData,newTransaction])
}

const handleSelectedtransaction=(transaction)=>{
  setSelectedData(transaction)
  console.log('Selected Transaction:',transaction)
}

const handleClosedDetails=()=>{
  setSelectedData(null)
}


const handleEditedTransaction=(transaction)=>{

  const updatedTransactions = transactionData.map((item) =>
    item.id === transaction.id ? transaction : item
  );
  setTransactionData(updatedTransactions)
  setSelectedData(transaction)
}

const handleDeletedTransaction = (transaction) => {
  const updatedTransactions = transactionData.filter((item) => item.id !== transaction.id);
  setTransactionData(updatedTransactions);
  setSelectedData(null); 
  console.log("Deleted transaction and cleared selectedData:", transaction);
};

const calculateCashBalance = () => {
  const balance = transactionData.reduce((total, transaction) => {
    const { transaction_type, mode_of_paymentIn, mode_of_paymentOut, amount } = transaction;

    if (mode_of_paymentIn === 'Cash' && transaction_type !== 'Expense') {
      // Increase balance for cash inflows that are not expenses
      return total + amount;
    } else if (transaction_type === 'Expense' && mode_of_paymentIn === 'Cash') {
      // Decrease balance for expenses paid by cash
      return total - amount;
    } else if (transaction_type === 'Transfer' && mode_of_paymentOut === 'Cash') {
      // Decrease balance for cash outflows that are transactions
      return total - amount;
    } else {
      // If none of the conditions match, balance remains unchanged
      return total;
    }
  }, 0);
  setCashBalance(balance);
};

const calculateMomoBalance = () => {
  const balance = transactionData.reduce((total, transaction) => {
    const { transaction_type, mode_of_paymentIn, mode_of_paymentOut, amount } = transaction;

    if (mode_of_paymentIn === 'Momo' && transaction_type !== 'Expense') {
      // Increase balance for cash inflows that are not expenses
      return total + amount;
    } else if (transaction_type === 'Expense' && mode_of_paymentIn === 'Momo') {
      // Decrease balance for expenses paid by cash
      return total - amount;
    } else if (transaction_type === 'Transfer' && mode_of_paymentOut === 'Momo') {
      // Decrease balance for cash outflows that are transactions
      return total - amount;
    } else {
      // If none of the conditions match, balance remains unchanged
      return total;
    }
  }, 0);
  setMomoBalance(balance);
};


const calculateBankBalance = () => {
  const balance = transactionData.reduce((total, transaction) => {
    const { transaction_type, mode_of_paymentIn, mode_of_paymentOut, amount } = transaction;

    if (mode_of_paymentIn === 'Bank' && transaction_type !== 'Expense') {
      // Increase balance for cash inflows that are not expenses
      return total + amount;
    } else if (transaction_type === 'Expense' && mode_of_paymentIn === 'Bank') {
      // Decrease balance for expenses paid by cash
      return total - amount;
    } else if (transaction_type === 'Transfer' && mode_of_paymentOut === 'Bank') {
      // Decrease balance for cash outflows that are transactions
      return total - amount;
    } else {
      // If none of the conditions match, balance remains unchanged
      return total;
    }
  }, 0);
  setBankBalance(balance);
};

const calculateIncome = () => {
  const balance = transactionData.reduce((total, transaction) => {
    const { transaction_type, amount } = transaction;

    if (transaction_type == 'Income') {
      // Increase balance for cash inflows that are not expenses
      return total + amount;
    } else {
      // If none of the conditions match, balance remains unchanged
      return total;
    }
  }, 0);
  setIncome(balance);
};

const calculateExpense = () => {
  const balance = transactionData.reduce((total, transaction) => {
    const { transaction_type, amount } = transaction;

    if (transaction_type == 'Expense') {
      // Increase balance for cash inflows that are not expenses
      return total + amount;
    } else {
      // If none of the conditions match, balance remains unchanged
      return total;
    }
  }, 0);
  setExpense(balance);
};


// Recalculate cash, momo, bank, income, and expense balances whenever transactionData changes
useEffect(() => {
  calculateCashBalance();
  calculateMomoBalance();
  calculateBankBalance();
  calculateIncome();
  calculateExpense();
}, [transactionData]);


console.log('cash balance ; '+cashBalance);
console.log('momo balance ; '+momoBalance);
console.log('Bank balance ; '+bankBalance);


let numOfTransactions=transactionData.length

    

  return (
    <div className='flex space-x-4 p-4'>
      <TransactionEntryForm formSubmit={handleTransactionformSubmit} idcount={numOfTransactions+1} income_Expense={pandLBalance}/>
      <TransactionData transactionData={transactionData} sendTransactionSelected={handleSelectedtransaction} mopData={mopBalance}/>
      {selectData==null?null:<TransactionDetails selectedData={selectData} onSave={handleEditedTransaction} onDelete={handleDeletedTransaction} onClose={handleClosedDetails}/>}

    </div>
  )
}

export default App
