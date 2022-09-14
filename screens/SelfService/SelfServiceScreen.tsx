import { MaterialIcons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppButtonWIcon from "../../components/shared/AppButtonWIcon"
import AppText from "../../components/shared/Apptext"
import apptw from "../../utils/lib/tailwind"
import { RootStackParamList } from "../allroutes"



type SelfServiceProps = NativeStackScreenProps<RootStackParamList, "SelfService">


const SelfService = ({ navigation }: SelfServiceProps) => {


    const navigatetoLinkBvn = () => {
        navigation.navigate("LinkBvn")
    }
    const navigatetoStatementofAccount = () => {
        navigation.navigate("StatementofAccount")
    }
    return (
        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-30  bottom-3 text-xl`}>
                    Self Service
                </AppText>
            </View>

            <ScrollView
                style={apptw`px-5 py-10`}
            >
                <AppButtonWIcon
                    text="Generate Statement of Account   "
                    textStyle={apptw`text-[3]`}
                    buttonStyle={apptw`mb-5`}
                    onPress={navigatetoStatementofAccount}
                    iconR={
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            color="black"
                            // style={apptw`px-20 bg-red-500`}
                            size={24}
                        />
                    }
                />


                <AppButtonWIcon
                    text="Link BVN    "
                    textStyle={apptw`text-[3]`}
                    onPress={navigatetoLinkBvn}
                    iconR={
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            color="black"
                            // style={apptw`px-20 bg-red-500`}
                            size={24}
                        />
                    }
                />
            </ScrollView>





        </BasicBackButtonLayout>
    )

}

export default SelfService