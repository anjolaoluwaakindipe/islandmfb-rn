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
import AppPinCode from "../components/shared/AppPinCode";

type EnterCodeScreen = NativeStackScreenProps<
    RootStackParamList,
 "EnterCode"
 >;

const EnterCodeScreen = ({ navigation }: EnterCodeScreen) => {
 const navigateToEnterCode = () => {
  navigation.navigate("EnterCode");
 }
 return (
  <>
   <BasicBackButtonLayout>
    <View style={apptw`mx-6`}>
     <AppText style={apptw`text-2xl`}>Enter 4 digits Code</AppText>
     <AppText style={apptw`text-sm text-gray-500 my-4`}>Enter the 4 digits code we just sent you in your email address</AppText>
    </View>
    <View style={apptw `flex-1 mx-4`}>
     <AppPinCode numberOfPins={4} value={"1234"} containerStyle={apptw`flex-1 `}/>
    </View>
    <View style={apptw`mx-5 my-6`}>
     <AppButton text="Continue"/>
    </View>
   </BasicBackButtonLayout>
  </>
 )
}
export default EnterCodeScreen;