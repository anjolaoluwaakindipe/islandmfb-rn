import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";
import AppButtonWIcon from "./components/shared/AppButtonWIcon";
import AppText from "./components/shared/Apptext";
import apptw from "./utils/lib/tailwind";
import { Ionicons } from '@expo/vector-icons';





function CustomDrawer(props: any) {
    return (

        <DrawerContentScrollView
            contentContainerStyle={{ backgroundColor: "white" }}
            {...props}>


            <View
                style={{
                    flexDirection: "row",
                    padding: 50,
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
                    style={apptw`mx-auto absolute top-[30] ml-5  `}
                >
                    <AppText
                        style={apptw`font-bold text-[4] text-left`}
                    >
                        Akinloluwa Adeleye

                    </AppText>
                    <AppText
                        style={apptw`text-left text-[4]`}
                    >BVN:22234985024585</AppText>

                </View>
            </View>
            <DrawerItemList {...props} />

            <View
                style={apptw`mt-50`}
            >
                <AppButtonWIcon
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