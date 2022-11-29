import { useState } from "react";
import { View, ScrollView, Switch } from "react-native";
import AppText from "../components/shared/Apptext";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import apptw from "../utils/lib/tailwind";
import DropdownField from "../components/shared/Dropdown";
import { useHandler, Value } from "react-native-reanimated";
import AppTextField from "../components/shared/AppTextField";
import AppButton from "../components/shared/AppButton";
import airtimeReducer, { airtimeActions, airtimeReq } from "../state/airtimeSlice";
import { AppDispatch, store } from "../state/store";
import airtimeSlice from "../state/airtimeSlice";


const airtimeOptions = [
  { value: "Glo", label: "Glo" },
  { value: "MTN", label: "MTN" },
  { value: "Airtel", label: "Airtel" },
  { value: "Vodacom", label: "Vodacom" }
]
const productOptions = [
  { value: "VTU", label: "VTU" }
]



const AirtimeScreen = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  
  const [open, setOpen] = useState(airtimeOptions);

  const handleAirtime = () => { dispatch(airtimeReq); };
  console.log("airtimeeeee" + handleAirtime)
  
  return (

    <BasicBackButtonLayout >
      <View >
        <AppText style={apptw`font-bold absolute left-38 bottom-1 text-2xl`}> Airtime</AppText>
      </View>
      <ScrollView>
        <View style={apptw`mx-6 mt-7`}>
          <DropdownField title="Biller" data={open} onChange={handleAirtime} />
          <DropdownField title="Product" data={productOptions} />
          <AppTextField
            title="Amount"
            keyboardType="number-pad"
          />


          <AppTextField
            title="Mobile Number"
            keyboardType="phone-pad"
          />
          <AppTextField title="Narration" />
          <AppTextField title="Pin"
            keyboardType="number-pad"
            isPassword={true}
          />
          <AppButton text="Verify" buttonStyle={apptw`my-5`} />
        </View >
      </ScrollView>
    </BasicBackButtonLayout>
  )

}

export default AirtimeScreen;