import React from "react";
import { StyleSheet, View } from "react-native";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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

export const ExpensesOutput = ({ expenses, expensesPerioud }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DummyExpenses} preiodName={expensesPerioud} />
      <ExpensesList expenses={DummyExpenses} />
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
