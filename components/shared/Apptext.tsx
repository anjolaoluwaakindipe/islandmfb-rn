import { View, Text } from "react-native";
import React from "react";
import { Style } from "twrnc/dist/esm/types";
import tw from "twrnc";

type PoppinFont =
    | "poppins-thin"
    | "poppins-thinI"
    | "poppins-exlight"
    | "poppins-exlightI"
    | "poppins-light"
    | "poppins-lightI"
    | "poppins-md"
    | "poppins-mdI"
    | "poppins-semibd"
    | "poppins-semibdI"
    | "poppins-bd"
    | "poppins-bdI"
    | "poppins-exbd"
    | "poppins-exbdI"
    | "poppins-bl"
    | "poppins-blI"
    | "poppins"
    | "poppinsI";

type AppTextProp = {
    children: React.ReactNode;
    style?: Style;
    fontFamily?: PoppinFont | undefined;
    
};

const AppText = (props: AppTextProp) => {
    return (
        <Text
            style={tw.style(
                props.style,
                {
                    fontFamily: props.fontFamily || "poppins",
                },
                "text-lg"
            )}
        >
            {props.children}
        </Text>
    );
};

export default AppText;
