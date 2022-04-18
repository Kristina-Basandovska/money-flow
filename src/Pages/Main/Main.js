import React from "react";
import Header from "../../Components/Header/Header";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OperationItem from "../../Components/OperationItem/OperationItem";
import { deleteOperation } from "../../action";
import Card from "../../Components/Card/Card";

function Main() {
  const operations = useSelector((state) => state.operations);
  let balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  function deleteItem(id) {
    dispatch(deleteOperation(id));
  }

  return (
    <div className="sm:container md:w-[50%] mx-auto relative">
      <Header />
      <Card amount={balance} title={"Available balance"} />

      <div className="flex bg-secondaryLayout mt-5 px-9 h-screen rounded-t-3xl shadow-mainShadow">
        {operations.length < 1 ? (
          <p className="font-normal text-lg  mt-9 mb-5 text-secondaryTextColor">
            We are waiting for your data 😊
          </p>
        ) : (
          <div className="container">
            <p className="font-normal text-lg  mt-9 mb-5 text-secondaryTextColor">Recent operations:</p>
            <OperationItem operations={operations} deleteItem={deleteItem} />
          </div>
        )}
      </div>

      <Link
        className="flex justify-center items-center text-white text-xl fixed right-9 bottom-9  w-14 h-14 rounded-full shadow-lg bg-main"
        to="/operations"
      >
        +
      </Link>
    </div>
  );
}

export default connect()(Main);
