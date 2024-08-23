import React, { useState } from "react";
import { useEffect } from "react";

const ExpensesList = ({ expenses }) => {
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

  return (
    <div className="shadow-lg shadow-black w-3/4 p-10">
      {expenses &&
        expenses.map((expense) => {
          return (
            <ul className="" key={expense.id}>
              <li className="flex justify-between items-center border-2 p-4 my-4 rounded">
                <p>{expense.name}</p>
                <p>Rs {expense.amount}</p>
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
