import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import React from "react";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import tw from "twrnc";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import AppTextField from "../components/shared/AppTextField";
import { useForm } from "react-hook-form";
import { CreateYourAccountFormType } from "../services/validation/createYourAccountVal";

const CreateYourAccount = () => {
    const {
        control,
        formState: { errors },
    } = useForm<CreateYourAccountFormType>();

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
                    <View>
                        <AppText
                            style={tw`text-3xl mt-10`}
                            fontFamily="poppins-bd"
                        >
                            Create Your Account
                        </AppText>
                        <AppText
                            style={tw`text-lg mt-1 text-center`}
                            fontFamily="poppins-light"
                        >
                            Create an account by provideing the details needed
                            below
                        </AppText>

                        {/* TexFields */}
                        <View style={tw`mt-10 `}>
                            <AppTextField
                                title="BVN"
                                validationName="bvn"
                                keyboardType="number-pad"
                                control={control}
                                errorMessage={errors.bvn?.message}
                            />
                            <AppTextField
                                title="Phone Number"
                                validationName="phoneNumber"
                                containerStyle={tw`mt-3`}
                                isPassword={true}
                                control={control}
                                errorMessage={errors.phoneNumber?.message}
                            />
                            <AppTextField
                                title="Email"
                                validationName="email"
                                containerStyle={tw`mt-3`}
                                isPassword={true}
                                control={control}
                                errorMessage={errors.email?.message}
                            />
                        </View>
                    </View>

                    <View>
                        <AppButton
                            text="Set Up Profile"
                            buttonStyle={tw`mt-10`}
                        />
                    </View>
                </ScrollView>
            </BasicBackButtonLayout>
        </KeyboardAvoidingView>
    );
};

export default CreateYourAccount;
