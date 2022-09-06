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


const titleOptions = [
    { value: 'Mr', label: "Mr" },
    { value: 'Mrs', label: "Mrs" },
    { value: 'Chief', label: "Chief" },
    { value: 'General', label: 'General' }
]
const genderOptions = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" }
]

const maritalStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: "married", label: 'Married' },
    { value: "divorced", label: "Divorced" }
]

const nationalityOptions = [
    { value: 'ngn', label: "Nigerian" },
    { value: 'gh', label: "Ghanian" },
    { value: 'rsa', label: "South Africa" }
]


const stateOriginOptions = [
    { value: 'lag', label: "Lagos" },
    { value: 'ond', label: "Ondo" },
    { value: 'ekt', label: "Ekiti" },

]

const lgaOptions = [
    { value: "this", label: "north" },
    { value: "thiss", label: "south" },
    { value: "that", label: "east" },
    { value: "when", label: "west" }
]



type EditPersonalInfoProps = NativeStackScreenProps<RootStackParamList, "EditPersonalInfo">;

const EditPersonalInfoScreen = () => {
    return (

        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-19  bottom-3 text-xl`}>
                    Personal Information
                </AppText>

                <PressAppText style={apptw`text-xl absolute left-80 bottom-3`}   >
                    Save
                </PressAppText>
            </View>


            <ScrollView
                style={tw`px-6`}
            >
                <DropdownField
                    data={titleOptions}
                    title="Title"
                />
                <AppTextField
                    title="First Name"

                />
                <AppTextField
                    title="Middle Name"
                />
                <AppTextField
                    title="Last Name"
                />

                <DropdownField
                    data={genderOptions}
                    title="Gender"
                />
                <DropdownField
                    data={maritalStatusOptions}
                    title="MaritalStatus"
                />
                <DateInputField
                    title="Date of Birth"
                />

                <AppTextField
                    title="Mothers Maiden Name"
                />

                <DropdownField
                    title="Nationality"
                    data={nationalityOptions}
                />

                <DropdownField
                    title="State of Origin"
                    data={stateOriginOptions}
                />

                <DropdownField
                    title="LGA"
                    data={lgaOptions}
                />
                <AppTextField
                    title="Tax Identification Number"
                />

            </ScrollView>
        </BasicBackButtonLayout>
    )

}

export default EditPersonalInfoScreen
















