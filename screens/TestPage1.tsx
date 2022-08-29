import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Button,
} from "react-native";
import React from "react";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import tw from "twrnc";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import AppTextField from "../components/shared/AppTextField";
import { useForm } from "react-hook-form";
import {
    CreateYourAccountFormType,
    createYourAccountSchema
} from "../services/validation/createYourAccountVal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import { zodResolver } from "@hookform/resolvers/zod";
import LoggedInLayout from "../components/layouts/LoggedInLayout"

type TestPage1Props = NativeStackScreenProps<RootStackParamList, "TestPage1">;

const TestPage1 = () => {

    return (
        <KeyboardAvoidingView
            style={tw` flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <LoggedInLayout>
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
                            TEST PAGE 1
                        </AppText>
                        <AppText
                            style={tw`text-lg mt-1 text-center`}
                            fontFamily="poppins-light"
                        >
                            Create an account by provideing the details needed
                            below
                        </AppText>
                        


                    </View>

                    <View>
                        <AppButton
                            text="Continue"
                            buttonStyle={tw`mt-10`}

                        />
                    </View>
                </ScrollView>
            </LoggedInLayout>
        </KeyboardAvoidingView>
    );
};

export default TestPage1;
