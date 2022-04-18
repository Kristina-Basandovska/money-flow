import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";

export default function Welcome() {
  return (
    <div className="sm:container md:w-[50%] mx-auto ">
      <div className="h-20 flex justify-center items-center">
        <Logo />
      </div>
      <div className="sm:container mx-auto flex  flex-col items-center ">
        <p className="py-4 font-bolt text-2xl text-textColor">Welcome to </p>
        <p className="py-2 font-semibold text-4xl text-textColor ">MoneyFlow</p>
        <p className="p-2 font-normal text-lg text-center mx-auto text-textColor">
          Record your income and keep track of your expenses
        </p>
      </div>
      <img
        className="block object-cover mx-auto"
        src="objects.png"
        width="350"
      />
        <Link className="flex justify-center items-center font-semibold text-lg my-5 w-80 h-14 rounded-[35px] text-white cursor-pointer bg-main mx-auto" to="/main">
          Get Started
        </Link>
    </div>
  );
}
