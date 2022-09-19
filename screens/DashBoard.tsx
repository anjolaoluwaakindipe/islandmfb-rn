import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Button,
} from "react-native";
import React from "react";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import tw from "twrnc";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import AppTextField from "../components/shared/AppTextField";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import { zodResolver } from "@hookform/resolvers/zod";
import LoggedInLayout from "../components/layouts/LoggedInLayout"
import PressAppText from "../components/shared/PressAppText";
import apptw from "../utils/lib/tailwind";
import AppButtonWIcon from "../components/shared/AppButtonWIcon";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import TransHistory from "../components/dashboard/TransHistory";
import { useSelector } from "react-redux";
import { authSelector } from "../state/authSlice";





type DashBoardProps = NativeStackScreenProps<RootStackParamList, "DashBoard">


const DashBoard = ({ navigation }: DashBoardProps) => {
const {user } = useSelector(authSelector)


console.log(user)
    const navigatetoTransferPage = () => {
        navigation.navigate("Transfer")
    }


    const navigatetoAirtimePage = () => {
        navigation.navigate("Airtime")
    }
    const navigatetoBillsPage = () => {
        navigation.navigate("BillPayment")
    }



    return (
        <KeyboardAvoidingView
            style={tw` flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <LoggedInLayout>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    style={tw`px-6`}
                    contentContainerStyle={tw.style(` `, {
                        flexGrow: 1
                    })}>



                    <View
                        style={tw`flex-row justify-between mt-5 text-[3]`}
                    >
                        <AppText
                            style={tw``}
                        >
                            HI {user?.name} 
                        </AppText>


                        <PressAppText
                            style={tw`text-green-500`}
                        >
                            Change Account
                        </PressAppText>
                    </View>



                    <View
                        style={apptw`bg-textField px-5 py-5 pl-5 mt-10 `}
                    >
                        <AppText
                            style={apptw`font-base `}
                        >
                            Savings Account: {"   "}
                            <AppText
                                style={apptw`font-bold`}>
                                {user?.customerNo}
                            </AppText>
                        </AppText>


                        <AppText
                            style={apptw`text-primCol text-xl`}
                        >
                            N 234,45455
                        </AppText>
                        <AppText>
                            Available Balance
                        </AppText>

                        <AppText>
                            Book Balance: {"  "}
                            <AppText>
                                N239344455
                            </AppText>
                        </AppText>

                    </View>



                    <AppText
                        style={tw`mt-5`}
                    >
                        Quick Actions
                    </AppText>

                    <ScrollView
                        style={tw``}
                        horizontal={true}
                        contentContainerStyle={tw.style(` justify-between`, {
                            flexGrow: 1,
                        })}
                    >
                        <View
                            style={tw`flex-row  mt-2 justify-between mx-3`}
                        >
                            <AppButtonWIcon
                                text="Transfer"
                                buttonStyle={apptw`w-[40] mr-4`}
                                onPress={navigatetoTransferPage}
                                textStyle={apptw`text-[3] text-primCol  mx-auto`}
                                icon={
                                    <MaterialCommunityIcons
                                        name="bank"
                                        size={15}
                                        style={tw`mx-auto`}
                                        color="#BC4B52"
                                    />
                                }
                            />

                            <AppButtonWIcon
                                text="Airtime"
                                buttonStyle={apptw`w-[40] mr-4`}
                                onPress={navigatetoAirtimePage}
                                textStyle={apptw`text-[3] text-primCol mx-auto`}
                                icon={
                                    <Ionicons
                                        name="cash-outline"
                                        size={15}
                                        color="#BC4B52"
                                        style={tw`mx-auto`}
                                    />
                                }

                            />

                            <AppButtonWIcon
                                text="Bills"
                                buttonStyle={apptw`w-[40] mr-4`}
                                onPress={navigatetoBillsPage}
                                textStyle={apptw`text-[3] text-primCol mx-auto`}
                                icon={
                                    <Ionicons
                                        name="md-newspaper-outline"
                                        size={15}
                                        style={tw`mx-auto`}
                                        color="#BC4B52"
                                    />
                                }

                            />


                            <AppButtonWIcon
                                text="Bills"
                                buttonStyle={apptw`w-[40] mr-4`}
                                onPress={navigatetoBillsPage}
                                textStyle={apptw`text-[3] text-primCol mx-auto`}
                                icon={
                                    <Ionicons
                                        name="md-newspaper-outline"
                                        size={15}
                                        style={tw`mx-auto`}
                                        color="#BC4B52"
                                    />
                                }

                            />

                        </View>



                    </ScrollView>





                    <View
                        style={tw`flex-row justify-between mt-5`}
                    >

                        <AppText
                            style={tw``}
                        >
                            Transaction History
                        </AppText>

                        <PressAppText
                            style={tw`text-green-500`}
                        >
                            view all
                        </PressAppText>
                    </View>



                    <TransHistory
                        amount="N 500000002"
                        date="Tuesday,12th july,2021 "
                        details="TRF/FRM Akinloluwa Adeleye Gbenga "
                        name="Akinjoke Gboluga"
                    />




                    <TransHistory
                        amount="N 500000002"
                        date="Tuesday,12th july,2021 "
                        details="TRF/FRM Akinloluwa Adeleye Gbenga "
                        name="Akinjoke Gboluga"
                    />


                    <TransHistory
                        amount="N 500000002"
                        date="Tuesday,12th july,2021 "
                        details="TRF/FRM Akinloluwa Adeleye Gbenga "
                        name="Akinjoke Gboluga"
                    />

                    <TransHistory
                        amount="N 500000002"
                        date="Tuesday,12th july,2021 "
                        details="TRF/FRM Akinloluwa Adeleye Gbenga "
                        name="Akinjoke Gboluga"
                    />



                </ScrollView>
            </LoggedInLayout>
        </KeyboardAvoidingView>
    )
}


export default DashBoard;