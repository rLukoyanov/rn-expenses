import React from 'react';
import {View} from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
    function amountChangeHandler() {

    }

    return (
        <View>
            <Input label="Amount" textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: amountChangeHandler,
            }}/>
            <Input label="Date"
                   textInputConfig={{
                       placeholder: "YYYY-MM-DD",
                       maxLength: 10,
                       onChangeText: amountChangeHandler
                   }}
            />
            <Input label="Description" textInputConfig={{
                multiline: true,
                autocorrect: false,
            }}/>
        </View>
    );
};

export default ExpenseForm;

