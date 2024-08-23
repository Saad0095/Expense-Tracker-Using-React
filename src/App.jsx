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
    if (name.trim() && amount.trim()) {
      // setExpense([...expense, {name:data.name,amount:data.amount}])
      setExpenses([...expenses, { id: expenses.length + 1, name, amount }]);
      setName("");
      setAmount("");
    }
  };

  const handleDelete = (id) =>{
     const newExpenses = expenses.filter(expense => expense.id !== id);
     setExpenses(newExpenses)
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="min-h-screen container mx-auto flex flex-col gap-3 mt-20 items-center">
      <AddExpense
        name={name}
        amount={amount}
        setName={setName}
        setAmount={setAmount}
        handleAddExpense={handleAddExpense}
      />
      <ExpensesList expenses={expenses} handleDelete={handleDelete}/>

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
