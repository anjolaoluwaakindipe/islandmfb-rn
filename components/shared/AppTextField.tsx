import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Control, Controller, Field } from "react-hook-form";
import {
    KeyboardTypeOptions,
    NativeSyntheticEvent,
    Pressable,
    TextInput,
    TextInputFocusEventData,
    View,
} from "react-native";
import tw from "twrnc";
import { Style } from "twrnc/dist/esm/types";
import apptw from "../../utils/lib/tailwind";
import AppText from "./Apptext";

type AppTextFieldProps = {
    validationName?: string;
    onChange?: (text: string) => void;
    value?: string;
    control?: any;
    placeholder?: string;
    autoFocus?: boolean;
    errorMessage?: string;
    keyboardType?: KeyboardTypeOptions;
    containerStyle?: Style;
    title?: string;
    isPassword?: boolean | undefined;
    onBlur?:
        | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
        | undefined;
    ref?: React.LegacyRef<TextInput> | undefined;
};

const AppTextField = (props: AppTextFieldProps) => {
    const [showPassword, setShowPassword] = useState(
        props.isPassword === undefined ? false : props.isPassword
    );

  

    if (props.control && props.validationName) {
        return (
            <View>
                <Controller
                    control={props.control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextContainer containerStyle={props.containerStyle}>
                            <AppText
                                style={apptw`text-base`}
                                fontFamily="poppins-semibd"
                            >
                                {props?.title}
                            </AppText>
                            <View
                                style={apptw`h-14 w-full bg-textField mt-2 rounded-md flex items-center justify-between  p-4 border-2 flex-row ${
                                    props.errorMessage
                                        ? " border-red-700"
                                        : "border-transparent"
                                }`}
                            >
                                <MyTextInput
                                    hideText={showPassword}
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    ref={props.ref}
                                    autoFocus={props.autoFocus}
                                    keyboardType={props.keyboardType}
                                    placeholder={props.placeholder}
                                />
                                {props.isPassword && (
                                    <PasswordEye
                                        setShowPassword={setShowPassword}
                                        showPassword={showPassword}
                                    />
                                )}
                            </View>
                            <ErrorMessage>{props.errorMessage}</ErrorMessage>
                        </TextContainer>
                    )}
                    name={props.validationName}
                />
            </View>
        );
    }

    return (
        <TextContainer containerStyle={props.containerStyle}>
            <AppText style={apptw`text-base`} fontFamily="poppins-semibd">
                {props?.title}
            </AppText>
            <View
                style={apptw`h-16 w-full bg-textField mt-2 rounded-md flex items-center justify-between p-4 border-2 flex-row ${
                    props.errorMessage
                        ? " border-red-700"
                        : "border-transparent"
                }`}
            >
                <MyTextInput
                    ref={props.ref}
                    autoFocus={props.autoFocus}
                    keyboardType={props.keyboardType}
                    placeholder={props.placeholder}
                    onChangeText={props.onChange}
                    value={props.value}
                    onBlur={props.onBlur}
                    hideText={showPassword}
                />
                {props.isPassword && (
                    <PasswordEye
                        setShowPassword={setShowPassword}
                        showPassword={showPassword}
                    />
                )}
            </View>
            <ErrorMessage>{props.errorMessage}</ErrorMessage>
        </TextContainer>
    );
};


  const TextContainer = ({ children, containerStyle }: { children: React.ReactNode, containerStyle: AppTextFieldProps["containerStyle"] }) => (
      <View style={apptw.style("", containerStyle)}>{children}</View>
  );

// Input Text within app textfield
const MyTextInput = (textInputProps: {
    onChangeText: AppTextFieldProps["onChange"];
    value: AppTextFieldProps["value"];
    hideText: boolean;
    onBlur?: AppTextFieldProps["onBlur"];
    ref: React.LegacyRef<TextInput> | undefined;
    autoFocus: AppTextFieldProps["autoFocus"];
    keyboardType: AppTextFieldProps["keyboardType"];
    placeholder: AppTextFieldProps["placeholder"];
}) => (
    <TextInput
        style={apptw.style(`text-base flex justify-center flex-1 `, {
            fontFamily: "poppins",
        })}
        ref={textInputProps.ref}
        autoFocus={textInputProps.autoFocus}
        keyboardType={textInputProps.keyboardType}
        placeholder={textInputProps.placeholder}
        onChangeText={textInputProps.onChangeText}
        defaultValue={textInputProps.value}
        onBlur={textInputProps.onBlur || undefined}
        secureTextEntry={textInputProps.hideText}
        clearTextOnFocus={false}
    
    />
);

// error message
const ErrorMessage = (props: { children: React.ReactNode }) => (
    <AppText style={tw`text-xs text-red-700 mt-1`}>{props?.children}</AppText>
);

// password eye if it is a password
const PasswordEye = (props: {
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
    <Pressable
        onPress={() => {
            props.setShowPassword((prev) => !prev);
        }}
    >
        {props.showPassword ? (
            <Ionicons name="eye-outline" size={24} color="grey" />
        ) : (
            <Ionicons name="eye-off-outline" size={24} color="grey" />
        )}
    </Pressable>
);

export default AppTextField;
