import { View, Text, Pressable, ScrollView, KeyboardAvoidingView, Platform, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LetsGetStarted from "../assets/svg/letsgetstarted.svg";
import tw from "twrnc";
import AppText from "../../components/shared/Apptext";
import AppButton from "../../components/shared/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout";
import PressAppText from "../../components/shared/PressAppText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AppTextField from "../../components/shared/AppTextField";
import { personalInfoSchema, personalInfoFormType } from "../../services/validation/personalInfoVal"

import DateInputFiled from "../../components/shared/DateInputField"
import Dropdown from "../../components/shared/Dropdown"


const genderOptions = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" }
]


type PersonalInfoProps = NativeStackScreenProps<
    RootStackParamList,
    "PersonalInfo"
>;

const PersonalInfoScreen = ({ navigation }: PersonalInfoProps) => {
    // react hook form variables
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<personalInfoFormType>({
        resolver: zodResolver(personalInfoSchema),
    });

    // func: submit then navigate to Verification screen if successful
    const onSubmit = handleSubmit((data) => {
        navigation.navigate("Verification");
    });
    const navigateToAccType = () => {
        navigation.navigate("AccountTypeSetup")
    }
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
                            Personal Information
                        </AppText>

                        {/* Sub-info */}
                        <AppText style={tw`mt-2`}>
                            Create an account by providing the details
                            needed below.
                        </AppText>

                        {/* TexFields */}
                        <View style={tw`mt-10 `}>


                            <AppTextField
                                title="First Name"
                                validationName="firstName"
                                keyboardType="default"
                                control={control}
                                errorMessage={errors.firstName?.message}
                            />


                            <AppTextField
                                title="Last Name"
                                validationName="lastName"
                                keyboardType="default"
                                control={control}
                                errorMessage={errors.lastName?.message}
                            />


                            <AppTextField
                                title="Email"
                                validationName="email"
                                keyboardType="email-address"
                                control={control}
                                errorMessage={errors.email?.message}
                            />


                            <Dropdown
                                title="Gender"
                                data={genderOptions}
                                errorMessage={errors.gender?.message}
                            />
                            <DateInputFiled
                                validationName="dob"
                                control={control}
                                errorMessage={errors.dob?.message}
                                title="Date of Birth"
                            />
                        </View>
                    </View>

                    {/* Continue button */}
                    <View>
                        <AppButton
                            text="Continue"
                            buttonStyle={tw`my-10`}
                            onPress={navigateToAccType}
                        />
                    </View>
                </ScrollView>
            </BasicBackButtonLayout>
        </KeyboardAvoidingView>
    );
};


export default PersonalInfoScreen;
