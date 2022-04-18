import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import Option from "../../Components/Option/Option";
import Header from "../../Components/Header/Header";
import { addOperation } from "../../action";
import { useForm, FormProvider } from "react-hook-form";

export default function Operations() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();

  const incomeCategories = useSelector((state) => state.incomeCategories.filter(a=>a.isActive));

  const expenseCategories = useSelector((state) => state.expenseCategories.filter(a=>a.isActive));
  const [selectedType, setSelectedType] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  function handleChangeInput(e) {
    setSelectedType(e.target.value);
  }

  function onSubmit(data) {
    data.operationType = selectedType;
    dispatch(
      addOperation({
        ...data,
        amount: Number(data.amount),
        id: shortid.generate(),
      })
    );
    reset();
    navigate("/main");
  }

  return (
    <div className="sm:container md:w-[50%] mx-auto h-screen">
      <Header />
      <FormProvider register={register}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[90%] mx-auto h-fit border-2 border-border bg-secondaryLayout rounded-mainRadious shadow-mainShadow mt-5 "
        >
          <div className="pt-14 px-10 flex justify-around flex-wrap align-middle">
            <div>
              <input
                id="1"
                type="radio"
                value="income"
                className="hidden peer"
                {...register("operationType", {
                  required: "Select operation:)",
                })}
                onChange={handleChangeInput}
              />
              <label
                htmlFor="1"
                className="flex justify-center items-center text-textColor text-lg h-9 w-32 border-2 border-main rounded-mainRadious peer-checked:bg-main peer-checked:text-white peer-checked:border-none"
              >
                income
              </label>
            </div>

            <div>
              <input
                id="2"
                type="radio"
                value="expense"
                className="hidden peer"
                {...register("operationType", {
                  required: "Select operation:)",
                })}
                onChange={handleChangeInput}
              />
              <label
                htmlFor="2"
                className="flex justify-center text-textColor items-center text-lg h-9 w-32 border-2 border-main rounded-mainRadious peer-checked:bg-main peer-checked:text-white peer-checked:border-none"
              >
                expense
              </label>
            </div>
          </div>
          <div className="sm:container">
            {errors.operationType && (
              <p className="text-red-500 p-2 text-sm pl-14">
                {errors.operationType.message}
              </p>
            )}
          </div>

          <div className="sm:container px-10 flex-col items-center ">
            <input
              {...register("amount", {
                required: "Enter amount:)",
              })}
              className="w-full h-12 rounded-xl mt-4 pl-4 bg-[#f5f6fb] placeholder:pl-4"
              type="number"
              placeholder="amount"
            />
            <div>
              {errors.amount && (
                <p className="flex w-[290px] text-red-500 py-2 px-4 text-sm">
                  {errors.amount.message}
                </p>
              )}
            </div>

            <input
              {...register("comment")}
              className="w-full h-12 rounded-xl mt-4 pl-4 bg-[#f5f6fb] placeholder:pl-4"
              type="text"
              placeholder="comment"
            />
          </div>

          {selectedType !== "" && (
            <div className=" sm:container mx-auto flex flex-wrap justify-center min-h-[100px] items-around w-auto pt-4">
              {selectedType === "income" &&
                incomeCategories.map((category) => (
                  <div className="m-2">
                    <Option
                      key={category.value}
                      name={"category"}
                      value={category.value}
                      label={category.label}
                      type='radio'
                      errorMessage="Select required:)"
                    />
                  </div>
                ))}

              {selectedType === "expense" &&
                expenseCategories.map((category) => (
                  <div className="m-2">
                    <Option
                      key={category.value}
                      name={"category"}
                      value={category.value}
                      label={category.label}
                      type='radio'
                    />
                  </div>
                ))}
            </div>
          )}

          <div className="flex justify-center py-9">
            <button
              className="w-44 h-16 border-none cursor-pointer text-xl bg-main text-white shadow-mainShadow rounded-mainRadious"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
