import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {  SimpleLineIcons  } from "@expo/vector-icons"
import React from "react";
import {
    Keyboard,
    Platform,
    Pressable,
    ScrollView,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import {AntDesign} from '@expo/vector-icons'
type LoggedInLayoutProp = {
    children: React.ReactNode;
};

const LoggedInLayout = ({ children }: LoggedInLayoutProp) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => (Platform.OS != "web" ? Keyboard.dismiss() : null)}
        >
            <SafeAreaView
                style={tw`bg-white  flex-1 shadow-md`}
                edges={["top", "left", "right"]}
            >

                <View style= {tw`flex-row justify-between py-4 px-6`} >

                <Pressable onPress={() => navigation.toggleDrawer()} style={tw.style("", )}>
                    <SimpleLineIcons
                        name="menu"
                        size={40}
                        style={tw`bg-white`}
                        color="black"
                    />
                </Pressable>

                <Pressable onPress={() => navigation.toggleDrawer()} style={tw.style("", )}>
                    <AntDesign
                        name="bells"
                        size={40}
                        style={tw`bg-white`}
                        color="black"
                    />
                </Pressable>
                
                </View>
                



                {children}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default LoggedInLayout;
