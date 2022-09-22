import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Button,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import Notifications from "../components/dashboard/Notifications";
import { useSelector } from "react-redux";
import { authSelector } from "../state/authSlice";





type DashBoardProps = NativeStackScreenProps<RootStackParamList, "DashBoard">

type TransActs = {
    id: number,
    channel: string,
    postDate: string,
    narrative: string,
    reference: string,
    valueDate: string,
    ccy: string,
    ccyName: string | null,
    amount: number,
    status: string | null,
    ownNarrative: string | null,
    category: string | null,
    subCategory: string | null,
    tags: string | null
}
const DashBoard = ({ navigation }: DashBoardProps) => {
    const { user } = useSelector(authSelector)


    const navigatetoTransferPage = () => {
        navigation.navigate("Transfer")
    }


    const navigatetoAirtimePage = () => {
        navigation.navigate("Airtime")
    }
    const navigatetoBillsPage = () => {
        navigation.navigate("BillPayment")
    }
    const navigateToViewAll = () => {
        navigation.navigate("ViewAllScreen")
    }


    let fName = (user?.name)?.split(/\s+/)


    const [transActs, setTransActs] = useState<TransActs[]>([])

    const getTrans = async () => {

        const AccNo = user.accountNo


        const response = await fetch("http://api.issl.ng:7777/ibank/api/v1/getAccountRecentTxns?AccountNo=" + AccNo, { method: "GET", })
            .then(res => res.json()) as TransActs[]

        setTransActs(response)
    }

    useEffect(() => {
        getTrans()
    }, [])



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
                            HI {fName?.[0]}
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
                            {user.product + ":" + " "}
                            <AppText
                                style={apptw`font-bold`}>
                                {user.accountNo}
                            </AppText>
                        </AppText>


                        <AppText
                            style={apptw`text-primCol text-xl`}
                        >
                            {user.currency} {user.availableBalance}
                        </AppText>
                        <AppText>
                            Available Balance
                        </AppText>

                        <AppText>
                            Book Balance: {"  "}
                            <AppText>
                                {user.currency} {user.bookBalance}
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
                        contentContainerStyle={tw.style(`justify-between`, {
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
                            onPress={navigateToViewAll}
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


                    {transActs.map((transAct) => (
                        <View
                            key={transAct.id}
                        >
                            <TransHistory
                                amount={transAct.amount}
                                date={transAct.postDate}
                                details={transAct.narrative}
                                name={user.name}
                            />
                        </View>

                    ))}






                </ScrollView>
            </LoggedInLayout>
        </KeyboardAvoidingView>
    )
}


export default DashBoard;