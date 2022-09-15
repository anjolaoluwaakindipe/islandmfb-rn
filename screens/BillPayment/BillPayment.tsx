import React, { Children, useState } from "react";
import { View, ScrollView } from "react-native";
import AppText from "../../components/shared/Apptext";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout";
import apptw from "../../utils/lib/tailwind";
import AppButtonWIcon from "../../components/shared/AppButtonWIcon";
import { MaterialIcons } from '@expo/vector-icons'


type BillPaymentScreen = NativeStackScreenProps<RootStackParamList, "BillPayment">;


const BillPaymentScreen = ({ navigation }: BillPaymentScreen) => {
    const navigateToBillPayment = () => {
        navigation.navigate("BillPayment")
    }
    const navigateToCableTv = () => {
        navigation.navigate("CableTv")
    }
    const navigateToInsurance = () => {
        navigation.navigate("Insurance")
    }
    const navigateToInternetServices = () => {
        navigation.navigate("InternetServices")
    }
    const navigateToUtility = () => {
        navigation.navigate("Utility")
    }

    return (
        <>
            <BasicBackButtonLayout>
                <View>
                    <AppText style={apptw`font-bold text-2xl left-36 bottom-9`}>
                        Bill Payment
                    </AppText>
                </View>
                <View style={apptw`mx-5`}>
                    {/* Cable Tv */}
                    <AppButtonWIcon text="          Cable TV"
                        buttonStyle={apptw`my-4`}
                        onPress={navigateToCableTv}
                        iconL={
                            <MaterialIcons name="live-tv" color="#BC4B52" size={26} />
                        }
                        iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                        } />


                    {/* Internet Services */}
                    <AppButtonWIcon text="          Internet Services"
                        buttonStyle={apptw`my-5`}
                        onPress={navigateToInternetServices}
                        iconL={
                            <MaterialIcons
                                name="wifi"
                                color="#BC4B52"
                                size={26} />
                        }
                        iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                        } />
                    {/* Utility */}
                    <AppButtonWIcon text="          Utility"
                        buttonStyle={apptw`my-5`}
                        onPress={navigateToUtility}
                        iconL={
                            <MaterialIcons
                                name="business-center"
                                color="#BC4B52"
                                size={26} />
                        }
                        iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                        } />



                    {/* Insurance */}
                    <AppButtonWIcon text="         Insurance"
                        buttonStyle={apptw`my-5`}
                        onPress={navigateToInsurance}
                        iconL={
                            <MaterialIcons
                                name="house"
                                color="#BC4B52"
                                size={26} />
                        } iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                        } />
                </View>
            </BasicBackButtonLayout>
        </>
    )
}
export default BillPaymentScreen;