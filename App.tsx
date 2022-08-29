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
import { createDrawerNavigator } from '@react-navigation/drawer';


import tw from "twrnc";
import SetProfileScreen from "./screens/SetProfileScreen";
import VerificationScreen from "./screens/VerificationScreen";
import SuccessScreen from "./screens/SuccessScreen";
import CreateYourAccount from "./screens/CreateYourAccount";
import PersonalInfoScreen from "./screens/PersonalInfoScreen";
import AccountTypeSetup from "./screens/AccountTypeSetup";


import CustomSidebarMenu from "./components/layouts/CustomSidebarMenu";

import DrawerItems from "./constants/DrawerItems";

//testpages
import TestPage1 from "./screens/TestPage1";
import TestPage2 from "./screens/TestPage2";


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
import { Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";



const NavigationDrawerStructure = (props: { navigationProps: { toggleDrawer: () => void; }; }) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={toggleDrawer}>
                {/*Donute Button Image */}
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                    }}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />
            </TouchableOpacity>
        </View>
    );
};


const Drawer = createDrawerNavigator();

function App() {
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
            {/* <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName="TestPage1"
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
                        name="Verification"
                        component={VerificationScreen}
                        options={{ gestureEnabled: false }}
                    />
                    <Stack.Screen
                        name="TestPage1"
                        component={TestPage1}
                    />


                    <Stack.Screen name="Success" component={SuccessScreen} />
                </Stack.Navigator>





            </NavigationContainer> */}



            <NavigationContainer>
                <Drawer.Navigator initialRouteName="TestPage1" >


                    {DrawerItems.map(drawer => <Drawer.Screen
                        component={
                            drawer.name === 'TestPage1' ? TestPage1
                                : drawer.name === 'TestPage2' ? TestPage2
                                    : VerificationScreen
                        }
                        key={drawer.name}
                        name={drawer.name}

                        options={{
                            drawerIcon: ({ focused }) =>
                                drawer.iconType === 'Material' ?
                                    <MaterialCommunityIcons

                                        // name={drawer.iconName}
                                        size={24}
                                        color={focused ? "#e91e63" : "black"}
                                    />
                                    :
                                    drawer.iconType === 'Feather' ?
                                        <Feather
                                            // name={drawer.iconName}
                                            size={24}
                                            color={focused ? "#e91e63" : "black"}
                                        />
                                        :
                                        <FontAwesome5
                                            name={drawer.iconName}
                                            size={24}
                                            color={focused ? "#e91e63" : "black"}
                                        />
                        }}
                    />)
                    }

                </Drawer.Navigator>
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