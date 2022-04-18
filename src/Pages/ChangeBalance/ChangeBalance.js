import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeBalance } from "../../action";
import Header from "../../Components/Header/Header";

export default function ChangeBalance() {
  const [state, setState] = useState({ balance: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      changeBalance({
        ...state,
        balance: Number(state.balance),
      })
    );
    navigate("/main");
  }

  return (
    <div className="sm:container md:w-[50%] mx-auto">
      <Header />
      <form
        className="flex flex-col justify-center items-center w-[80%] mx-auto h-fit border-2 border-border bg-secondaryLayout rounded-mainRadious shadow-mainShadow mt-5"
        onSubmit={handleSubmit}
      >
        <p className="uppercase mt-11 mb-4 ">Enter balance</p>
        <input
          className="min-w-[70%] h-12 rounded-xl bg-[#f5f6fb] text-center"
          type="number"
          name="balance"
          placeholder="amount"
          required=""
          value={state.balance}
          onChange={handleChange}
        />

        <div className="sm:container flex justify-center py-11 w-full">
          <button type="submit" className="min-w-[50%] h-14 bg-main rounded-mainRadious text-white font-medium text-lg uppercase">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

