import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import React from "react";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import tw from "twrnc";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import AppPinCode from "../components/shared/AppPinCode";
import apptw from "../utils/lib/tailwind";
import { Controller, useForm } from "react-hook-form";
import {
    VerificationFormType,
    verificationSchema,
} from "../services/validation/verificationVal";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";

type VerificationScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "Verification"
>;

const VerificationScreen = ({ navigation }: VerificationScreenProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<VerificationFormType>({
        resolver: zodResolver(verificationSchema),
        defaultValues: {
            verificationPin: "",
        },
    });

    const onSubmit = handleSubmit((data) => {
        navigation.navigate("Success", {
            successMessage:
                "You have successfully signed up your account in our app and can start using",
            canGoBack: false,
            nextPage: "LetsGetStarted",
            successButtonText: "Start Using",
            nextPageParams: undefined,
        });
    });

    return (
        <KeyboardAvoidingView
            style={tw` flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <BasicBackButtonLayout>
                <ScrollView
                    style={tw`px-6`}
                    contentContainerStyle={tw.style("justify-between", {
                        flexGrow: 1,
                    })}
                >
                    <View>
                        <AppText style={tw`text-3xl mt-10`}>
                            Verification
                        </AppText>

                        <AppText style={tw`mt-2`}>
                            Enter the 4 digit code we sent to the mobile number
                            linked to your account
                        </AppText>

                        <Controller
                            name="verificationPin"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <AppPinCode
                                    numberOfPins={4}
                                    keyboardType="number-pad"
                                    containerStyle={tw`mt-10`}
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={
                                        errors.verificationPin?.message
                                    }
                                />
                            )}
                        />

                        <AppText
                            style={apptw`text-sm text-primCol mt-4 underline `}
                        >
                            Resend Code
                        </AppText>
                    </View>

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

export default VerificationScreen;
