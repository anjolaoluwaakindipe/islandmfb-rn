import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout"
import AppText from "../components/shared/Apptext"
import AppTextField from "../components/shared/AppTextField"
import DropdownField from "../components/shared/Dropdown"
import PressAppText from "../components/shared/PressAppText"
import apptw from "../utils/lib/tailwind"



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

const relationshipOptions = [
    { value: '', label: "Father" },
    { value: "", label: "Mother" },
    { value: "", label: "Brother" }
]
const EditNextofKin = () => {

    return (
        <BasicBackButtonLayout>
            <View>
                <AppText style={apptw`font-bold absolute left-19  bottom-3 text-xl`}>
                    Next Of Kin Information
                </AppText>

                <PressAppText style={apptw`text-xl absolute left-80 bottom-3`}   >
                    Save
                </PressAppText>

            </View>



            <ScrollView

            >
                <View
                    style={apptw`px-5`}
                >


                    <AppTextField
                        title="Surname"

                    />

                    <AppTextField
                        title="Firstname"

                    />

                    <AppTextField
                        title="Middlename"

                    />
                    <AppTextField
                        title="Address"

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
                        keyboardType="phone-pad"
                        title="PhoneNumber"
                    />

                    <DropdownField
                        data={relationshipOptions}
                        title="Relationship"
                    />
                </View>


            </ScrollView>




        </BasicBackButtonLayout>
    )

}




export default EditNextofKin