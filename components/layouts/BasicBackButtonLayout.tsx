import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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

type BasicBackButtonLayoutProp = {
    children: React.ReactNode;
};

const BasicBackButtonLayout = ({ children }: BasicBackButtonLayoutProp) => {
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
                    <MaterialIcons
                        name="keyboard-arrow-left"
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

export default BasicBackButtonLayout;
