import React from "react";
import { Text } from "react-native";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";

export const RecentExpenses = () => {
  return <ExpensesOutput expensesPerioud="Last 7 days" />;
};
