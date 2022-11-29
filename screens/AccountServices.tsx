import { View, Text } from "react-native";
import React, { useState } from "react";
import apptw from "../utils/lib/tailwind";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import Checkbox  from "../components/shared/Checkbox";


type AccountServicesProps = NativeStackScreenProps<
 RootStackParamList,
 "AccountServices"
>;
const AccountServices = ({ navigation }: AccountServicesProps) => {
 const onSubmit = (() => {
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
  <>
   <BasicBackButtonLayout>
    <View style={apptw`mx-6`}>
     <AppText style={apptw`font-bold text-2xl`}>
      Account Services
     </AppText>
     <AppText style={apptw`my-3`}>
      Please select from the options below the services you will require for the opening of your account
     </AppText>
     <View style={apptw`flex`}>
      <Checkbox
       label="sms"
      />
      <Checkbox
       label="Credit only"
      />
      <Checkbox
       label="Debit only"
      />
     </View>
     <AppButton text="Submit Application" onPress={onSubmit} />
    </View>
   </BasicBackButtonLayout>
  </>
 );
};
export default AccountServices;