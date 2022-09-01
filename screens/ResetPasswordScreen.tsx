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

type ResetPasswordScreen = NativeStackScreenProps<RootStackParamList, "ResetPassword"
 >;
const ResetPasswordScreen = ({ navigation }: ResetPasswordScreen) => {
 const navigateToResetPassword = () => {
  navigation.navigate("ResetPassword");
 }
 return (
  <>
   <BasicBackButtonLayout>
    <View style={apptw`mx-6`}>
     <AppText style={apptw`text-2xl mb-6`}>Reset Password</AppText>
     <AppText style={apptw` text-gray-500`}>New Password</AppText>
     <AppTextField placeholder="***********" isPassword={true} />
     <AppText style={apptw` text-gray-500`}>Confirm Password</AppText>
     <AppTextField placeholder="************" isPassword={true} />
      <AppButton text="Continue" buttonStyle={apptw`mt-46`}/>
    </View>
   </BasicBackButtonLayout>
  </>
 )
}
export default ResetPasswordScreen;