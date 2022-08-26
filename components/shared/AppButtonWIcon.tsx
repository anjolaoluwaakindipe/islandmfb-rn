import React from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import tw from "twrnc";
import { Style } from "twrnc/dist/esm/types";
import apptw from "../../utils/lib/tailwind";
import AppText from './Apptext';


type AppButtonWIconProp = {
    text?: string;
    buttonStyle?: Style;
    textStyle?: Style;
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const AppButtonWIcon = (props: AppButtonWIconProp) => {
     
    return (
        <Pressable
            style={({ pressed }) =>
                apptw.style(
                    `${
                        pressed ? "bg-opacity-75" : "bg-opacity-100"
                    } bg-textField w-full py-4 rounded-lg`,
                    props?.buttonStyle
                )
            }
            onPress={props.onPress}
        >

            {/* icon will go here */}
            <AppText
                style={tw.style(
                    `text-lg px-10 text-black`,
                    props?.textStyle
                )}
                fontFamily="poppins-semibd"
            >
                {props.text}
            </AppText>
        </Pressable>
    );
};

export default AppButtonWIcon;
