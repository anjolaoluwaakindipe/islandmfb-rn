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
import PaymentPage from "./PaymentPage";

type InternetServicesProps = NativeStackScreenProps<RootStackParamList, "InternetServices">;
const internetServicesBiller = [
 {label:"9Mobile Data", value:"9Mobile Data"},
 {label:"Airtel Data", value:"Airtel Data"},
 {label:"Glo Data", value:"Glo Data"},
 {label:"Mtn Data", value:"Mtn Data"},
]
const internetServicesProduct = [
 {label:"1.25GB- Weekend Plan", value:"1.25GB- Weekend Plan"},
 {label:"10GB- Day Plan (30 Days)", value:"10GB- Day Plan (30 Days)"},
 {label:"1.25GB- Weekend Plan", value:"1.25GB- Weekend Plan"},
 {label:"10GB- Day Plan (30 Days)", value:"10GB- Day Plan (30 Days)"},
]


const InternetServices = ({ navigation }: InternetServicesProps) => {
 
 const navigateToPaymentPage = () => {
  navigation.navigate("PaymentPage")
    }
 return (
  <BasicBackButtonLayout>
   <View>
    <AppText style={apptw`text-2xl font-bold left-30 bottom-9`}>
     Internet Services
    </AppText>
   </View>
   <ScrollView>
    <View style={apptw`mx-5`}>
     <DropdownField title="Biller" data={internetServicesBiller} />
     <DropdownField title="Product" data={internetServicesProduct} />
     <AppText style={apptw`text-base`} fontFamily="poppins-semibd">Amount</AppText>
     <AppTextField/>
     <AppText style={apptw`text-base`} fontFamily="poppins-semibd">Customer's Unique Number</AppText>
     <AppTextField/>
     <AppText style={apptw`text-base`} fontFamily="poppins-semibd">Phone Number</AppText>
     <AppTextField/>
     <AppButton text="CONTINUE" buttonStyle={apptw`my-5`} />
    </View>
   </ScrollView>
  </BasicBackButtonLayout>
 )
};
export default InternetServices;