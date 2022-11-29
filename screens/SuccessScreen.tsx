import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import {
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    View,
    BackHandler,
} from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import tw from "twrnc";
import SuccessSvg from "../assets/svg/success.svg";
import EmptyLayout from "../components/layouts/EmptyLayout";
import AppButton from "../components/shared/AppButton";
import AppText from "../components/shared/Apptext";
import { RootStackParamList } from "./allroutes";
import Explosion from "react-native-confetti-cannon";

type SuccessScreenProps = NativeStackScreenProps<RootStackParamList, "Success">;

const SuccessScreen = ({ route, navigation }: SuccessScreenProps) => {
    const confettiRef = useRef<Explosion>(null); // start confetti animation function

    // screen dimesions
    const height = Dimensions.get("screen").height;
    const width = Dimensions.get("screen").width;

    // animated variables
    const transformPos = useSharedValue(-height / 2); // success svg positon variable
    const successLogoAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: transformPos.value }],
        };
    });

    // func: navigate to next screen gotten from params
    const navigateToNextScreen = () => {
        console.log(route.params?.nextPage);
        if (route.params?.nextPage) {
            navigation.navigate(route.params?.nextPage);
        }
    };

    const startConfetti = () => confettiRef.current?.start();

    useEffect(() => {
        const startAnimation = setTimeout(() => {
            transformPos.value = withSpring(0, { damping: 13 });
        }, 30);
        startConfetti();

        return () => {
            clearTimeout(startAnimation);
        };
    });

    // prevent going back


    return (
        <KeyboardAvoidingView
            style={tw` flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <EmptyLayout>
                <Explosion
                    count={200}
                    origin={{ x: width / 2, y: height }}
                    autoStart={false}
                    fadeOut={true}
                    ref={confettiRef}
                />
                <View style={tw`flex flex-1 justify-center items-center p-6 `}>
                    <View style={tw`flex justify-center items-center mt-auto`}>
                        {/* Success svg */}
                        <Animated.View
                            style={tw.style(
                                `mt-auto flex justify-center items-center`,
                                {
                                    width: "100%",
                                },
                                successLogoAnimatedStyle
                            )}
                        >
                            <SuccessSvg />
                        </Animated.View>
                    </View>

                    {/* Title */}
                    <AppText style={tw`text-4xl mt-10`}>Success!</AppText>

                    {/* Content */}
                    <AppText style={tw`mt-2 text-center text-base`}>
                        {route.params?.successMessage}
                    </AppText>

                    {/* Success continue button */}
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
