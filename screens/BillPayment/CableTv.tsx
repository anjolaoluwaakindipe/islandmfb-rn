import { useState } from "react";
import { View, StyleSheet } from "react-native";
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
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

type CableTvProps = NativeStackScreenProps<RootStackParamList, "CableTv">;

const cableBiller = [
  { label: "GOtv", value: "GOtv" },
  { label: "Iroko Tv", value: "Iroko Tv" },
  { label: "DStv Subscription", value: "DStv Subscription" },
  { label: "Cable Africa Network TV(CanTV)", value: "Cable Africa Network TV(CanTV)" },
]
const cableProduct = [
  { label: "GOtv Smallie(Monthly)(800NGN)", value: "GOtv Smallie(Monthly)(800NGN)" },
  { label: "GOtv Smallie(Yearly)(2000NGN)", value: "GOtv Smallie(Yearly)(2000NGN)" },
  { label: "Jolli(2,490NGN)", value: "Jolli(2,490NGN)" },
  { label: "Max(3,600NGN)", value: "Max(3,600NGN)" },
]


const CableTv = ({ navigation }: CableTvProps) => {
  const navigateToPaymentPage = () => {
    navigation.navigate("PaymentPage")
  }
  return (
    <BasicBackButtonLayout>
      <View>
        <AppText style={apptw`text-2xl font-bold left-36 bottom-9`}>
          Cable Tv
        </AppText>
      </View>
      <SafeAreaView >
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}  >
          <DropdownField title="Biller" data={cableBiller} />
          <DropdownField title="Product" data={cableProduct} />
          <AppText style={apptw`text-base`} fontFamily="poppins-semibd">Amount</AppText>
          <AppTextField />
          <AppText style={apptw`text-base`} fontFamily="poppins-semibd">Customer's Unique Number</AppText>
          <AppTextField />
          <AppText style={apptw`text-base`} fontFamily="poppins-semibd">Phone Number</AppText>
          <AppTextField />
          <AppButton text="CONTINUE" buttonStyle={apptw`my-5`} onPress={navigateToPaymentPage} />
        </ScrollView>
      </SafeAreaView>
    </BasicBackButtonLayout>
  )
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
    
  },
  content: {
    height: '50%', 
  }
})
export default CableTv;