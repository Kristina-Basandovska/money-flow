import React, { useState } from "react";
import Header from "./../../Components/Header/Header";
import { connect, useSelector } from "react-redux";

function groupByCategories(operations) {
  const incomes = {};
  const expenses = {};

  for (const operation of operations) {
    const { operationType, amount, category } = operation;
    if (operationType === "income") {
      const prevByCategory = incomes[category] || 0;
      incomes[category] = amount + prevByCategory;
    } else {
      const prevByCategory = expenses[category] || 0;
      expenses[category] = amount + prevByCategory;
    }
  }

  const sortedIncomes = Object.entries(incomes).sort((a, b) => b[1] - a[1]);
  const sortedExpenses = Object.entries(expenses).sort((a, b) => b[1] - a[1]);
  return [sortedIncomes, sortedExpenses];
}

function Statistics() {
  const allOperations = useSelector((state) => state.operations);
  const [selected, setSelected] = useState("incomes");
  const [incomes, expenses] = groupByCategories(allOperations);
  
  return (
    <>
      <Header />
      <div className="s:container mx-auto flex justify-center ">
        <select
          id="567"
          name="filter by category"
          className="w-52 border-2 rounded-md h-12 pl-2 "
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="incomes">incomes</option>
          <option value="expenses">expenses</option>
        </select>
      </div>

      {selected === "incomes" && (
        <ul className='sm:container flex flex-wrap justify-center mt-5'>
          {incomes.map((item, i) => (
            <li className='flex justify-between items-center border-2 border-green-400 bg-itemLayout mb-5 text-green-400 px-4 w-[80%] h-20 shadow-mainShadow rounded-[25px]' key={i}>
              <span>{item[0]}</span>
              <span>{item[1]}$</span>
            </li>
          ))}
        </ul>
      )}

      {selected === "expenses" && (
        <ul className='sm:container flex flex-wrap justify-center mt-5'>
          {expenses.map((item, i) => (
            <li  className='flex justify-between items-center mb-5 bg-itemLayout border-2 border-red-400 text-red-400 px-4 w-[80%] h-20 shadow-mainShadow rounded-[25px]' key={i}>
              <span>{item[0]}</span>
              <span>{item[1]}$</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default connect()(Statistics);
