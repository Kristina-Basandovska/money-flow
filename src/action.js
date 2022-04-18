export const Type = {
  ADD_OPERATION: "ADD_OPERATION",
  DELETE_OPERATION: "DELETE_OPERATION",
  CHANGE_BALANCE: "CHANGE_BALANCE",
  UPDATE_CATEGORIES:"UPDATE_CATEGORIES"
};

export const changeBalance = (amount) => ({
  type: Type.CHANGE_BALANCE,
  payload: amount,
});


export const addOperation = (operation) => ({
  type: Type.ADD_OPERATION,
  payload: operation,
});

export const deleteOperation = (id) => ({
  type: Type.DELETE_OPERATION,
  payload: id,
});

export const updateCategories = (selectedCategories) => ({
  type: Type.UPDATE_CATEGORIES,
  payload:selectedCategories,
});
