import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import tw from "twrnc";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import EmptyLayout from "../components/layouts/EmptyLayout";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import SuccessSvg from "../assets/svg/success.svg";

type SuccessScreenProps = NativeStackScreenProps<RootStackParamList, "Success">;

const SuccessScreen = ({ route, navigation }: SuccessScreenProps) => {
    const navigateToNextScreen = () => {
        if (route.params?.nextPage && route.params.nextPageParams) {
            navigation.navigate(route.params?.nextPage, route.params.nextPageParams );
        }
    };

    return (
        <KeyboardAvoidingView
            style={tw` flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <EmptyLayout>
                <View style={tw`flex flex-1 justify-center items-center p-6 `}>
                    <SuccessSvg style={tw.style(`mt-auto`, { width: 70 })} />
                    <AppText style={tw`text-4xl mt-10`}>Success!</AppText>
                    <AppText style={tw`mt-2 text-center text-base`}>
                        {route.params?.successMessage}
                    </AppText>
                    <AppButton
                        buttonStyle={tw`mt-auto mb-10`}
                        text={route.params?.successButtonText}
                        onPress={navigateToNextScreen}
                    />
                </View>
            </EmptyLayout>
        </KeyboardAvoidingView>
    );
};

export default SuccessScreen;
