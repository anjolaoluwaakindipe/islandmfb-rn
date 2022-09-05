import React, { Children, useState } from "react";
import { View,ScrollView, Switch } from "react-native";
import AppText from "../components/shared/Apptext";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import apptw from "../utils/lib/tailwind";
import DropdownField from "../components/shared/Dropdown";
import { useHandler } from "react-native-reanimated";
import AppTextField from "../components/shared/AppTextField";
import AppButton from "../components/shared/AppButton";


const airtimeOptions = [
 {value:"Glo", label:"Glo"},
 {value:"MTN", label:"MTN"},
 {value:"Airtel", label:"Airtel"},
 {value:"Vodacome", label:"Vodacome"}
]
const productOptions = [
 {value:"VTU", label:"VTU"}
]
type AirtimeScreen = NativeStackScreenProps<RootStackParamList,
 "Airtime"
 >;
const AirtimeScreen = ({ navigation }: AirtimeScreen) => {
 const navigateToAirtimeScreen = () => {
  navigation.navigate("Airtime");
 }
 const [open, setOpen] = useState(airtimeOptions);
 const [isEnabled, setIsEnabled]= useState(false)
 const toggleSwitch = () => {
  if (isEnabled) {
   setOpen(productOptions)
  } else {
   setOpen(airtimeOptions)
  }
  setIsEnabled(previousState=>!previousState)
 }
 // const [isEnabled, setIsEnabled] = useState(true);
 return (
  <>
   <BasicBackButtonLayout >
    <View >
     <AppText style={apptw`font-bold absolute left-38 bottom-1 text-2xl`}> Airtime</AppText>
    </View>
    <ScrollView>
     <View style={apptw`mx-6 mt-7`}>
      <DropdownField title="Biller" data={open} />
     </View>
     {/* Display Switch values on receiving values from Biller */}
     <Switch style={apptw`mx-6`} onValueChange={toggleSwitch} value={isEnabled}>
      <DropdownField title="Product" data={productOptions} />
      <AppTextField title="Amount"/>
      <AppTextField title="Mobile Number" />
      <AppTextField title="Narration" />
      <AppTextField title="Pin" isPassword={true} />
      <AppButton text="Verify" buttonStyle={apptw`my-5`}/>
      </Switch>
    </ScrollView>
   </BasicBackButtonLayout>
  </>
 )
}
export default AirtimeScreen;