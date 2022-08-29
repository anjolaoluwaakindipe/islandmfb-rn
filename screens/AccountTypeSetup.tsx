import { View, Text, Pressable, ScrollView, KeyboardAvoidingView, Platform, Button } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { personalInfoSchema, personalInfoFormType } from "../services/validation/personalInfoVal"
import AppButtonWIcon from "../components/shared/AppButtonWIcon"

type AccountTypeSetupProps = NativeStackScreenProps<
    RootStackParamList,
    "AccountTypeSetup"
>;

const AccountTypeSetup = ({ navigation }: AccountTypeSetupProps) => {
    // react hook form variables
    const {

        handleSubmit,
    } = useForm<personalInfoFormType>({
        resolver: zodResolver(personalInfoSchema),
    });

    // func: submit then navigate to Verification screen if successful
    const onSubmit = handleSubmit((data) => {
        navigation.navigate("Verification");
    });


    return (
        <KeyboardAvoidingView
            style={tw` flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <BasicBackButtonLayout>
                <ScrollView
                    style={tw`px-6`}
                    contentContainerStyle={tw.style(` justify-between`, {
                        flexGrow: 1,
                    })}
                >
                    {/* Main content */}
                    <View>
                        {/* Header */}
                        <AppText style={tw`text-3xl mt-10`}>
                            Account Type
                        </AppText>

                        {/* Sub-info */}
                        <AppText style={tw`mt-2`}>
                            Select an Account Type
                        </AppText>

                        {/* options */}
                        <View style={tw`mt-10 `}>



                            <View style= {tw.style(`mt-10`)}>

                                <AppButtonWIcon
                                    text="Savings Account"
                                />

                            </View>


                            
                            <View style= {tw.style(`mt-10`)}>

                                <AppButtonWIcon
                                    text="Current Account"
                                />

                            </View>











                        </View>
                    </View>




                </ScrollView>
            </BasicBackButtonLayout>
        </KeyboardAvoidingView>
    );
};


export default AccountTypeSetup;
