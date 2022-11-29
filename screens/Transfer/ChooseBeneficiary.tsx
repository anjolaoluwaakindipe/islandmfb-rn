import React from "react";
import { View, Pressable } from "react-native";
import AppText from "../../components/shared/Apptext";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout";
import apptw from "../../utils/lib/tailwind";
import tw from "twrnc";
import AppButtonWIcon from "../../components/shared/AppButtonWIcon"
import PressAppText from "../../components/shared/PressAppText";
type ChooseBeneficiaryProps = NativeStackScreenProps<RootStackParamList, "ChooseBeneficiary">

const ChooseBeneficiary = ({ navigation }: ChooseBeneficiaryProps) => {
  return (
    <>
      <BasicBackButtonLayout>
        <View>
          <AppText style={apptw` font-bold text-2xl left-28 bottom-9 `}>Choose Beneficiary</AppText>
        </View>
        <View style={apptw`mx-6 flex flex-row` }>
          <PressAppText style={apptw`text-[#BC4B52]`}>BENEFICIARIES</PressAppText>
          <MaterialIcons name="search" color="black" size={24} style={apptw`ml-42` } />
        </View>
        <View style={apptw`mx-5`}>
          <Pressable >
            <View style={apptw`bg-textField px-2 py-1 mt-2 mb-5`}>
              <MaterialIcons name="apartment" color="#BC4B52" size={28} style={apptw`top-4 left-5`} />
              <View style={tw`flex-col left-20 bottom-4 `}>
                <AppText style={apptw` text-xl`}>AJAYI RUTH BANJO</AppText>
                <AppText style={tw`text-[3.5]`}>Account: 3110777062</AppText>
                <AppText style={tw`text-[3.5]`}>FirstBank of Nigeria</AppText>
              </View>
            </View>
          </Pressable>
        </View>
      </BasicBackButtonLayout>
    </>
  );
};
export default ChooseBeneficiary;