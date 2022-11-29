import { View, Text, Pressable, ScrollView, KeyboardAvoidingView, Platform, Button } from "react-native";
import React, { useState } from "react";
import apptw from "../utils/lib/tailwind";
import AppText from "../components/shared/Apptext";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import AppButtonWIcon from "../components/shared/AppButtonWIcon";
import AccountServices from "./AccountServices";


type AccountTypeCategoryProps = NativeStackScreenProps<
 RootStackParamList,
 "AccountTypeCategory"
 >;
const AccountTypeCategory = ({ navigation }: AccountTypeCategoryProps) => {
 const navigateToAccService = () => {
  navigation.navigate("AccountServices")
 }
 return (
  <BasicBackButtonLayout>
   <View style={apptw`mx-6`}>
    <AppText style={apptw`font-bold text-2xl`}>Account Type Category</AppText>
    <AppText style={apptw`my-3`}>Select an account type category</AppText>
    {/* Options */}
    <View style={apptw`mt-4`}>
     {/* Savings Account staff */}
     <View style={apptw`mt-10`}>

      <AppButtonWIcon
       onPress={navigateToAccService}
       iconL={<MaterialIcons
        name="account-balance" color="#BC4B52" size={24} />}
       text="        Savings Account-staff"
       iconR={
        <MaterialIcons
         name="keyboard-arrow-right"
         color="black"
         size={24}
        />
       }
      />
     </View>
     {/* Savings Account cooperate */}
     <View style={apptw`mt-10`}>

      <AppButtonWIcon
       onPress={navigateToAccService}
       iconL={<MaterialIcons name="account-balance" color="#BC4B52" size={24} />}
       text="        Savings Account-cooperate"
       iconR={
        <MaterialIcons
         name="keyboard-arrow-right"
         color="black"
         size={24}
        />
       }
      />
     </View>
     {/* Savings Account government */}
     <View style={apptw`mt-10`}>

      <AppButtonWIcon
       onPress={navigateToAccService}
       iconL={<MaterialIcons name="account-balance" color="#BC4B52" size={24} />}
       text="        Savings Account government"
       iconR={
        <MaterialIcons
         name="keyboard-arrow-right"
         color="black"
         size={24}
        />
       }
      />
     </View>
    </View>
    
   </View>
  </BasicBackButtonLayout>
 );
};
export default AccountTypeCategory;