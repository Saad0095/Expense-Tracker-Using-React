import { useState, useEffect } from "react";
import "./App.css";
import AddExpense from "./component/AddExpense";
import ExpensesList from "./component/ExpensesList";

function App() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // const [data,setData] = useState({
  //   name:"",
  //   amount:""
  // });

  // const handleChange = (e) => {
  //     setData({...data,[e.target.name]:e.target.value})
  // };

  const handleAddExpense = () => {
    // setExpense([...expense, {name:data.name,amount:data.amount}])
    if (name.trim() && amount.trim()) {
      setExpenses([...expenses, { id: expenses.length + 1, name, amount }]);
      setName("");
      setAmount("");
    }
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="min-h-screen container mx-auto flex flex-col gap-20 justify-center items-center">
      <ExpensesList expenses={expenses} />
      <AddExpense
        name={name}
        amount={amount}
        setName={setName}
        setAmount={setAmount}
        handleAddExpense={handleAddExpense}
      />
    </div>
  );
}

export default App;

// Income:

// Expense 1
// Expense 2
// .
// .
// .
// Total Expense
// Savings
