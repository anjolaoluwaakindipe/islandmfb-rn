import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppText from "../../components/shared/Apptext"
import AppTextField from "../../components/shared/AppTextField"
import DropdownField from "../../components/shared/Dropdown"
import PressAppText from "../../components/shared/PressAppText"
import apptw from "../../utils/lib/tailwind"

const EmploymentOptions = [
    { value: "un", label: "Unemployed" },
    { value: "se", label: "Self-Employed" },
]

const nationalityOptions = [
    { value: 'ngn', label: "Nigerian" },
    { value: 'gh', label: "Ghanian" },
    { value: 'rsa', label: "South Africa" }
]

const stateOptions = [
    { value: 'lag', label: "Lagos" },
    { value: 'ond', label: "Ondo" },
    { value: 'ekt', label: "Ekiti" },
]

const businessOptions = [
    { value: 'ekke', label: "Information Technology" },
    { value: 'ond', label: "Education" },
    { value: 'ekt', label: "Construction" },
]

const EditEmployment = () => {

    return (
        <BasicBackButtonLayout>
            <View>
                <AppText style={apptw`font-bold absolute left-19  bottom-3 text-xl`}>
                    Employment Details
                </AppText>

                <PressAppText style={apptw`text-xl absolute left-80 bottom-3`}   >
                    Save
                </PressAppText>

            </View>


         <ScrollView>
            <View
            style={apptw`px-5 py-5`}
            >
<DropdownField
                data={EmploymentOptions}
                title="Employment Status"
            />

            <AppTextField
                title="Employers Name"
            />
            <AppTextField
                title="Employers Address"
            />

            <DropdownField
                title="Country"
                data={nationalityOptions}
            />

            <DropdownField
                data={stateOptions}
                title="State"
            />

            <DropdownField
                data={stateOptions}
                title="City"
            />

            <DropdownField
                data={businessOptions}
                title="Business Type"
            />

            <AppTextField
                title="Phone Number"
                keyboardType="phone-pad"
            />

            <AppTextField
                title="Email "
                keyboardType="email-address"
            />
            </View>
         
         </ScrollView>

        </BasicBackButtonLayout>
    )

}

export default EditEmployment