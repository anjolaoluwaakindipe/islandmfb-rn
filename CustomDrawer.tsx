import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";
import AppButtonWIcon from "./components/shared/AppButtonWIcon";
import AppText from "./components/shared/Apptext";
import apptw from "./utils/lib/tailwind";
import { Ionicons } from '@expo/vector-icons';
import { authSelector, setAuthStateTokens } from "./state/authSlice";
import { logOut } from "./state/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "./state/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


function CustomDrawer(props: any) {
    const { user } = useSelector(authSelector)
    const dispatch = useDispatch<AppDispatch>();
    const handleLogOut=()=>{dispatch(setAuthStateTokens)}

    let fName = (user?.name)?.split(/\s+/)

    return (

        <DrawerContentScrollView
            contentContainerStyle={{
                paddingBottom:40 ,
                paddingTop: 90,
                backgroundColor: "white",
                flex: 1,
                justifyContent: "space-between"
            }}
            {...props}>


            <View
                style={{
                    flexDirection: "column",
                    // padding: 
                
                    backgroundColor: "white",
                    alignItems: "center",
                }}>

                <View
                    style={apptw`bg-transparent rounded-full  mx-auto`}
                >
                    <Ionicons name="md-person-outline"
                        size={50}
                        color="black" />
                </View>



                <View
                    style={apptw`mx-auto   ml-5  `}
                >
                    <AppText
                        style={apptw`font-bold text-[4] text-left`}
                    >
                        {fName?.[0]} {fName?.[2]}
                    </AppText>
                    <AppText
                        style={apptw`text-left text-[4]`}
                    >BVN:22234985024585</AppText>

                </View>
            </View>
            <View
            >
                <DrawerItemList {...props} />
            </View>


            <View
                style={apptw``}
            >
                <AppButtonWIcon
                    onPress={handleLogOut}
                    buttonStyle={apptw`bg-white`}
                    textStyle={apptw`font-light text-center`}
                    text="Logout"
                    iconL={
                        <Ionicons
                            name="exit-outline"
                            color="black"
                            style={apptw`top-1`}
                            size={24}
                        />
                    }
                />
            </View>

        </DrawerContentScrollView>

    )
}



export default CustomDrawer