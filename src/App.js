import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expenses/NewExpense";

const items = [
  {
    id: 1,
    title: "JOJO",
    price: 200,
    date: new Date(2021, 0, 28),
  },
  {
    id: 2,
    title: "CAR",
    price: 10,
    date: new Date(2020, 1, 12),
  },
  {
    id: 3,
    title: "sultan tea",
    price: 1000,
    date: new Date(2022, 2, 12),
  },
  {
    id: 4,
    title: "Naruto",
    price: 120,
    date: new Date(2023, 3, 28),
  },
  {
    id: 5,
    title: "Saske",
    price: 900,
    date: new Date(2019, 4, 17),
  },
  {
    id: 6,
    title: "Nike",
    price: 30,
    date: new Date(2022, 4, 28),
  },
  {
    id: 7,
    title: "Cola",
    price: 1000,
    date: new Date(2019, 5, 28),
  },
  {
    id: 8,
    title: "pepsy",
    price: 1000,
    date: new Date(2020, 6, 28),
  },
  {
    id: 9,
    title: "nout",
    price: 90,
    date: new Date(2023, 7, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(items);
  const addNewExpenseHandler = (data) => {
    const upExpenses = [...expenses];
    upExpenses.push(data);
    setExpenses(upExpenses);
  };

  return (
    <div className="apps">
      <div className="items">
        <NewExpense onNewExpenseAdd={addNewExpenseHandler} />
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
