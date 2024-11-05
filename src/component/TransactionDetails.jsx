import React, { useState,useEffect } from 'react';

const TransactionDetails = ({ selectedData, onSave, onDelete, onClose}) => {

  if (!selectedData) {
    return <p className="text-center text-gray-500">No transaction selected.</p>;
  }

const [edit,setEdit]=useState(false);


const [editedDate,setEditedDate]=useState(selectedData.date);
const [editedCategory,setEditedCategory]=useState(selectedData.category);
const [editedTransaction_type,setEditedTransaction_type]=useState(selectedData.transaction_type);
const [editedModeOfPaymentIn,setEditedModeOfPaymentIn]=useState(selectedData.mode_of_paymentIn);
const [editedModeOfPaymentOut,setEditedModeOfPaymentOut]=useState(selectedData.mode_ofmode_of_paymentOut);
const [editedDescription,setEditedDescription]=useState(selectedData.description);
const [editedAmount,setEditedAmount]=useState(selectedData.amount);



//i need explanation for this

useEffect(() => {
  if (selectedData) {
    setEditedDate(selectedData.date);
    setEditedCategory(selectedData.category);
    setEditedTransaction_type(selectedData.transaction_type);
    setEditedModeOfPaymentIn(selectedData.mode_of_paymentIn);
    setEditedModeOfPaymentOut(selectedData.mode_of_paymentOut);
    setEditedDescription(selectedData.description);
    setEditedAmount(selectedData.amount);
  } else {
    setEditedDate("");
    setEditedCategory("");
    setEditedTransaction_type("");
    setEditedModeOfPaymentIn("");
    setEditedModeOfPaymentOut("");
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

const handleModeOfPaymentInChange=(e)=>{
  setEditedModeOfPaymentIn(e.target.value)
}
const handleModeOfPaymentOutChange=(e)=>{
  setEditedModeOfPaymentOut(e.target.value)
}

const handleDescriptionChange=(e)=>{
  setEditedDescription(e.target.value)
}

const handleAmountChange=(e)=>{
  setEditedAmount(e.target.value)
}



// Conditional fields

// Category


const categoryField =()=>{

  if(selectedData.transaction_type!=='Transfer') {
  return (edit?<p><strong>Category:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' type="text" onChange={handleCategoryChange} value={editedCategory}/></p>:<p><strong>Category:</strong> {selectedData.category}</p>)
}else{
  return (edit?<p><strong>Transfer From:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' onChange={handleModeOfPaymentOutChange} type="text" value={editedModeOfPaymentOut}/></p>:<p><strong>Transfer From:</strong> {selectedData.mode_of_paymentOut}</p>)
  
}

}









const handleSave = () => {

  const editedTransaction = {
    id: selectedData.id,
    date: editedDate,
    transaction_type: editedTransaction_type,
    category: editedCategory,
    description: editedDescription,
    mode_of_paymentIn: editedModeOfPaymentIn,
    mode_of_paymentOut: editedModeOfPaymentOut,
    amount: editedAmount,
  };
  onSave(editedTransaction);
  setEdit(false);

}

const handleCancel = () => {
  setEdit(false);
}
const handleClose = () => {
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
    {edit?<p><strong>Type:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' type="text" onChange={handleTransaction_typeChange} value={editedTransaction_type}/></p>:<p><strong>Type:</strong> {selectedData.transaction_type}</p>}
    {categoryField()}
    {edit?<p><strong>{selectedData.transaction_type==='Transfer'?'Transfer To:':'Mode of Payment:'}</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' onChange={handleModeOfPaymentInChange} type="text" value={editedModeOfPaymentIn}/></p>:<p><strong>{selectedData.transaction_type==='Transfer'?'Transfer To:':'Mode of Payment:'}</strong> {selectedData.mode_of_paymentIn}</p>}
    
    {edit?<p><strong>Description:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' type="text" onChange={handleDescriptionChange} value={editedDescription}/></p>:<p><strong>Description:</strong> {selectedData.description}</p>}
    {edit?<p><strong>Amount:</strong><input className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[300px] mt-4 mb-4' type="number" onChange={handleAmountChange} value={editedAmount}/></p>:<p><strong>Amount:</strong> {selectedData.amount}</p>}
    <p>{edit}</p>
<div className='flex space-around'>
      <button className='ml-[20px] text-teal-500 m-4 h-[40px]' onClick={edit?handleSave:handleEdit}>{edit?'Save':'Edit'}</button>
      <button className='ml-[220px] text-red-500 m-4 h-[40px]'onClick={edit?handleCancel:()=>onDelete(selectedData)} >{edit?'Cancel':'Delete'}</button>
      <button className='ml-[220px] text-black m-4 h-[40px]'onClick={edit?handleCancel:()=>onClose()} >Close</button>
      </div>
      <hr />
      
    </div>
    </div>
    </>
  );
};

export default TransactionDetails;
