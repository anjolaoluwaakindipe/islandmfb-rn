import React from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import tw from "twrnc";
import { Style } from "twrnc/dist/esm/types";
import apptw from "../../utils/lib/tailwind";
import AppText from '../shared/Apptext';


type AppButtonWIconProp = {
    text?: string;
    subtext?: string;
    buttonStyle?: Style;
    textStyle?: Style;
    accountText?: string;
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const SwitchAccount = (props: AppButtonWIconProp) => {

    return (
        <Pressable
            style={({ pressed }) =>
                apptw.style(
                    `${pressed ? "bg-opacity-75" : "bg-opacity-100"
                    } bg-textField w-full py-4 rounded-lg`,
                    props?.buttonStyle
                )
            }
            onPress={props.onPress}
        >

            {/* icon will go here */}

            <AppText
                style={tw.style(
                    `text-lg px-3  `,
                    props?.textStyle
                )}
                // fontFamily="poppins"
            >


                {props.text}

            </AppText>


            <AppText
                fontFamily="poppins-semibd"
                style={tw.style(
                    ` text-[3] px-3  `,
                    props?.subtext
                )}
            >
                {props.subtext}
            </AppText>

<AppText
style={apptw`absolute left-60 text-[2] text-gray-400 top-5 `}
>
    {props.accountText}
</AppText>

        </Pressable>
    );
};

export default SwitchAccount;
