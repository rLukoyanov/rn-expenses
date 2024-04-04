import React from "react";
import { View } from "react-native";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";

export const ExpensesOutput = ({ expenses, expensesPerioud }) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} preiodName={expensesPerioud} />
      <ExpensesList />
    </View>
  );
};
