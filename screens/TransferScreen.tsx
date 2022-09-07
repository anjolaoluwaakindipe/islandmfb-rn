import React, { Children } from "react";
import { View, ScrollView } from "react-native";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import AppTextField from "../components/shared/AppTextField";
import DropdownField from "../components/shared/Dropdown";
import apptw from "../utils/lib/tailwind";

const bankOptions = [
    { value: "Access Bank", label: "Access Bank" },
    { value: "Zenith Bank", label: "Zenith Bank" },
    { value: "UBA", label: "UBA" }
]

type TransferScreen = NativeStackScreenProps<
    RootStackParamList,
    "Transfer"
>;
const TransferScreen = ({ navigation }: TransferScreen) => {
    const navigateToTransfer = () => {
        navigation.navigate("Transfer");
    }
    return (
        <>
            <BasicBackButtonLayout>
                <View >
                    <AppText style={apptw`sticky font-bold text-2xl left-38 bottom-10 `}>
                        Transfer
                    </AppText>
                </View>
                <ScrollView>
                    <View style={apptw`mx-5`}>
                        <DropdownField title="Bank" data={bankOptions} />
                        <AppTextField title="Account Number" keyboardType="number-pad" />
                        <AppTextField title="Account Name" />
                        <AppTextField title="Amount"  keyboardType="number-pad"/>
                        <AppTextField title="Narrative" />
                        <AppTextField title="Pin" keyboardType="number-pad" isPassword={true} />
                        <AppButton text="Verify" buttonStyle={apptw`mt-5`} />
                    </View>
                </ScrollView>
            </BasicBackButtonLayout>
        </>
    )
}
export default TransferScreen;