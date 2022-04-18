import React from "react";
import S from "./index.module.css";

const themes = {
  default: S.defaultCard,
  income: S.incomeCard,
  expense: S.expenseCard,
};



export default function Card({ amount, title, theme = "default" }) {
  const currentTheme = themes[theme];

  return (
    <div className={`sm:container w-[356px] md:w-[356px] h-[224px] mx-auto pt-20 pl-10 rounded-3xl shadow-mainShadow text-white ${currentTheme}`}>
      <p className='text-4xl font-semibold'>{amount}$</p>
      <p className='text-lg'>{title}</p>
    </div>
  );
}