import { View, Text, Image, ScrollView } from "react-native";
import SVG from "react-native-svg";
import React, { Children, useState } from "react";
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
import { loginUser,   } from "../state/authSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../state/store"
import * as SecureStore from 'expo-secure-store';

import {SecureStorage} from "../services/Singleton/secureStorage"


type SignInScreen = NativeStackScreenProps<
  RootStackParamList,
  "SignIn"
>;






const SignInScreen = ({ navigation }: SignInScreen) => {


  const navigatetoDashBoard = () => {
    navigation.navigate("DashBoard")
  }

  const [isButtonLoading, setButtonLoading] = useState(false)
  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<loginwithEmailFormType>({
    resolver: zodResolver(loginwithEmailSchema),
  })




  const onSubmit = handleSubmit(async (data) => {
    setButtonLoading(true)
    await dispatch(
      loginUser({ userName: data.userName, password: data.password })
    );

    
    navigatetoDashBoard();

    setButtonLoading(false)
  })

  return (
    <>
      <BasicBackButtonLayout>

<>

        {/* Logo section */}

        <View>
          <Companylogo1

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

            <AppText style={apptw`self-center text-zinc-400`}>
              Don't have an account?

              <AppText style={apptw`text-green-500 `}>
                Sign Up
              </AppText>

            </AppText>


          </View>
        </ScrollView>
        </>
      </BasicBackButtonLayout>

    </>
  )
}
export default SignInScreen;