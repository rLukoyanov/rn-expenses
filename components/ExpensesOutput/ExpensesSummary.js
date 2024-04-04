import React from "react";
import { Text, View } from "react-native";

export const ExpensesSummary = ({ expenses, preiodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{preiodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
