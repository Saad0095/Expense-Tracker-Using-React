import React from "react";

const AddExpense = ({name,amount,setName,setAmount,handleAddExpense}) => {
  return (
    <div className="border-2 w-3/4 p-10">
      <div className="w-full flex justify-center items-center gap-5">
        <input className="border-2 p-2 w-1/2" value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name" />
        <input className="border-2 p-2 w-1/2" value={amount} onChange={(e)=> setAmount(e.target.value)} type="number" placeholder="Amount in Rs"/>
      </div>
      <button className="bg-green-700 text-white mx-auto my-4 px-4 py-2 text-center w-full flex justify-center items-center rounded" onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpense;
