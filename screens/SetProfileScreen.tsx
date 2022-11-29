import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import AppText from "../components/shared/Apptext";
import tw from "twrnc";
import apptw from "../utils/lib/tailwind";
import AppTextField from "../components/shared/AppTextField";
import AppButton from "../components/shared/AppButton";
import { useForm } from "react-hook-form";
import {
    SetProfileFormType,
    setProfileSchema,
} from "../services/validation/setProfileVal";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";

type SetProfileProps = NativeStackScreenProps<RootStackParamList, "SetProfile">;

const SetProfileScreen = ({ navigation }: SetProfileProps) => {
    // react hook form variables
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<SetProfileFormType>({
        resolver: zodResolver(setProfileSchema),
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
                            Set Profile
                        </AppText>

                        {/* Sub-info */}
                        <AppText style={tw`mt-2`}>
                            Set up your online profile with Island MFB account
                            by providing the details show below
                        </AppText>

                        {/* TexFields */}
                        <View style={tw`mt-10 `}>
                            <AppTextField
                                title="Account Number"
                                validationName="accountNumber"
                                keyboardType="number-pad"
                                control={control}
                                errorMessage={errors.accountNumber?.message}
                            />
                            <AppTextField
                                title="Password"
                                validationName="password"
                                containerStyle={tw`mt-3`}
                                isPassword={true}
                                control={control}
                                errorMessage={errors.password?.message}
                            />
                            <AppTextField
                                title="Confirm Password"
                                validationName="confirmPassword"
                                containerStyle={tw`mt-3`}
                                isPassword={true}
                                control={control}
                                errorMessage={errors.confirmPassword?.message}
                            />
                        </View>
                    </View>

                    {/* Continue button */}
                    <View>
                        <AppButton
                            text="Continue"
                            buttonStyle={tw`my-10`}
                            onPress={onSubmit}
                        />
                    </View>
                </ScrollView>
            </BasicBackButtonLayout>
        </KeyboardAvoidingView>
    );
};

export default SetProfileScreen;
