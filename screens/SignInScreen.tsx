import { View, Text, Image, ScrollView } from "react-native";
import SVG from "react-native-svg";
import React, { Children, useEffect, useState } from "react";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import AppTextField from "../components/shared/AppTextField";
import { primCol } from "../utils/lib/colors";
import apptw from "../utils/lib/tailwind";
import Companylogo1 from "../assets/svg/companylogo1.svg";

import {
  loginwithEmailFormType,
  loginwithEmailSchema
} from "../services/validation/loginVal"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser, authSelector } from "../state/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../state/store"
import * as SecureStore from 'expo-secure-store';

import { SecureStorage } from "../services/Singleton/secureStorage"
import PressAppText from "../components/shared/PressAppText";


type SignInScreen = NativeStackScreenProps<
  RootStackParamList,
  "SignIn"
>;






const SignInScreen = ({ navigation }: SignInScreen) => {
  const { isError, isLoading, isSuccess, loginErrorMessage } = useSelector(authSelector);

  const navigatetoDashBoard = () => {
    navigation.navigate("DashBoard")
  }

  const navigateToLetsGetStartedScr = () => {
    navigation.navigate("LetsGetStarted");
};

  const [isButtonLoading, setButtonLoading] = useState(false)
  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<loginwithEmailFormType>({

    defaultValues: {
      password: "",
      userName: "",
    },
    resolver: zodResolver(loginwithEmailSchema),
  })

  useEffect(() => {
    if (isSuccess && !isLoading) {
      navigatetoDashBoard()
    }
    if (isError && !isLoading) {
      alert(loginErrorMessage);
    }

  }, [isError, isLoading, isSuccess,])


  const onSubmit = handleSubmit(async (data) => {
    setButtonLoading(true)
    await dispatch(
      loginUser({ userName: data.userName, password: data.password })
    );


    setButtonLoading(false)
  })

  return (
    <>
      <BasicBackButtonLayout>

        <>

          {/* Logo section */}

          <View>
            <Companylogo1
              style={tw`ml-10 mt-10`}
            />

          </View>
          <ScrollView
            style={tw`px-5 mt-5`}
            contentContainerStyle={tw.style(` justify-between`, {
              flexGrow: 1,
            })}
          >


            <View >



              {/* signin page */}


              <AppText
                style={apptw`text-sm self-start text-zinc-400`}>
                Your username could be your email address, phone number or account number
              </AppText>


              <AppTextField
                title="Username"
                control={control}
                errorMessage={errors.userName?.message}
                validationName="userName"
                placeholder="username"
              />

              <AppTextField
                title="Password"
                control={control}
                validationName="password"
                errorMessage={errors.password?.message}
                placeholder="***********"
                isPassword={true}
              />




            </View>


            <View style={apptw`mb-5`}>
              <AppButton
                buttonStyle={apptw`  my-6`}
                text={isButtonLoading ? "Loading..." : "Sign In"}
                onPress={onSubmit}

              />

              <AppText style={apptw`self-center text-zinc-400 text-[4]`}>
                Don't have an account?{' '}

                <PressAppText 
                onPress={navigateToLetsGetStartedScr}
                style={apptw`text-green-500 top-[2]  `}>
                  Get Started
                </PressAppText>

              </AppText>


            </View>
          </ScrollView>
        </>
      </BasicBackButtonLayout>

    </>
  )
}
export default SignInScreen;