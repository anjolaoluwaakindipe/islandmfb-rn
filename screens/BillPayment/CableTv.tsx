import { useState } from "react";
import { View } from "react-native";
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout";
import AppText from "../../components/shared/Apptext";
import apptw from "../../utils/lib/tailwind";
import DropdownField from "../../components/shared/Dropdown";
import { ScrollView } from "react-native-gesture-handler";
import AppTextField from "../../components/shared/AppTextField";
import AppButton from "../../components/shared/AppButton";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";

type CableTvProps = NativeStackScreenProps<RootStackParamList, "CableTv">;

const billerOptions = [
 {label:"GOtv", value:"GOtv"},
 {label:"Iroko Tv", value:"Iroko Tv"},
 {label:"DStv Subscription", value:"DStv Subscription"},
 {label:"Cable Africa Network TV(CanTV)", value:"Cable Africa Network TV(CanTV)"},
]
const productOptions = [
 {label:"GOtv Smallie(Monthly)(800NGN)", value:"GOtv Smallie(Monthly)(800NGN)"},
 {label:"GOtv Smallie(Yearly)(2000NGN)", value:"GOtv Smallie(Yearly)(2000NGN)"},
 {label:"Jolli(2,490NGN)", value:"Jolli(2,490NGN)"},
 {label:"Max(3,600NGN)", value:"Max(3,600NGN)"},
]


const CableTv = () => {
 // const [selectBiller, setSelectBiller] = useState(billerOptions);
 
 return (
  <BasicBackButtonLayout>
   <View>
    <AppText style={apptw`text-2xl font-bold left-38 bottom-9`}>
     Cable Tv
    </AppText>
   </View>
   <ScrollView>
    <View 
    style={apptw`mx-5`}>
     <DropdownField title="Biller" data={billerOptions}   />
 
     
     </View>
    </ScrollView>
  </BasicBackButtonLayout>
 )
};
export default CableTv;