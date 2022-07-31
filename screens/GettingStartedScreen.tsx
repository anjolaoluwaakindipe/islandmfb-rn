import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../components/shared/AppButton";
import apptw from "../utils/lib/tailwind";
import { succCol } from "../utils/lib/colors";
import CompanyLogo from "../assets/svg/companylogo1.svg";
import AppText from "../components/shared/Apptext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";

type GettingStartedScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "GettingStarted"
>;

const GettingStartedScreen = ({
    navigation,
    route,
}: GettingStartedScreenProps) => {
    const navigateToLetsGetStartedScr = () => {
        navigation.navigate("LetsGetStarted");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoArea}>
                <CompanyLogo style={tw`pb-28`} />
            </View>

            <View style={styles.contentArea}>
                <View style={apptw`h-4/5 flex justify-between`}>
                    <AppText style={tw`text-4xl`}>
                        Welcome to Island Microfinance Bank
                    </AppText>

                    <AppText style={apptw`text-lg max-w-[70] mt-7`}>
                        New level of microfinance banking with our customer app
                    </AppText>

                    <View>
                        <AppButton
                            text="Get Started"
                            buttonStyle={tw.style("")}
                            onPress={navigateToLetsGetStartedScr}
                        />
                        <AppText style={apptw`self-center mt-4 text-lg`}>
                            Have an account?{" "}
                            <AppText style={apptw`text-succCol`}>
                                Sign in
                            </AppText>{" "}
                        </AppText>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logoArea: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 20,
    },
    contentArea: {
        flex: 4,
        padding: 20,
    },
});

export default GettingStartedScreen;
