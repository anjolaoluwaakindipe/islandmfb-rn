import { View } from "react-native";
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout";
import AppText from "../components/shared/Apptext";
import apptw from "../utils/lib/tailwind";
import DropdownField from "../components/shared/Dropdown";
import { ScrollView } from "react-native-gesture-handler";
import AppTextField from "../components/shared/AppTextField";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./allroutes";
import DateInputField from "../components/shared/DateInputField";





type EditContactDetailsProps = NativeStackScreenProps<RootStackParamList, "EditContactDetails">;

const EditContactDetails = () => {
    return (

        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-19  bottom-3 text-xl`}>
                    Personal Information
                </AppText>

                <AppText style={apptw`text-xl`}   >
                    Save
                </AppText>
            </View>


            <ScrollView
                style={tw`px-6`}
            >
                <AppTextField
                title="Street Number"
                keyboardType="number-pad"
                />

            </ScrollView>
        </BasicBackButtonLayout>
    )

}

export default EditContactDetails
















