import React from "react";
import { FlatList, Text } from "react-native";
import { ExpenseItem } from "./ExpenseItem";

function renderItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

export const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
