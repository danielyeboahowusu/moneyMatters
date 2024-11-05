import React, { useState } from 'react';


const TransactionData = (props) => {
  const showData = props.transactionData.filter((show) => show.id > 1 && show.transaction_type!=='Transfer');
  
  const transferData = props.transactionData.filter((show) => show.id > 1 && show.transaction_type==='Transfer');


  const [transactionSwitch,setTransactionSwitch]=useState('Transaction');

 const handleTransferSwitch =(e)=>{
  e.preventDefault()
  setTransactionSwitch('Transfer');
 }
 const handleTransactionSwitch =(e)=>{
  e.preventDefault()
  setTransactionSwitch('Transaction');
 }
 const handleMopSwitch =(e)=>{
  e.preventDefault()
  setTransactionSwitch('MoP');
 }



  const handleSelectedtransaction=(id)=>{
    let selectedData= props.transactionData.find((show) => show.id === id)
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
              <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transactioninfo.mode_of_paymentIn}</td>
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
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold w-[290px]">Transfer From</th>
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold w-[250px]">Transfer To</th>
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold w-[250px]">Description</th>
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Amount</th>
        </tr>
      </thead>
      <tbody>
      {transferData.map((transferinfo, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-teal-100 transition-colors duration-200`}
              onClick={() => handleSelectedtransaction(transferinfo.id)}
            >
            

          
            <td className="px-6 py-4 border-b border-gray-200 text-gray-700 font-medium">{transferinfo.date}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transferinfo.mode_of_paymentOut}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transferinfo.mode_of_paymentIn}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transferinfo.description}</td>
            <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{transferinfo.amount}</td>
          </tr>
      ))}
      </tbody>
    </table>)
  }


// Mop Table as a fucntion

const MopTable = () => {
  const mopBalances = props.mopData[0]; // Accessing the first item in the mopData array

  return (
    <table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-teal-500 text-white text-sm uppercase tracking-wider">
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Mode of Payment</th>
          <th className="px-6 py-3 border-b-2 border-gray-200 font-semibold">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-50 hover:bg-teal-100 transition-colors duration-200">
          <td className="px-6 py-4 border-b border-gray-200 text-gray-700 font-medium">Cash</td>
          <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{mopBalances.cash_balance}</td>
        </tr>
        <tr className="bg-white hover:bg-teal-100 transition-colors duration-200">
          <td className="px-6 py-4 border-b border-gray-200 text-gray-700 font-medium">Momo</td>
          <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{mopBalances.momo_balance}</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-teal-100 transition-colors duration-200">
          <td className="px-6 py-4 border-b border-gray-200 text-gray-700 font-medium">Bank</td>
          <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{mopBalances.bank_balance}</td>
        </tr>
      </tbody>
    </table>
  );
};




  return (
    <div className="p-6 bg-gray-100">
      <div>
      <button className={transactionSwitch === 'Transaction' ? 'bg-gray-200 shadow-inner h-12 w-[180px] rounded-t-lg pl-2 pr-4 font-bold' : 'pl-2 pr-4'} onClick={handleTransactionSwitch}>Transactions Data</button>
     <button className={transactionSwitch === 'Transfer' ? 'bg-gray-200 shadow-inner h-12 w-[150px] rounded-t-lg pl-2 pr-4 font-bold' : 'pl-2 pr-4'} onClick={handleTransferSwitch}>Transfer Data</button>
     <button className={transactionSwitch === 'MoP' ? 'bg-gray-200 shadow-inner h-12 w-[150px] rounded-t-lg pl-2 pr-4 font-bold' : 'pl-2 pr-4'} onClick={handleMopSwitch}>MoP Data</button>

      <div className='bg-gray-200 h-[7px]'></div>
      <br />
      </div>
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
       {transactionSwitch === 'Transaction' ? 'Transaction Data' : transactionSwitch === 'Transfer' ? 'Transfer Data' : 'MoP Data'}
     </h2>
       {transactionSwitch === 'Transaction' ? transactionTable() : transactionSwitch === 'Transfer' ? transferTable(): transactionSwitch === 'MoP' ? MopTable():null}

      {/* <CategoryModal/> */}
    </div>
  );
};

export default TransactionData;
