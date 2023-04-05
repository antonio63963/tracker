import { createContext, useReducer } from "react";

const dummy = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 56.56,
    date: new Date("2023-03-28"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 99.58,
    date: new Date("2023-03-28"),
  },
  {
    id: "e3",
    description: "A pair of t-shirt",
    amount: 20.34,
    date: new Date("2023-03-29"),
  },
  {
    id: "e4",
    description: "A pair of laptop",
    amount: 900.56,
    date: new Date("2023-03-29"),
  },
  {
    id: "e5",
    description: "bought a book",
    amount: 12.56,
    date: new Date("2023-03-05"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: (expenses) => {},
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatedIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedItem = { ...state[updatedIndex], ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatedIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    deleteExpense,
    addExpense,
    updateExpense,
    setExpenses,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
