import { View, Text,Image, ScrollView } from "react-native";
import SVG from "react-native-svg";
import React, { Children } from "react";
import AppText from "../components/shared/Apptext";
import AppButton from "../components/shared/AppButton";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import AppTextField from "../components/shared/AppTextField";
import  { primCol } from "../utils/lib/colors";
import apptw from "../utils/lib/tailwind";
import companylogo1 from "../assets/svg/companylogo1.svg";

type SignInScreen = NativeStackScreenProps<
    RootStackParamList,
 "SignIn"
>;

const SignInScreen = ({ navigation }: SignInScreen) => {
 const navigateToSignIn = () => {
  navigation.navigate("SignIn");
 }
 return (
  <>
   <BasicBackButtonLayout>
     <ScrollView
                    style={tw`px-6`}
                    contentContainerStyle={tw.style(` justify-between`, {
                        flexGrow: 1,
                    })}
                >
     <View style={tw`flex-1 items-center justify-start px-6`}>
      {/* Logo section */}
      <View>
       <SVG height="10%" width="50%" viewBox="0 0 100 100">
        <Image style={apptw`bg-black`} source={require('../assets/svg/companylogo1')} />
       </SVG>
       <AppText >ISLAND</AppText>
      </View>

      {/* Landing page */}
     <AppText style={apptw`text-xl self-start mt-4 mb-2`} >Username</AppText>
     <AppText style={apptw`text-sm self-start text-zinc-400`}>Your username could be your email address, phone number or account number</AppText>
      <AppTextField placeholder="username"  />
      <AppText style={apptw`self-start`}>Password</AppText>
     <AppTextField placeholder="***********" isPassword={true} />
     </View>
     <View style={apptw`mb-5`}>
      <AppButton buttonStyle={apptw`  my-6`} text="SIGN IN" />
      <AppText style={apptw`self-center text-zinc-400`}>Don't have an account?<AppText style={apptw`text-green-500 `}> Sign Up</AppText></AppText>
     </View>
     </ScrollView>
   </BasicBackButtonLayout>
   
  </>
 )
} 
export default SignInScreen;