import React, { Children } from "react";
import { View } from "react-native";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import AppTextField from "../components/shared/AppTextField";
import apptw from "../utils/lib/tailwind";

type ForgotPasswordScreen = NativeStackScreenProps<
    RootStackParamList,
 "ForgotPassword"
 >;
const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreen) => {
 const navigateToForgotPassword = () => {
  navigation.navigate("ForgotPassword");
 }
 return (
  <>
   <BasicBackButtonLayout>
    <View style={apptw`flex-1 mx-6`}>
     <AppText style={apptw`text-2xl mb-6`}> Forgot Password</AppText>
     <AppText>Enter your email to recover your password</AppText>
     <AppText style={apptw`mt-5 text-gray-500`}>Email:</AppText>
     <AppTextField placeholder="example@gmail.com"></AppTextField>
     <AppButton text="Continue" buttonStyle={apptw`mt-64`}></AppButton>
    </View>
   </BasicBackButtonLayout>
  </>
 )
}
export default ForgotPasswordScreen;