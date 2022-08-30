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

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import { zodResolver } from "@hookform/resolvers/zod";
import LoggedInLayout from "../components/layouts/LoggedInLayout"
import PressAppText from "../components/shared/PressAppText";






const DashBoard = () => {

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
                    })}>



                    <View
                        style={tw`flex-row justify-between`}
                    >
                        <AppText
                            style={tw``}
                        >
                            HI USERR
                        </AppText>


                        <PressAppText
                            style={tw`text-green-500`}
                        >
                            Change Account
                        </PressAppText>
                    </View>







                </ScrollView>
            </LoggedInLayout>
        </KeyboardAvoidingView>
    )
}