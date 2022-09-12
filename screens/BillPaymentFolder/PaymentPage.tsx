import React from "react";
import { View } from "react-native";
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout";
import AppText from "../../components/shared/Apptext";
import apptw from "../../utils/lib/tailwind";
import AppTextField from "../../components/shared/AppTextField";
import AppButton from "../../components/shared/AppButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";
import { Style } from "twrnc/dist/esm/types";

type PaymentPageProp = {
 pageTitle: string;
 textStyle?:Style;
}


const PaymentPage = (props: PaymentPageProp) => {
 return (
  <BasicBackButtonLayout>
   <View>
    <AppText style={apptw`text-2xl font-bold left-38 bottom-9`}>
     {props.pageTitle}
    </AppText>
   </View>
   <View style={apptw`mx-5 mt-5`}>
    <AppText style={apptw`text-base`} fontFamily="poppins-semibd">Select Account:</AppText>
    <AppTextField />
    <AppText style={apptw`text-base`} fontFamily="poppins-semibd">Pin</AppText>
    <AppTextField isPassword={true} />
    <AppButton text="PAY" buttonStyle={apptw`my-5`}/>
   </View>
  </BasicBackButtonLayout>
 )
};
export default PaymentPage;