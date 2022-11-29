import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Button,
} from "react-native";
import React, { useEffect, useState, useCallback, useRef } from "react";
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
import LowerDrawer, { LowerDrawerRefProps } from "../LowerDrawer";
import { useSelector } from "react-redux";
import { authSelector } from "../state/authSlice";
import { GestureHandlerRootView } from "react-native-gesture-handler"





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

    const ref = useRef<LowerDrawerRefProps>(null);

    const onPressLowerDrawer = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-400);
        }

    }, []);

    const { user } = useSelector(authSelector);

    const [transActs, setTransActs] = useState<TransActs[]>([])


    const navigatetoTransferPage = () => {
        navigation.navigate("TransferType")
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
    const navigateToChangeAccount = () => {
        navigation.navigate("AccountTypeSetup")
    }


    let fName = (user?.name)?.split(/\s+/)




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
        <GestureHandlerRootView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={tw` flex-1`}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <LoggedInLayout>
                    <View
                        style={tw`px-5`}
                        >



                        <View
                            style={tw`flex-row justify-between mt-5 text-[3]`}
                        >
                            <AppText
                                style={tw``}
                            >
                                HI {fName?.[0]}
                            </AppText>

                            {/* <LowerDrawer/> */}
                            <PressAppText
                                style={tw`text-green-500`}
                                onPress={onPressLowerDrawer}
                            >
                                Change Account
                            </PressAppText>

                        </View>
                        <LowerDrawer ref={ref} >
                            {/* Current Account */}
                            <View style={apptw`mx-3`}>
                                <PressAppText style={apptw`bg-stone-300 `}>
                                    <View style={apptw`flex-row pt-5 px-5`}>
                                        <AppText> {user.product}</AppText>
                                        <AppText style={tw`text-red-500 px-3 `}>{user.accountNo}</AppText>
                                    </View>
                                    <View style={apptw`flex px-5`}>
                                    <AppText style={tw`text-2xl font-bold`}>{user.currency} {user.availableBalance}</AppText>
                                        <AppText style={apptw`font-base `}>Available Balance</AppText>
                                    </View>
                                </PressAppText>

                                {/* Savings Account */}
                                <PressAppText style={apptw`bg-stone-300 mt-5`}>
                                    <View style={apptw`flex-row pt-5 px-5 `}>
                                        <AppText> {user.product }</AppText>
                                        <AppText style={tw`text-red-500 px-3`}>{user.accountNo}</AppText>
                                    </View>
                                    <View style={apptw`flex px-5`}>
                                        <AppText style={tw`text-2xl font-bold`}>{user.currency} {user.availableBalance}</AppText>
                                        <AppText style={apptw`font-base `}>Available Balance</AppText>
                                    </View>
                                </PressAppText>
                            </View>
                        </LowerDrawer>



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


                        {transActs.slice(0,2).map((transAct) => (
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

                    </View>
                </LoggedInLayout>
            </KeyboardAvoidingView>
        </GestureHandlerRootView>
    )
}


export default DashBoard;