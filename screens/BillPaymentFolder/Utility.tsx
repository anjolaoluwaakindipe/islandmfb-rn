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

type UtilityServices = NativeStackScreenProps<RootStackParamList, "Utility">;
const utilityBiller = [
 {label:"AZURI TECHNOLOGIES", value:"AZURI TECHNOLOGIES"},
 {label:"Edo Waste Management", value:"Edo Waste Management"},
 {label:"Enugu State Water Co", value:"Enugu State Water Co"},
 {label:"Cross River Water Board", value:"Cross River Water Board"},
]
const utilityProduct = [
 {label:"Payment (Returning Customer)", value:"Payment (Returning Customer)"},
 {label:"Payment (New Customer)", value:"Payment (New Customer)"},
]

const Utility = ({ navigation }: UtilityServices)) => {
 const navigateToPaymentPage = () => {
  navigation.navigate("PaymentPage")
    }
 return (
  <BasicBackButtonLayout>
   <View>
    <AppText style={apptw`text-2xl font-bold left-38 bottom-9`}>
     Utility
    </AppText>
   </View>
   <ScrollView>
    <View style={apptw`mx-5`} >
     <DropdownField title="Biller" data={utilityBiller} />
     <DropdownField title="Product" data={utilityProduct} />
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
export default Utility;