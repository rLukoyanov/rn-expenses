import { createContext, useReducer } from "react";

const DummyExpenses = [
  {
    id: "e1",
    description: "shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Trousers",
    amount: 589.99,
    date: new Date("2022-01-22"),
  },
  {
    id: "e3",
    description: "Bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Book",
    amount: 19.59,
    date: new Date("2021-12-18"),
  },
  {
    id: "e6",
    description: "Trousers",
    amount: 589.99,
    date: new Date("2022-01-22"),
  },
  {
    id: "e7",
    description: "Bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e8",
    description: "Book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e9",
    description: "Book",
    amount: 19.59,
    date: new Date("2021-12-18"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatebleExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatebleExpense = state[updatebleExpenseIndex];
      const updatedExpense = { ...updatebleExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatebleExpenseIndex] = updatedExpense;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DummyExpenses);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
