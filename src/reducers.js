import { act } from "@testing-library/react";
import { Type } from "./action";

const defaultState = {
  balance: 0,
  operations: [],
  incomeCategories: [
    { label: "Salary 🤑", value: "salary", isActive: true },
    { label: "Bonus 🍀", value: "bonus", isActive: true },
    { label: "Cash back 💳", value: "cashBack", isActive: false },
    { label: "Deposit 💲", value: "deposit", isActive: true },
    { label: "Other 💸", value: "other", isActive: false },
  ],
  expenseCategories: [
    { label: "Food 🍕", value: "food", isActive: true },
    { label: "Home 🏡", value: "home", isActive: false },
    { label: "Beauty 👩🏽", value: "beauty", isActive: true },
    { label: "Car 🚗", value: "car", isActive: true },
    { label: " Charity 💕", value: "charity", isActive: false },
    { label: "Health 💊", value: "health", isActive: true },
    { label: " Sport 🏃", value: "sport", isActive: false },
    { label: "Other 👄", value: "other", isActive: true },
  ],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case Type.ADD_OPERATION:
      return {
        ...state,
        operations: [...state.operations, action.payload],
        balance:
          action.payload.operationType === "income"
            ? state.balance + action.payload.amount
            : state.balance - action.payload.amount,
      };

    case Type.DELETE_OPERATION:
      const { amount, operationType } = state.operations.find(
        (o) => o.id === action.payload
      );
      const prevBalance = state.balance;
      const balance =
        operationType === "income"
          ? prevBalance - amount
          : prevBalance + amount;
      return {
        ...state,
        operations: state.operations.filter((o) => o.id !== action.payload),
        balance,
      };

    case Type.CHANGE_BALANCE:
      return {
        ...state,
        balance: action.payload.balance,
      };

    case Type.UPDATE_CATEGORIES:
      const selectedIncomes = action.payload.income;
      const selectedExpenses = action.payload.expense;

      return {
        ...state,
        incomeCategories: state.incomeCategories.map((category) => ({
          ...category,
          isActive: selectedIncomes.includes(category.value),
        })),
        expenseCategories: state.expenseCategories.map((category) => ({
          ...category,
          isActive: selectedExpenses.includes(category.value),
        })),
      };

    default:
      return state;
  }
};
