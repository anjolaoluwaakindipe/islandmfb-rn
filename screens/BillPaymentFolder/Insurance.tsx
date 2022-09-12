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


type InsuranceProps = NativeStackScreenProps<RootStackParamList, "Insurance">;

const insuranceBiller = [
  {label:"4Sure Payments", value:"4Sure Payments"},
  {label:"ARM Investments", value:"ARM Investments"},
  {label:"ARM Life Plc", value:"ARM Life Plc"},
  {label:"ARM Pensions", value:"ARM Pensions"},
]
const insuranceProduct = [
  {label:"Educational Plan", value:"Educational Plan"},
  {label:"Marriage Plans", value:"Marriage Plans"},
  {label:"Mortgage Plan", value:"Mortgage Plan"},
  {label:"Protection Plan", value:"Protection Plan"},
]

const Insurance = ({ navigation }: InsuranceProps) => {
  const navigateToPaymentPage = () => {
  navigation.navigate("PaymentPage")
    }
 return (
  <BasicBackButtonLayout>
   <View>
    <AppText style={apptw`text-2xl font-bold left-38 bottom-9`}>
     Insurance
    </AppText>
   </View>
   <ScrollView>
    <View style={apptw`mx-5`}>
     <DropdownField title="Biller" data={insuranceBiller} />
     <DropdownField title="Product" data={insuranceProduct} />
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
export default Insurance;