import React from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import tw from "twrnc";
import { Style } from "twrnc/dist/esm/types";
import apptw from "../../utils/lib/tailwind";
import AppText from './Apptext';


type AppButtonProp = {
    text?: string;
    buttonStyle?: Style;
    textStyle?: Style;
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const AppButton = (props: AppButtonProp) => {
    return (
        <Pressable
            style={({ pressed }) =>
                apptw.style(
                    `${
                        pressed ? "bg-opacity-75" : "bg-opacity-100"
                    } bg-primCol w-full py-4 rounded-lg`,
                    props?.buttonStyle
                )
            }
            onPress={props.onPress}
        >
            <AppText
                style={tw.style(
                    `text-lg mx-auto text-white`,
                    props?.textStyle
                )}
                fontFamily="poppins-semibd"
            >
                {props.text}
            </AppText>
        </Pressable>
    );
};

export default AppButton;
