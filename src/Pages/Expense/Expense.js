import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OperationItem from "../../Components/OperationItem/OperationItem";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";
import { deleteOperation } from "../../action";

export default function Expense() {
  const operations = useSelector((state) => state.operations);
  const dispatch = useDispatch();
  let incomesBalance = 0;

  const expenses = operations.filter((operation) => {
    if (operation.operationType === "expense") {
      incomesBalance += Number(operation.amount);
    }
    return operation.operationType === "expense";
  });

  function deleteItem(id) {
    dispatch(deleteOperation(id));
  }

  return (
    <div className='sm:container md:w-[50%] mx-auto'>
      <Header/>
      <Card amount={incomesBalance} title={"Total expenses:"} theme="expense" />

      <div className="bg-secondaryLayout mt-5 px-9 h-screen rounded-t-3xl overflow-y-scroll text-secondaryTextColor">
        {operations.length < 1 ? (
          <p className="my-5 text-lg">No expenses 🥲</p>
        ) : (
          <div>
            <p className="my-5 text-lg">Recent expenses:</p>
            <OperationItem operations={expenses} deleteItem={deleteItem} />
          </div>
        )}
      </div>
    </div>
  );
}
