//Transaction Data Code

import React, { useState } from 'react';

const TransactionData = (props) => {
  const showData = props.transactionData.filter((show) => show.id > 1);


  const [transactionSwitch,setTransactionSwitch]=useState(true);

 const handleTransferSwitch =(e)=>{
  e.preventDefault()
  setTransactionSwitch(false)
 }
 const handleTransactionSwitch =(e)=>{
  e.preventDefault()
  setTransactionSwitch(true)
 }



  const handleSelectedtransaction=(id)=>{
    let selectedData= showData.find((show) => show.id === id)
    props.sendTransactionSelected(selectedData);
  }


// Transaction Table as a fucntion

const transactionTable =()=>{

return(<table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-teal-500 text-white text-sm uppercase tracking-wider">
            <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Date</th>
            <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Category</th>
            <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Type</th>
            <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Mode of Payment</th>
            <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Description</th>
            <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Amount</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((transactioninfo, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-teal-100 transition-colors duration-200`}
              onClick={() => handleSelectedtransaction(transactioninfo.id)}

            >
              <td className="px-6 py-4 border-b border-gray-200 text-gray-700 font-medium">{transactioninfo.date}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transactioninfo.category}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transactioninfo.transaction_type}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transactioninfo.mode_of_payment}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transactioninfo.description}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transactioninfo.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>)
}

// Transfer Table as a fucntion

  const transferTable =()=>{
    
   return(<table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-teal-500 text-white text-sm uppercase tracking-wider">
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Date</th>
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold w-[270px]">Transfer From</th>
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold w-[250px]">Transfer To</th>
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Amount</th>
        </tr>
      </thead>
      <tbody>
          <tr
            className='bg-white hover:bg-teal-100 transition-colors duration-200'>
            

          
            <td className="px-6 py-4 border-b border-gray-200 text-gray-700 font-medium">0</td>
            <td className="px-6 py-4 border-b border-gray-200 text-gray-700">0</td>
            <td className="px-6 py-4 border-b border-gray-200 text-gray-700">0</td>
            <td className="px-6 py-4 border-b border-gray-200 text-gray-700">0</td>
          </tr>
      </tbody>
    </table>)
  }




  return (
    <div className="p-6 bg-gray-100">
      <div>
      <button className={transactionSwitch?'bg-gray-200 shadow-inner h-12 w-[180px] rounded-lg pl-2 pr-4 font-bold':'pl-2 pr-4'} onClick={handleTransactionSwitch}>Transactions Data</button>
      <button className={transactionSwitch?'pl-2 pr-4':'bg-gray-200 shadow-inner h-12 w-[150px] rounded-lg pl-2 pr-4 font-bold'} onClick={handleTransferSwitch}>Transfer Data</button>
      <hr />
      <br />
      </div>
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">{transactionSwitch?'Transaction Data':'Transfer Data'}</h2>
      {transactionSwitch?transactionTable():transferTable()}
    </div>
  );
};

export default TransactionData;


// Transaction Entry Form Code

import React, { useState } from 'react'

const TransactionEntryForm = (props) => {

   const[transType,SetTransType]=useState('')
   const[modeOfPayment,SetModeOfPayment]=useState('')
   const[category,SetCategory]=useState('')
   const[date,SetDate]=useState('')
   const[amount,SetAmount]=useState('')
   const[description,SetDescription]=useState('')

   const handleTranstype=(e)=>{
    e.preventDefault()
    SetTransType(e.target.value)}
   
    const handleModeOfPayment=(e)=>{
    e.preventDefault()
    SetModeOfPayment(e.target.value)}
    
    const handleCategory=(e)=>{
    e.preventDefault()
    SetCategory(e.target.value)}
    
    const handleDate=(e)=>{
    e.preventDefault()
    SetDate(e.target.value)}
    
    const handleAmount=(e)=>{
    e.preventDefault()
    SetAmount(parseFloat(e.target.value) || 0);}
    
    const handleDescription=(e)=>{
    e.preventDefault()
    SetDescription(e.target.value)}




const handleSubmit = (e)=>{
    
    if(date===""||transType==""||category===""||amount===""||description===""){
        e.preventDefault()
       return alert('All fields are required')
    }else {
        e.preventDefault();
        
        const newTransaction = 
        {
            id: props.idcount,
            date:date,
            transaction_type:transType,
            category:category,
            description:description,
            mode_of_payment:modeOfPayment,
            amount:amount
            
    }

props.formSubmit(newTransaction);;

SetTransType('');
SetModeOfPayment('');
SetCategory('')
SetDate('')
SetAmount('');
SetDescription('')

}
}

const handleCancel =(e)=>{
    e.preventDefault();
    

    SetTransType('');
    SetModeOfPayment('');
    SetCategory('');
    SetDate('');
    SetAmount('');
    SetDescription('')

}



  return (
    <>
    <div className='flex justify-center items-center bg-gray-100 w-full h-screen'>
    <div className='w-[500px] h-[730px] shadow-lg rounded-lg bg-white'>
        <h1 className='text-[30px] text-center font-thin bg-teal-500 text-white'>Transaction Form</h1>
        <br />
        <br />
      <form onSubmit={handleSubmit} action="">
            {/* Date */}
        <label htmlFor=""className='mt-1 ml-[50px] block text-black'>Date</label>
        <input type="date" name="" id="" className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[400px] mt-4 mb-4' onChange={handleDate} value={date}/>

            {/* Transaction Type */}
        <label htmlFor=""className='mt-1 ml-[50px] block text-black'>Transaction Type</label>
       <div className='flex justify-center'>
       <button className={transType=='Income'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleTranstype} value={'Income'}>Income</button>
       <button className={transType=='Expense'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleTranstype} value={'Expense'}>Expense</button>
       </div>
            {/* Category */}
        <label htmlFor="" className='mt-1 block text-black ml-[50px]' >{transType} Category</label>
        <select id="options" name="options" className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[400px] mt-4 mb-4'onChange={handleCategory} value={category}>
            <option value="blank"></option>
            <option value="Personal">{transType=="Income"?'Employment':'Personal'}</option>
            <option value="Social">{transType=="Income"?'Investment':'Social'}</option>
            <option value="Business">Business</option>
            <option value="Academic">{transType=="Income"?'Others':'Academic'}</option>
        </select>
            {/* Mode of Payment */}
        <label htmlFor=""className='mt-1 ml-[50px] block text-black'>Mode of Payment</label>
       <div className='flex justify-center'>
       <button className= {modeOfPayment=='Cash'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleModeOfPayment} value={'Cash'}>Cash</button>
       <button className={modeOfPayment=='Momo'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleModeOfPayment} value={'Momo'}>Momo</button>
       <button className={modeOfPayment=='Bank'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleModeOfPayment} value={'Bank'}>Bank</button>
       </div>
         
         {/* Description */}
         <label htmlFor=""className='mt-1 ml-[50px] block text-black'>Description</label>
        <input type="text" name="" id="" className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[400px] mt-4 mb-4' onChange={handleDescription} value={description}/>

        
            {/* Amount */}
        <label htmlFor=""className='mt-1 ml-[50px] block text-black'>Amount</label>
        <input type="nubmer" name="" id="" className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[400px] mt-4 mb-4' onChange={handleAmount} value={amount} placeholder='0'/>
      <br />
      <br />
      <hr />
   <div className='justify-center'> 
   <button className='ml-[30px] w-[100px] text-black m-4 h-[40px]' onClick={handleCancel} >Cancel</button>
   <button type='submit' className='ml-[220px] text-teal-500 m-4 h-[40px]' >Submit</button>
   </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default TransactionEntryForm


//Transaction Details code

import React, { useState,useEffect } from 'react';

const TransactionDetails = ({ selectedData, onSave, onDelete }) => {

  if (!selectedData) {
    return <p className="text-center text-gray-500">No transaction selected.</p>;
  }

const [edit,setEdit]=useState(false);


const [editedDate,setEditedDate]=useState(selectedData.date);
const [editedCategory,setEditedCategory]=useState(selectedData.category);
const [editedTransaction_type,setEditedTransaction_type]=useState(selectedData.transaction_type);
const [editedModeOfPayment,setEditedModeOfPayment]=useState(selectedData.mode_of_payment);
const [editedDescription,setEditedDescription]=useState(selectedData.description);
const [editedAmount,setEditedAmount]=useState(selectedData.amount);



//i need explanation for this

useEffect(() => {
  if (selectedData) {
    setEditedDate(selectedData.date);
    setEditedCategory(selectedData.category);
    setEditedTransaction_type(selectedData.transaction_type);
    setEditedModeOfPayment(selectedData.mode_of_payment);
    setEditedDescription(selectedData.description);
    setEditedAmount(selectedData.amount);
  } else {
    setEditedDate("");
    setEditedCategory("");
    setEditedTransaction_type("");
    setEditedModeOfPayment("");
    setEditedDescription("");
    setEditedAmount(0);
  }
}, [selectedData]);



const handleEdit=() => {
  setEdit(!edit)
 
};


const handleDateChange=(e)=>{
  setEditedDate(e.target.value)
}

const handleTransaction_typeChange=(e)=>{
  setEditedTransaction_type(e.target.value)
}

const handleCategoryChange=(e)=>{
  setEditedCategory(e.target.value)
}

const handleModeOfPaymentChange=(e)=>{
  setEditedModeOfPayment(e.target.value)
}

const handleDescriptionChange=(e)=>{
  setEditedDescription(e.target.value)
}

const handleAmountChange=(e)=>{
  setEditedAmount(e.target.value)
}




const handleSave = () => {

  const editedTransaction = {
    id: selectedData.id,
    date: editedDate,
    transaction_type: editedTransaction_type,
    category: editedCategory,
    description: editedDescription,
    mode_of_payment: editedModeOfPayment,
    amount: editedAmount,
  };
  onSave(editedTransaction);
  setEdit(false);

}

const handleCancel = () => {
  setEdit(false);
}




  return (
    <>
    <div className='bg-gray-100 w-[600px]'>
     <div className='h-[80px]'> </div>

    <div className="p-4 bg-white shadow-md rounded-lg w-[400px]">
      <h2 className="text-2xl font-semibold mb-4 text-center">Transaction Details</h2>
      <hr />
     <br />
    {edit?<p><strong>Date:</strong><input className=' ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-12 mb-4' type="date" onChange={handleDateChange} value={editedDate}/></p>:<p><strong>Date:</strong> {selectedData.date}</p>}
    {edit?<p><strong>Category:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' type="text" onChange={handleCategoryChange} value={editedCategory}/></p>:<p><strong>Category:</strong> {selectedData.category}</p>}
    {edit?<p><strong>Type:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' type="text" onChange={handleTransaction_typeChange} value={editedTransaction_type}/></p>:<p><strong>Type:</strong> {selectedData.transaction_type}</p>}
    {edit?<p><strong>Mode of Payment:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' onChange={handleModeOfPaymentChange} type="text" value={editedModeOfPayment}/></p>:<p><strong>Mode of Payment:</strong> {selectedData.mode_of_payment}</p>}
    {edit?<p><strong>Description:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' type="text" onChange={handleDescriptionChange} value={editedDescription}/></p>:<p><strong>Description:</strong> {selectedData.description}</p>}
    {edit?<p><strong>Amount:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' type="number" onChange={handleAmountChange} value={editedAmount}/></p>:<p><strong>Amount:</strong> {selectedData.amount}</p>}
    <p>{edit}</p>
<div className='flex space-around'>
      <button className='ml-[20px] text-teal-500 m-4 h-[40px]' onClick={edit?handleSave:handleEdit}>{edit?'Save':'Edit'}</button>
      <button className='ml-[220px] text-red-500 m-4 h-[40px]'onClick={edit?handleCancel:()=>onDelete(selectedData)} >{edit?'Cancel':'Delete'}</button>
      </div>
      <hr />
      
    </div>
    </div>
    </>
  );
};

export default TransactionDetails;


// App.jsx code

import React, { useState } from 'react'
import Userform from './component/userform'
import Home from './component/Home'
import TransactionEntryForm from './component/TransactionEntryForm'
import TransactionData from './component/TransactionData'
import TransactionDetails from './component/TransactionDetails'

const App = () => {

  const  [transactionData,setTransactionData]=useState(
    [
    {id:1,
    date:'1/1/2010',
    transaction_type:"",
    category:"",
    mode_of_payment:"",
    description:"",
    amount:0
    }
  ]
  )

  const [selectData,setSelectedData]=useState(null)


const handleTransactionformSubmit = (newTransaction)=>{
  setTransactionData([...transactionData,newTransaction])
}

const handleSelectedtransaction=(transaction)=>{
  setSelectedData(transaction)
  console.log('Selected Transaction:',transaction)
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

let numOfTransactions=transactionData.length

    

  return (
    <div className='flex space-x-4 p-4'>
      <TransactionEntryForm formSubmit={handleTransactionformSubmit} idcount={numOfTransactions+1}/>
      <TransactionData transactionData={transactionData} sendTransactionSelected={handleSelectedtransaction}/>
      <TransactionDetails selectedData={selectData} onSave={handleEditedTransaction} onDelete={handleDeletedTransaction}/>

    </div>
  )
}

export default App
