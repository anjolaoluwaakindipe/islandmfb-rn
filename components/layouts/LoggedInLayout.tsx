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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import GettingStartedScreen from "../../screens/GettingStartedScreen"
import AccountTypeSetup from "../../screens/AccountTypeSetup"

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
                <Pressable onPress={() => navigation.goBack()} style={tw.style("py-2 px-3", )}>
                    <SimpleLineIcons
                        name="menu"
                        size={40}
                        style={tw`bg-white`}
                        color="black"
                    />
                </Pressable>

                {children}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default LoggedInLayout;
