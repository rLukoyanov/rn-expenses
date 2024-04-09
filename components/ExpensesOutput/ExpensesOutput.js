import React from "react";
import { StyleSheet, View } from "react-native";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

export const ExpensesOutput = ({ expenses, expensesPerioud }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} preiodName={expensesPerioud} />
      <ExpensesList expenses={expenses } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
