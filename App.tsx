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
import { createDrawerNavigator, DrawerContent, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';


import tw from "twrnc";
import SetProfileScreen from "./screens/SetProfileScreen";
import VerificationScreen from "./screens/VerificationScreen";
import SuccessScreen from "./screens/SuccessScreen";
import CreateYourAccount from "./screens/CreateYourAccount";
import PersonalInfoScreen from "./screens/Profile/PersonalInfoScreen";
import AccountTypeSetup from "./screens/AccountTypeSetup";

import DashBoard from './screens/DashBoard';
import ProfileScreen from './screens/Profile/ProfileScreen';
import EditPersonalInfoScreen from './screens/Profile/EditPersonalInfoScreen';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import SignInScreen from "./screens/SignInScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import EnterCodeScreen from "./screens/EnterCodeScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import AirtimeScreen from "./screens/AirtimeScreen";

import EditContactDetails from './screens/Profile/EditContactDetails';
import MeansOfId from './screens/Profile/MeansOfIdScreen';
import ProofOfAddress from './screens/Profile/ProofOfAddressScreen';
import EditEmployment from './screens/Profile/EditEmploymentScreen';
import EditNextofKin from './screens/Profile/EditNextofKinScreen';
import LoanDash from './screens/Loan/LoanDash';
import LoanTransaction from './screens/Loan/LoanTransaction';
import LoanRepayment from './screens/Loan/LoanRepayment';
import LoanRepaymentDet from './screens/Loan/LoanRepaymentDet';
import LoanProducts from './screens/Loan/LoanProducts';
import LoanApplication from './screens/Loan/LoanApplicationScreen';
import SelfService from './screens/SelfService/SelfServiceScreen';
import LinkBvn from './screens/SelfService/LinkBvn';
import StatementofAccount from './screens/SelfService/StatementofAccount';


import BillPaymentScreen from './screens/BillPayment/BillPayment';
import CableTv from "./screens/BillPayment/CableTv";
import InternetServices from './screens/BillPayment/InternetServices';
import Utility from './screens/BillPayment/Utility';
import Insurance from './screens/BillPayment/Insurance';
import PaymentPage from './screens/BillPayment/PaymentPage';


import { store } from './state/store';
import {Provider} from "react-redux"
import CustomDrawer from './CustomDrawer';
import LowerDrawer from './LowerDrawer';

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
import TransferType from './screens/Transfer/TransferType';
import TransferScreen from './screens/Transfer/TransferScreen';
import Notifications from './components/dashboard/Notifications';
import ViewAllScreen from './components/dashboard/ViewAllScreen';
import CAccLandingPage from './screens/CAccLandingPage';
import AccountTypeCategory from "./screens/AccountTypeCategory";
import AccountServices from "./screens/AccountServices"
import ChooseBeneficiary from './screens/Transfer/ChooseBeneficiary';






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
                    drawerActiveTintColor: "white",
                }}
                drawerContent={props => <CustomDrawer{...props} />}
            >

                <Drawer.Screen
                    name='DashBoard'
                    component={DashBoard}
                    options={{
                        drawerType: 'front',
                        drawerLabelStyle: {fontSize:10, color: "white"},
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
                        headerShown: false,
                        drawerIcon: () =>
                            <Ionicons
                                name="cash-outline"
                                size={30}
                                color="black"

                            />
                    }}
                />

                <Drawer.Screen
                    name="TransferType"
                    component={TransferType}
                    options={{
                        headerShown: false,
                        drawerIcon: () =>
                            <MaterialCommunityIcons
                                name="bank"
                                size={30}
                                color="black"
                            />
                    }}
                />

                <Drawer.Screen
                    name="BillPayment"
                    component={BillPaymentScreen}

                    options={{
                        headerShown: false,
                        title: "Bill Payment",
                        drawerIcon: () =>
                            <MaterialCommunityIcons
                                name="cash"
                                size={30}
                                color="black"
                            />
                    }}
                />
                <Drawer.Screen
                    name='SelfService'
                    component={SelfService}
                    options={{
                        headerShown: false,
                        title: "Self Service",
                        drawerIcon: () =>
                            <MaterialCommunityIcons
                                name="room-service-outline"
                                size={30}
                                color="black"
                            />
                    }}
                />


                <Drawer.Screen
                    name="LoanDash"
                    component={LoanDash}
                    options={{
                        title:"Loan",
                        headerShown: false,
                        drawerIcon: () =>
                            <Ionicons
                                name="md-newspaper-outline"
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
        <Provider
        store={store}
        >

       


        <SafeAreaProvider>
            <StatusBar />

            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}

                    initialRouteName="GettingStarted"
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
                    name="SignIn"
                    component={SignInScreen}
                    />
                    <Stack.Screen
                        name="SetProfile"
                        component={SetProfileScreen}
                    />
                    <Stack.Screen
                        name="CAccLandingPage"
                        component={CAccLandingPage}
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
                        name="AccountTypeCategory"
                        component={AccountTypeCategory}
                    />
                    <Stack.Screen
                            name="AccountServices"
                            component={AccountServices}
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
                        name="Notifications"
                        component={Notifications}
                    />
                    <Stack.Screen
                        name="ViewAllScreen"
                        component={ViewAllScreen}
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
                        name="TransferType"
                        component={TransferType}
                    />
                    <Stack.Screen
                        name="Transfer"
                        component={TransferScreen}
                    />
                    <Stack.Screen
                        name="ChooseBeneficiary"
                        component={ChooseBeneficiary}
                    />
                    <Stack.Screen
                        name="LoanDash"
                        component={LoanDash}
                    />
                    <Stack.Screen
                        name='LoanTransaction'
                        component={LoanTransaction}
                    />
                    <Stack.Screen name="Success" 
                    component={SuccessScreen} />
                    <Stack.Screen
                        name='LoanRepayment'
                        component={LoanRepayment}

                    />
                    <Stack.Screen
                        name='LoanRepaymentDet'
                        component={LoanRepaymentDet}

                    />
                    <Stack.Screen
                        name='LoanProducts'
                        component={LoanProducts}
                    />
                    <Stack.Screen
                        name='LoanApplication'
                        component={LoanApplication}
                    />
                    <Stack.Screen

                        name='SelfService'
                        component={SelfService}
                    />
                    <Stack.Screen name="Airtime" component={AirtimeScreen} />
                    <Stack.Screen name="BillPayment" component={BillPaymentScreen} />
                    <Stack.Screen name="CableTv" component={CableTv} />
                    <Stack.Screen name="InternetServices" component={InternetServices} />
                    <Stack.Screen name="Utility" component={Utility} />
                    <Stack.Screen name="Insurance" component={Insurance} />
                    <Stack.Screen name="PaymentPage" component={PaymentPage} />
                    <Stack.Screen
                    name='LinkBvn'
                    component={LinkBvn}
                    
                    />

                    <Stack.Screen
                    name="StatementofAccount"
                    component={StatementofAccount}
                    />


                </Stack.Navigator>





            </NavigationContainer>






        </SafeAreaProvider>
        </Provider>
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