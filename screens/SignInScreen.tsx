import { View, Text, ScrollView } from "react-native";
import React, { Children } from "react";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";

type SignInScreen = NativeStackScreenProps<
    RootStackParamList,
 "SignIn"
>;

const SignInScreen = ({ navigation }: SignInScreen) => {
 const navigateToSignIn = () => {
  navigation.navigate("SignIn");
 }
 return (
  <>
  <BasicBackButtonLayout>
  <View style={tw`flex-1 justify-center items-center px-6`}>
    <AppText style={tw`mt-10 text-2xl`}>HELOOOO</AppText>
    </View>
    </BasicBackButtonLayout>
  </>
 )
} 
export default SignInScreen;