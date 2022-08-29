import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LetsGetStarted from "../assets/svg/letsgetstarted.svg";
import tw from "twrnc";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import PressAppText from "../components/shared/PressAppText";

type LetsGetStartedScreen = NativeStackScreenProps<
    RootStackParamList,
    "LetsGetStarted"
>;

const LetsGetStartedScreen = ({ navigation }: LetsGetStartedScreen) => {
    const navigateToSetProfile = () =>{
        navigation.navigate("SetProfile");
    }
    const navigateToCreateYourAccount = () => {
        navigation.navigate("CreateYourAccount")
    }
    return (
        <BasicBackButtonLayout>

            <View style={tw`flex-1 justify-center items-center px-6`}>
                
                <LetsGetStarted style={tw``} />

                <AppText style={tw`text-3xl mt-10`}>Let’s get started</AppText>
                <AppText
                    style={tw`text-lg mt-1 text-center`}
                    fontFamily="poppins-light"
                >
                    Never a better time than now to start enjoying Microfinance
                    banking on a new level
                </AppText>

                <AppButton text="Set Up Profile" buttonStyle={tw`mt-10`} onPress={navigateToSetProfile} />
                <PressAppText style={tw`text-base mt-2`} onPress={navigateToCreateYourAccount}>Create an account </PressAppText>
            </View>
        </BasicBackButtonLayout>
    );
};

export default LetsGetStartedScreen;
