import React from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import tw from "twrnc";
import { Style } from "twrnc/dist/esm/types";
import apptw from "../../utils/lib/tailwind";
import AppText from './Apptext';
import { MaterialIcons } from '@expo/vector-icons'


type AppButtonWIconProp = {
    text?: string;
    buttonStyle?: Style;
    textStyle?:Style;
    icon?:any;
    iconL?:any;
    iconR?: any;
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
            {props.icon}

            <View style={apptw`absolute left-[7] bottom-[5] `}>
                  {props.iconL}
                </View>
            <AppText
                style={tw.style(
                    `text-lg  ml-8 text-black `,props.textStyle
                )}
                fontFamily="poppins-semibd"
            >
                 {props.text} 
                
            </AppText>

              <View style={apptw`absolute left-[75] bottom-[5] `}>
                  {props.iconR}
                </View>
        </Pressable>
    );
};

export default AppButtonWIcon;
