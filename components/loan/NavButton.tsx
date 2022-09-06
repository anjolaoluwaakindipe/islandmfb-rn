import React from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import tw from "twrnc";
import { Style } from "twrnc/dist/esm/types";
import apptw from "../../utils/lib/tailwind";
import AppText from '../shared/Apptext'


type AppButtonWIconProp = {
    text?: string;
    subtext?: string;
    buttonStyle?: Style;
    textStyle?: Style;
    subtextStyle?: Style;
    icon?: any;
    iconL?: any;
    iconR?: any;
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const NavButton = (props: AppButtonWIconProp) => {

    return (
        <Pressable
            style={({ pressed }) =>
                apptw.style(
                    `${pressed ? "bg-opacity-75" : "bg-opacity-100"
                    } bg-textField w-full py-10 rounded-lg`,
                    props?.buttonStyle
                )
            }
            onPress={props.onPress}
        >

            {/* icon will go here */}
            {props.icon}

            <View
                style={apptw`absolute left-3 bottom-13`}
            >
                {props.iconL}
            </View>
            <AppText
                style={tw.style(
                    `text-lg px-16 text-black`,
                    props?.textStyle
                )}
                fontFamily="poppins-semibd"
            >


                {props.text}
               
            </AppText>

            
               <AppText
                    fontFamily="poppins"
                    style={tw.style( 
                        ` text-[3] text-left  `,
                        props?.subtext
                    )}
                >
                    {props.subtext}
                </AppText>
               


        </Pressable>
    );
};

export default NavButton;
