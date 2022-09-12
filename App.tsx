import 'react-native-gesture-handler';


import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import GettingStartedScreen from "./screens/GettingStartedScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./screens/allroutes";
import LetsGetStartedScreen from "./screens/LetsGetStartedScreen";
import AppLoading from "expo-app-loading";
import { createDrawerNavigator, DrawerContent, DrawerItem } from '@react-navigation/drawer';


import tw from "twrnc";
import SetProfileScreen from "./screens/SetProfileScreen";
import VerificationScreen from "./screens/VerificationScreen";
import SuccessScreen from "./screens/SuccessScreen";
import CreateYourAccount from "./screens/CreateYourAccount";
import PersonalInfoScreen from "./screens/PersonalInfoScreen";
import AccountTypeSetup from "./screens/AccountTypeSetup";

import DashBoard from './screens/DashBoard';
import ProfileScreen from './screens/ProfileScreen';
import EditPersonalInfoScreen from './screens/EditPersonalInfoScreen';

import { Ionicons } from '@expo/vector-icons';

import SignInScreen from "./screens/SignInScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import EnterCodeScreen from "./screens/EnterCodeScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import AirtimeScreen from "./screens/AirtimeScreen";

import EditContactDetails from './screens/EditContactDetails';
import MeansOfId from './screens/MeansOfIdScreen';
import ProofOfAddress from './screens/ProofOfAddressScreen';
import EditEmployment from './screens/EditEmploymentScreen';
import EditNextofKin from './screens/EditNextofKinScreen';

import BillPaymentScreen from "./screens/BillPaymentFolder/BillPaymentScreen";
import CableTv from "./screens/BillPaymentFolder/CableTv";
import InternetServices from './screens/BillPaymentFolder/InternetServices';
import Utility from './screens/BillPaymentFolder/Utility';
import Insurance from './screens/BillPaymentFolder/Insurance';
import PaymentPage from './screens/BillPaymentFolder/PaymentPage';



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
import TransferScreen from './screens/TransferScreen';



function ProfileDrawer() {
    const Drawer = createDrawerNavigator()
    return (

        <SafeAreaProvider>

            <Drawer.Navigator
                initialRouteName="DashBoard"
                screenOptions={{
                    drawerStyle: {
                        width: '60%',
                    },
                    drawerActiveTintColor: "#BC4B52",
                }}
            >

                <Drawer.Screen
                    name='DashBoard'
                    component={DashBoard}
                    options={{
                        drawerType: 'front',
                        title: "dashboard",
                        headerShown: false,
                        
                    }}
                />

                
                <Drawer.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                        drawerIcon: () =>
                            <Ionicons name="md-person-outline"
                                size={30}
                                color="black" />

                    }}
                />

                <Drawer.Screen
                    name='Airtime'

                    component={AirtimeScreen}

                    options={{
                        headerShown:false,
                        drawerIcon:()=>
                        <Ionicons
                        name="cash-outline"
                        size={30}
                        color="black"
                        
                    />
                    }}
                />

            </Drawer.Navigator>



        </SafeAreaProvider>


    )
}

function App() {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    const Drawer = createDrawerNavigator();
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



                    initialRouteName="BillPayment"

                >

                    <Stack.Screen
                        name="GettingStarted"
                        component={GettingStartedScreen}
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
                        name="ForgotPassword"
                        component={ForgotPasswordScreen}
                    />
                    <Stack.Screen
                        name="EnterCode"
                        component={EnterCodeScreen}
                    />
                    <Stack.Screen
                        name="ResetPassword"
                        component={ResetPasswordScreen}
                    />

                    <Stack.Screen
                        name="Verification"
                        component={VerificationScreen}
                        options={{ gestureEnabled: false }}
                    />

                    <Stack.Screen
                        name="DashBoard"
                        component={ProfileDrawer}
                    />

                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            headerShown: false,

                        }}
                    />
                    <Stack.Screen
                        name="EditPersonalInfo"
                        component={EditPersonalInfoScreen}
                    />
                    <Stack.Screen
                        name="EditContactDetails"
                        component={EditContactDetails}
                    />
                    <Stack.Screen

                        name='MeansOfId'
                        component={MeansOfId}
                    />

                    <Stack.Screen
                        name='ProofOfAddress'
                        component={ProofOfAddress}
                    />
                    <Stack.Screen
                        name='EditEmployment'
                        component={EditEmployment}
                    />
                    <Stack.Screen
                        name='EditNextofKin'
                        component={EditNextofKin}
                    />
                    <Stack.Screen
                        name="Transfer"
                        component={TransferScreen}
                    />


                    <Stack.Screen name="Success" component={SuccessScreen} />




                    <Stack.Screen name="Airtime" component={AirtimeScreen} />
                    <Stack.Screen name="BillPayment" component={BillPaymentScreen} />
                    <Stack.Screen name="CableTv" component={CableTv} />
                    <Stack.Screen name="InternetServices" component={InternetServices} />
                    <Stack.Screen name="Utility" component={Utility} />
                    <Stack.Screen name="Insurance" component={Insurance} />
                    <Stack.Screen name="PaymentPage" component={PaymentPage} />


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




export default App