import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppText from "../../components/shared/Apptext"
import tw from "twrnc";
import { View } from "react-native";
import apptw from "../../utils/lib/tailwind";
import { ScrollView } from "react-native-gesture-handler";
import AppButtonWIcon from "../../components/shared/AppButtonWIcon";
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";
import { authSelector } from "../../state/authSlice";
import { useSelector } from "react-redux";


type ProfileProps = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfileScreen = ({navigation}: ProfileProps) => {


    const { user } = useSelector(authSelector)



    let fName = (user?.name)?.split(/\s+/)

    const navigatetoEditPersonalInfo =()=> {
    navigation.navigate("EditPersonalInfo")
}

const navigatetoEditContactDetails =()=>{
    navigation.navigate("EditContactDetails")
}

const navigatetoMeansOfId =()=>{
    navigation.navigate("MeansOfId")
}

const navigatetoProofOfAddress=()=>{
    navigation.navigate("ProofOfAddress")
}

const navigatetoEditEmployment =()=>{
    navigation.navigate("EditEmployment")
}


const navigatetoEditNextofKin =()=>{
    navigation.navigate("EditNextofKin")
}

    return (
        <BasicBackButtonLayout>

            <View >
                <AppText style={apptw`font-bold absolute left-38 bottom-1 text-2xl`}> Profile</AppText>
            </View>
            <ScrollView
                style={apptw`px-4`}
                contentContainerStyle={tw.style(`justify-between`, {
                    flexGrow: 1
                })}
            >
                <View
                    style={apptw`mx-auto pt-5`}
                >
                    <View
                    style={apptw`bg-transparent rounded-full p-10`}
                    >
                    <Ionicons name="md-person-outline"
                        size={50}
                        color="black" />
                    </View>
                </View>


                <View
                    style={tw`mx-auto`}
                >
                    <AppText
                        style={apptw`font-bold text-2xl text-center`}
                    >
                       {fName?.[0]} {fName?.[2]}

                    </AppText>
                    <AppText
                        style={apptw`text-center text-lg`}
                    >BVN:22234985024585</AppText>

                </View>

                <View
                    style={tw``}
                >

                    <AppButtonWIcon
                        text="Personal Information           "
                        textStyle={apptw`text-[4]`}
                        buttonStyle={apptw`mb-5`}
                        onPress={navigatetoEditPersonalInfo}
                        iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                        }
                    />




                    <AppButtonWIcon
                        text="Contact Details           "
                        textStyle={apptw`text-[4]`}
                        buttonStyle={apptw`mb-5`}
                        onPress={navigatetoEditContactDetails}
                        iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                    }
                    />


                    <AppButtonWIcon
                        text="Means of Identification       "
                        textStyle={apptw`text-[4]`}
                        buttonStyle={apptw`mb-5`}
                        onPress={navigatetoMeansOfId}
                        iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                    }
                    />




                    <AppButtonWIcon
                        text="Proof of Address           "
                        textStyle={apptw`text-[4]`}
                        buttonStyle={apptw`mb-5`}
                        onPress={navigatetoProofOfAddress}
                        iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                    }
                    />

                    <AppButtonWIcon
                        text="Employment Details           "
                        textStyle={apptw`text-[4]`}
                        buttonStyle={apptw`mb-5`}
                        onPress={navigatetoEditEmployment}
                        iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                    }
                    />

                    <AppButtonWIcon
                        text="Next of kin Details           "
                        textStyle={apptw`text-[4]`}
                        buttonStyle={apptw`mb-5`}
                        onPress={navigatetoEditNextofKin}
                        iconR={
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="black"
                                size={24}
                            />
                    }
                    />

                </View>










            </ScrollView>
        </BasicBackButtonLayout>
    )

}



export default ProfileScreen