import React, { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExpensesList = ({ expenses,handleDelete }) => {
  const [totalExpense, setTotalExpense] = useState(0);
  const calExpense = () => {
    let value = 0;
    expenses.forEach((expense) => {
      value += parseInt(expense.amount);
    });
    setTotalExpense(value);
  };

  useEffect(() => {
    calExpense();
  }, [expenses]);

  if (expenses.length == 0) {
    return;
  }

  return (
    <div className="shadow-md shadow-gray-600 w-3/4 p-10">
      {expenses.map((expense) => {
        return (
          <ul className="" key={expense.id}>
            <li className="flex justify-between items-center border-2 p-4 my-4 rounded">
              <p>{expense.name}</p>
              <p className="flex justify-center items-center gap-4">Rs {expense.amount} <span className="text-red-700 cursor-pointer" onClick={()=>handleDelete(expense.id)}><FontAwesomeIcon icon={faTrash} /></span></p>
            </li>
          </ul>
        );
      })}
      <div className="w-full flex justify-between items-center p-4 font-bold text-lg border-2 border-black">
        <p>Total Expense:</p>
        <p>Rs {totalExpense}</p>
      </div>
    </div>
  );
};

export default ExpensesList;
