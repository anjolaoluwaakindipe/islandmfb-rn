import React, { Children } from "react";
import { View, ScrollView } from "react-native";
import AppText from "../components/shared/Apptext";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import apptw from "../utils/lib/tailwind";
import RightIconField from "../components/shared/RightIconField";


const dumbOptions=[
  {value:"Glo", label:"Glo"}
]

type BillPaymentScreen = NativeStackScreenProps<RootStackParamList, "BillPayment">;


const BillPaymentScreen = ({ navigation }: BillPaymentScreen) => {
 const navigateToBillPayment = () => {
  navigation.navigate("BillPayment")
 }
 return (
  <>
   <BasicBackButtonLayout>
    <View>
     <AppText style={apptw`font-bold text-xl left-38 bottom-10`}>
      Bill Payment
     </AppText>
    </View>
    <View style={apptw`mx-5`}>
     <RightIconField  data={ dumbOptions} />
    </View>
   </BasicBackButtonLayout>
  </>
 )
}
export default BillPaymentScreen;