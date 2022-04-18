import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCategories } from "../../action";
import Option from "../../Components/Option/Option";
import Header from "./../../Components/Header/Header";

export default function () {
  const incomeCategories = useSelector((state) => state.incomeCategories);
  const expenseCategories = useSelector((state) => state.expenseCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeIncomes = incomeCategories
    .filter((o) => o.isActive)
    .map((o) => o.value);

  const activeExpenses = expenseCategories
    .filter((o) => o.isActive)
    .map((o) => o.value);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: { income: activeIncomes, expense: activeExpenses },
  });

  function onSubmit(data) {
    dispatch(updateCategories(data));
    navigate("/main");
  }

  return (
    <div className="sm:container md:w-[50%] mx-auto">
      <Header />
      <FormProvider register={register}>
        <form
          className="flex flex-col justify-center items-center w-[80%] md:w-[50%] mx-auto h-fit border-2 border-border bg-secondaryLayout rounded-mainRadious shadow-mainShadow mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="pt-5 text-main font-medium text-lg">
            INCOME CATEGORIES
          </p>
          <ul className="p-5 grid grid-cols-2 gap-3 ">
            {incomeCategories.map((category, i) => (
              <div className="pb-4">
                <Option
                  isActive={category.isActive}
                  key={category.value}
                  name="income"
                  value={category.value}
                  label={category.label}
                  type="checkbox"
                />
              </div>
            ))}
          </ul>
          <p className="pt-5 text-main font-medium text-lg">
            EXPENSE CATEGORIES
          </p>
          <ul className="p-5 grid grid-cols-2 gap-3">
            {expenseCategories.map((category, i) => (
              <div className="pb-4">
                <Option
                  key={category.value}
                  name="expense"
                  value={category.value}
                  label={category.label}
                  type="checkbox"
                />
              </div>
            ))}
          </ul>
          <button
            className="w-44 h-14 mb-6 border-none cursor-pointer text-xl bg-main text-white shadow-mainShadow rounded-mainRadious"
            type="submit"
          >
            Add
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
