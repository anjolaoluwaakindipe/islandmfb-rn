import { View, Text, TextInput, KeyboardType } from "react-native";
import React, { useMemo, useRef } from "react";
import { useState, useEffect } from "react";
import tw from "twrnc";
import apptw from "../../utils/lib/tailwind";
import { isPlatform, Style } from "twrnc/dist/esm/types";
import AppText from "./Apptext";

type AppPinCodeProps = {
    onChangeText?: (text: string) => void;
    value?: string;
    keyboardType?: KeyboardType;
    numberOfPins: number;
    containerStyle?: Style;
    errorMessage?: string;
};

const AppPinCode = ({
    keyboardType,
    numberOfPins,
    containerStyle,
    errorMessage,
    onChangeText,
    value,
}: AppPinCodeProps) => {
    const [pin, setPin] = useState(
        Array.from({ length: numberOfPins }).map((val) => "")
    );

    const textRefArray = pin.map(() => useRef<TextInput>(null));

    useEffect(() => {
        if (onChangeText) {
            onChangeText(pin.join(""));
        }
        console.log(pin.join(""));
    }, [...pin]);

    useEffect(() => {
        if (value && value.length === pin.length && value !== pin.join("")) {
            setPin(value.split(""));
        }
    }, [value]);

    return (
        <>
            <View
                style={tw.style(`w-full  flex-row flex-wrap`, containerStyle)}
            >
                {pin.map((pinValue, pinIndex) => (
                    <View
                        style={tw.style(
                            pinCodeStyle,
                            `border-2 rounded-lg ${
                                errorMessage
                                    ? "border-red-700"
                                    : "border-transparent"
                            }`
                        )}
                        key={pinIndex}
                    >
                        <TextInput
                            ref={textRefArray[pinIndex]}
                            style={tw.style(" ", {
                                fontFamily: "poppins",
                            })}
                            hitSlop={{
                                bottom: 50,
                                top: 50,
                                right: 50,
                                left: 50,
                            }}
                            placeholderTextColor={"black"}
                            keyboardType={keyboardType}
                            placeholder="*"
                            onChangeText={(text) => {
                                setPin((prev) => {
                                    const newState = [...prev];
                                    if (newState[pinIndex].length === 0) {
                                        newState[pinIndex] = text;
                                    } else {
                                        newState[pinIndex] = text.replace(
                                            newState[pinIndex],
                                            ""
                                        );
                                    }

                                    if (newState[pinIndex].length !== 0) {
                                        if (pinIndex === pin.length - 1) {
                                            textRefArray[
                                                pinIndex
                                            ].current?.blur();
                                        } else {
                                            textRefArray[
                                                pinIndex + 1
                                            ].current?.focus();
                                        }
                                    }

                                    return newState;
                                });
                            }}
                            onKeyPress={({
                                nativeEvent,
                                preventDefault,
                                currentTarget,
                                stopPropagation,
                                isDefaultPrevented,
                                persist,
                            }) => {
                                if (nativeEvent.key === "Backspace") {
                                    if (pinIndex === 0) {
                                        textRefArray[pinIndex].current?.blur();
                                    } else {
                                        textRefArray[
                                            pinIndex - 1
                                        ].current?.focus();
                                    }
                                    return undefined;
                                }
                            }}
                            value={pin[pinIndex]}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                    </View>
                ))}
            </View>
            <AppText style={tw`text-xs text-red-700 mt-1`}>
                {errorMessage}
            </AppText>
        </>
    );
};

const pinCodeStyle = apptw`w-[15%] h-[15] mr-5 bg-textField justify-center items-center`;

export default AppPinCode;
