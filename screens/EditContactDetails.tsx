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
import PressAppText from "../components/shared/PressAppText";





type EditContactDetailsProps = NativeStackScreenProps<RootStackParamList, "EditContactDetails">;

const EditContactDetails = () => {
    return (

        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-19  bottom-3 text-xl`}>
                    Contact Details
                </AppText>

                <PressAppText style={apptw`text-xl absolute left-80 bottom-3`}   >
                    Save
                </PressAppText>
            </View>


            <ScrollView
                style={tw`px-6`}
            >
                <AppTextField
                    title="Street Number"
                   
                />

                <AppTextField
                    title="Street Name"
                />
                <AppTextField
                    title="City/Town"
                />
                <AppTextField
                    title="Nearest Bus-Stop"
                />

                <AppTextField
                    title="Phone Number"
                    keyboardType="phone-pad"
                />

                <AppTextField
                    title="Email"
                    keyboardType="email-address"
                />

            </ScrollView>
        </BasicBackButtonLayout>
    )

}

export default EditContactDetails
















