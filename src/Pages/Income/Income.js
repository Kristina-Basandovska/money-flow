import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOperation } from "../../action";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import OperationItem from "../../Components/OperationItem/OperationItem";

export default function Income() {
  const operations = useSelector((state) => state.operations);
  const dispatch = useDispatch();
  let incomesBalance = 0;

  const incomes = operations.filter((operation) => {
    if (operation.operationType === "income") {
      incomesBalance += Number(operation.amount);
    }
    return operation.operationType === "income";
  });

  function deleteItem(id) {
    dispatch(deleteOperation(id));
  }

  return (
    <div className='sm:container md:w-[50%] mx-auto'>
      <Header />
      <Card amount={incomesBalance} title={"Total incomes:"} theme="income" />

      <div className="bg-secondaryLayout mt-5 px-9 h-screen rounded-t-3xl overflow-y-scroll text-secondaryTextColor">
        {operations.length < 1 ? (
          <p className="my-5 text-lg">No incomes 🥲</p>
        ) : (
          <div>
            <p className="my-5 text-lg">Recent incomes:</p>
            <OperationItem operations={incomes} deleteItem={deleteItem} />
          </div>
        )}
      </div>
    </div>
  );
}
