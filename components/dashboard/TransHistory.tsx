import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import apptw from "../../utils/lib/tailwind";
import AppText from '../shared/Apptext';


type TransHistoryProp = {
    date: string | any;
    amount: string | any;
    details: string;
    name: string | null
}



const TransHistory = (props: TransHistoryProp) => {
    return (
        <View
            style={apptw`bg-textField px-2 py-1 mt-2 mb-5`}
        >
            <AppText
                style={tw`text-[3]`}
            >
                {props.date}
            </AppText>

            <View
                style={tw`flex-row justify-between`}
            >
                <AppText
                    style={tw`text-[2.5]`}
                >
                    {props.details}
                </AppText>

                <AppText
                    style={tw`text-[3] text-green-500`}
                >
                    {props.amount}
                </AppText>
            </View>

            <AppText
                style={tw`text-[3]`}
            >
                TO {props.name}
            </AppText>

        </View>

    )
}



export default TransHistory