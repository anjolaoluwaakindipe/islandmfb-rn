import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GettingStartedScreen from "./screens/GettingStartedScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./screens/allroutes";
import LetsGetStartedScreen from "./screens/LetsGetStartedScreen";
import AppLoading from "expo-app-loading";

import tw from "twrnc";
import SetProfileScreen from "./screens/SetProfileScreen";
import VerificationScreen from "./screens/VerificationScreen";
import SuccessScreen from "./screens/SuccessScreen";

import CreateYourAccount from "./screens/CreateYourAccount";
import PersonalInfoScreen from "./screens/PersonalInfoScreen";
import AccountTypeSetup from "./screens/AccountTypeSetup";

import SignInScreen from "./screens/SignInScreen";

import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

export default function App() {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    let [fontsLoaded] = useFonts({
        "poppins-thin": Poppins_100Thin,
        "poppins-thinI": Poppins_100Thin_Italic,
        "poppins-exlight": Poppins_200ExtraLight,
        "poppins-exlightI": Poppins_200ExtraLight_Italic,
        "poppins-light": Poppins_300Light,
        "poppins-lightI": Poppins_300Light_Italic,
        poppins: Poppins_400Regular,
        poppinsI: Poppins_400Regular_Italic,
        "poppins-md": Poppins_500Medium,
        "poppins-mdI": Poppins_500Medium_Italic,
        "poppins-semibd": Poppins_600SemiBold,
        "poppins-semibdI": Poppins_600SemiBold_Italic,
        "poppins-bd": Poppins_700Bold,
        "poppins-bdI": Poppins_700Bold_Italic,
        "poppins-exbd": Poppins_800ExtraBold,
        "poppins-exbdI": Poppins_800ExtraBold_Italic,
        "poppins-bl": Poppins_900Black,
        "poppins-blI": Poppins_900Black_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <SafeAreaProvider>
            <StatusBar />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName="AccountTypeSetup"
                >
                    <Stack.Screen
                        name="GettingStarted"
                        component={GettingStartedScreen}
                    />
                    <Stack.Screen
                        name="SignIn"
                        component={SignInScreen}
                    />
                    <Stack.Screen
                        name="LetsGetStarted"
                        component={LetsGetStartedScreen}
                    />
                    <Stack.Screen
                        name="SetProfile"
                        component={SetProfileScreen}
                    />
                    <Stack.Screen
                        name="CreateYourAccount"
                        component={CreateYourAccount}
                    />
                    <Stack.Screen
                        name="PersonalInfo"
                        component={PersonalInfoScreen}
                    />
                    <Stack.Screen
                    name="AccountTypeSetup"
                    component={AccountTypeSetup}
                    />

                    <Stack.Screen
                        name="Verification"
                        component={VerificationScreen}
                        options={{ gestureEnabled: false }}
                    />
                    <Stack.Screen name="Success" component={SuccessScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
