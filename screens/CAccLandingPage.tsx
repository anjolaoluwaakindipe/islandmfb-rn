import {
 View,
 Text,
 Pressable
} from "react-native";
import React from "react";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import tw from "twrnc";
import AppText from "../components/shared/Apptext";
import AppTextField from "../components/shared/AppTextField";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import AppButtonWIcon from "../components/shared/AppButtonWIcon";
import apptw from "../utils/lib/tailwind";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";

type CAccLandingPageProps = NativeStackScreenProps<RootStackParamList, "CAccLandingPage">;
const CAccLandingPage = ({ navigation }: CAccLandingPageProps) => {

 const navigateToCreateAccount = () => {
  navigation.navigate("CreateYourAccount")
 }
 return (
  <BasicBackButtonLayout>
   <View style={apptw`mx-8`}>
    <AppText style={apptw`font-bold text-2xl`}>Create Your Account</AppText>
    <AppText style={apptw`my-3`}>Create an account in just few steps</AppText>
    {/* New Customer */}
    <Pressable onPress={navigateToCreateAccount}>
     <View style={apptw`bg-textField px-2 py-1 mt-2 mb-5`}>
      <MaterialIcons name="person-outline" color="#BC4B52" size={28} style={apptw`top-4 left-5`} />
      <View style={tw`flex-col left-20 bottom-4 `}>
       <AppText style={apptw` text-xl`}>New Customer</AppText>
       <AppText style={tw`text-[3.5]`}>No account opened with us</AppText>
      </View>
     </View>
    </Pressable>
    {/* Existing Customer */}
    <Pressable onPress={navigateToCreateAccount}>
     <View style={apptw`bg-textField px-2 py-1 mt-2 mb-5`}>
      <MaterialIcons name="person-outline" color="#BC4B52" size={28} style={apptw`top-4 left-5`} />
      <View style={tw`flex-col left-20 bottom-4 `}>
       <AppText style={apptw` text-xl`}>Existing Customer</AppText>
       <AppText style={tw`text-[3.5]`}>Already have an account opened</AppText>
      </View>
     </View>
    </Pressable>

   </View>
  </BasicBackButtonLayout>
 );
};
export default CAccLandingPage;