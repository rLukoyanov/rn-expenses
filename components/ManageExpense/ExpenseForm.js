import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
    function amountChangeHandler() {

    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input label="Amount" style={styles.rowInput} textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangeHandler,
                }}/>
                <Input label="Date"
                       style={styles.rowInput}
                       textInputConfig={{
                           placeholder: "YYYY-MM-DD",
                           maxLength: 10,
                           onChangeText: amountChangeHandler
                       }}
                />
            </View>

            <Input label="Description" textInputConfig={{
                multiline: true,
                autocorrect: false,
            }}/>
        </View>
    );
};

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#fff',
        marginVertical: 24,
        textAlign: "center",
    },
    inputsRow: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    rowInput: {
        flex: 1,
    }
})
