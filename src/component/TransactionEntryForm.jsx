import React, { useState } from 'react'




const TransactionEntryForm = (props) => {

   const[transType,SetTransType]=useState('')
   const[modeOfPaymentIn,SetModeOfPaymentIn]=useState('')
   const[modeOfPaymentOut,SetModeOfPaymentOut]=useState('')
   const[category,SetCategory]=useState('')
   const[date,SetDate]=useState('')
   const[amount,SetAmount]=useState('')
   const[description,SetDescription]=useState('')

  const income = props.income_Expense[0].income;
  const expense = props.income_Expense[0].expense;
  const balance =income - expense;

   const handleTranstype=(e)=>{
    e.preventDefault()
    SetTransType(e.target.value)}
   
    const handleModeOfPaymentIn=(e)=>{
    e.preventDefault()
    SetModeOfPaymentIn(e.target.value)}
    
    const handleModeOfPaymentOut=(e)=>{
    e.preventDefault()
    SetModeOfPaymentOut(e.target.value)}
    
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


// conditional inputs as functions

// categoy

const categoryFunction=()=>{
    return(
        <>
      <label htmlFor="" className='mt-1 block text-black ml-[50px]' >{transType} Category <button className='bg-gray-300 rounded-3xl w-[22px] font-bold shadow-lg'>+</button></label>
          <select id="options" name="options" className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[400px] mt-4 mb-4'onChange={handleCategory} value={category}>
              <option value="blank"></option>
              <option value="Personal">{transType=="Income"?'Employment':'Personal'}</option>
              <option value="Social">{transType=="Income"?'Investment':'Social'}</option>
              <option value="Business">Business</option>
              <option value="Academic">{transType=="Income"?'Others':'Academic'}</option>
          </select>
        </>
    )
  }

// Mode of Payment Out

const modeOfPaymentOutFunction=()=>{

    return(
        <>
        <label htmlFor=""className='mt-1 ml-[50px] block text-black'>{transType=='Transfer'?'Transfer From':'Mode of Payment'}</label>
        <div className='flex justify-center'>
        <button className= {modeOfPaymentOut=='Cash'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleModeOfPaymentOut} value={'Cash'}>Cash</button>
       <button className={modeOfPaymentOut=='Momo'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleModeOfPaymentOut} value={'Momo'}>Momo</button>
       <button className={modeOfPaymentOut=='Bank'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleModeOfPaymentOut} value={'Bank'}>Bank</button>
        </div>
        </>
    )
  }


// Mode of Payment In

const modeOfPaymentInFunction=()=>{

    const buttonChecker = () => {
        return (
          <>
            {modeOfPaymentOut !== "Cash" && (
              <button
                className={
                  modeOfPaymentIn === "Cash"
                    ? "ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]"
                    : "ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]"
                }
                onClick={handleModeOfPaymentIn}
                value="Cash"
              >
                Cash
              </button>
            )}
            {modeOfPaymentOut !== "Momo" && (
              <button
                className={
                  modeOfPaymentIn === "Momo"
                    ? "ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]"
                    : "ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]"
                }
                onClick={handleModeOfPaymentIn}
                value="Momo"
              >
                Momo
              </button>
            )}
            {modeOfPaymentOut !== "Bank" && (
              <button
                className={
                  modeOfPaymentIn === "Bank"
                    ? "ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]"
                    : "ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]"
                }
                onClick={handleModeOfPaymentIn}
                value="Bank"
              >
                Bank
              </button>
            )}
          </>
        );
      };

    return(
        <>
        <label htmlFor=""className='mt-1 ml-[50px] block text-black'>{transType=='Transfer'?'Transfer To':'Mode of Payment.'}</label>
        <div className='flex justify-center'>
        {buttonChecker()}
        </div>
        </>
    )
  }


const handleSubmit = (e)=>{
    
    if((date===""||transType==""||amount===""||description===""||modeOfPaymentIn==="")||(category===""&&transType!=='Transfer')||(modeOfPaymentOut===""&&transType=='Transfer')){ 
        e.preventDefault()
    return(
       alert('All fields are required')
    )
    }else {
        e.preventDefault();
        
        const newTransaction = 
        {
            id: props.idcount,
            date:date,
            transaction_type:transType,
            category:category,
            description:description,
            mode_of_paymentIn:modeOfPaymentIn,
            mode_of_paymentOut:(transType=='Transfer'?modeOfPaymentOut:null),
            amount:amount
            
    }

props.formSubmit(newTransaction);;

SetTransType('');
SetModeOfPaymentIn('');
SetCategory('')
SetDate('')
SetAmount('');
SetDescription('')
SetModeOfPaymentOut('')

}
}

const handleCancel =(e)=>{
    e.preventDefault();
    

    SetTransType('');
    SetModeOfPaymentIn('');
    SetModeOfPaymentOut('');
    SetCategory('');
    SetDate('');
    SetAmount('');
    SetDescription('')

}



  return (
    <>
    <div className='flex justify-center items-center bg-gray-100 w-full h-screen relative'>
    <div className='absolute top-0 left-0 bg-gradient-to-b from-teal-200 to-teal-500 h-[200px] w-full z-10 mt-[20px] rounded-lg flex justify-center'>
      <div>
        <div className='bg-white text-teal-50 rounded-t-lg text-black font-bold mt-[20px] ml-[50px] w-[200px] text-center ml-[20px]' >
          Total Income
        </div>
        <div className='text-white border border-white text-[70px] h-[150px] ml-[50px] w-[200px] text-center items-center rounded-b-lg'> {income}</div>
      </div>
      <div>
        <div className='bg-white text-teal-50 rounded-t-lg text-black font-bold mt-[20px] ml-[50px] w-[200px] text-center'>
          Total Expense
        </div>
        <div className='text-white border border-white text-[70px] h-[150px] ml-[50px] w-[200px] text-center items-center rounded-b-lg'> {expense}</div>
      </div>
      <div>
        <div className='bg-white text-teal-50 rounded-t-lg text-black font-bold mt-[20px] ml-[50px] w-[200px] text-center'>
          {balance<0?'Debt':'Savings'}
        </div>
        <div className='text-white border border-white text-[70px] h-[150px] ml-[50px] w-[200px] text-center items-center rounded-b-lg'> {balance<0?balance*-1:balance}</div>
      </div>
    </div>
    <br />
    <div className='w-[500px] h-[770px] shadow-lg rounded-lg bg-white z-0 relative mt-[150px]'>
        <h1 className='text-[30px] text-center font-thin rounded-t-lg bg-teal-500 text-white'>Transaction Form</h1>
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
       <button className={transType=='Transfer'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleTranstype} value={'Transfer'}>Transfer</button>
       </div>
            {/* Category */}
        {transType!='Transfer'?categoryFunction():null}

        {/* Mode of Payment Out or Transfer Out */}

        {transType=='Transfer'?modeOfPaymentOutFunction():null}
       
        {/* Mode of Payment Out or Transfer In */}

        {transType==''||transType=='Income'||transType=='Expense'||(transType=='Transfer'&&modeOfPaymentOut!=='')? modeOfPaymentInFunction():null}

            {/* Mode of Payment 1 or Transfer In
        <label htmlFor=""className='mt-1 ml-[50px] block text-black'>{transType=='Transfer'?'Transfer To':'Mode of Payment'}</label>
       <div className='flex justify-center'>
       <button className= {modeOfPaymentIn=='Cash'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleModeOfPaymentIn} value={'Cash'}>Cash</button>
       <button className={modeOfPaymentIn=='Momo'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleModeOfPaymentIn} value={'Momo'}>Momo</button>
       <button className={modeOfPaymentIn=='Bank'?'ml-[30px] bg-teal-500 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]':'ml-[30px] bg-gray-300 w-[100px] rounded-lg shadow-lg text-white m-4 h-[40px]'} onClick={handleModeOfPaymentIn} value={'Bank'}>Bank</button>
       </div> */}

  
         {/* Description */}
         <label htmlFor=""className='mt-1 ml-[50px] block text-black'>Description</label>
        <input type="text" name="" id="" className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[400px] mt-4 mb-4' onChange={handleDescription} value={description}/>

        
            {/* Amount */}
        <label htmlFor=""className='mt-1 ml-[50px] block text-black'>Amount</label>
        <input type="nubmer" name="" id="" className='ml-[50px]  border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 w-[400px] mt-4 mb-4' onChange={handleAmount} value={amount} placeholder='0'/>
      <br />
      {transType ==='Transfer'&&modeOfPaymentOut==''?<div className='h-[98px]'></div>:null}
      <hr />
   <div className='flex justify-between mr-10'> 
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
