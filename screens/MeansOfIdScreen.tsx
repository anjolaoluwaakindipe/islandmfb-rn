import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout"
import AppText from "../components/shared/Apptext"
import PressAppText from "../components/shared/PressAppText"
import apptw from "../utils/lib/tailwind"

import DropdownField from "../components/shared/Dropdown"
import AppTextField from "../components/shared/AppTextField"
import DateInputField from "../components/shared/DateInputField"

const IdOPtions =[
    { value:"jjjf", label:"Driver's license"  },
    { value:"stdfg", label:"Student Id"  },
    { value:"jfgfdj", label: "PVC"  }
]


const MeansOfId = () => {
    return (
        <BasicBackButtonLayout>

           <View>
           <AppText style={apptw`font-bold absolute left-19  bottom-3 text-xl`}>
                Means of Identification
            </AppText>

            <PressAppText style={apptw`text-xl absolute left-80 bottom-3`}   >
                Save
            </PressAppText>

           </View>

            <ScrollView
            style={apptw`px-6`}
            >
                <DropdownField
                data={IdOPtions}
                title='Means of Identification'
                />


                <AppTextField
                title="ID Number"
                keyboardType="number-pad"
                />

                <DateInputField
                title="ID Issue Date"

                />

                <DateInputField
                title="ID Expiry Date"
                />
            </ScrollView>
        </BasicBackButtonLayout>
    )
}



export default MeansOfId