import React from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import tw from "twrnc";
import { Style } from "twrnc/dist/esm/types";
import apptw from "../../utils/lib/tailwind";
import AppButton from "../shared/AppButton";
import AppText from '../shared/Apptext'


type AppButtonWIconProp = {
    text?: string;
    subtext?: string;
    buttonStyle?: Style;
    textStyle?: Style;
    subtextStyle?: Style;
    buttontext?: string;
    icon?: any;
    iconL?: any;
    iconR?: any;
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const LoanProduct = (props: AppButtonWIconProp) => {

    return (
        <Pressable
            style={({ pressed }) =>
                apptw.style(
                    ` bg-textField w-full py-10 rounded-lg`,
                    props?.buttonStyle
                )
            }
            
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


            <AppButton
                text={props.buttontext}
                buttonStyle={apptw`w-[25] absolute left-55 top-10`}
                onPress={props.onPress}
            />


        </Pressable>
    );
};

export default LoanProduct;
