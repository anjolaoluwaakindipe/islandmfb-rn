import { View } from "react-native"
import BasicBackButtonLayout from "../components/layouts/BasicBackButtonLayout"
import AppButton from "../components/shared/AppButton"
import AppButtonWIcon from "../components/shared/AppButtonWIcon"
import AppText from "../components/shared/Apptext"
import DropdownField from "../components/shared/Dropdown"
import PressAppText from "../components/shared/PressAppText"
import apptw from "../utils/lib/tailwind"
import { Feather } from '@expo/vector-icons';

const ProofOptions = [
    { value: "jvn", label: "USER STYDD" },
    { value: "jvn", label: "USER ST" },
    { value: "jvn", label: "US STD" },
]




const ProofOfAddress = () => {
    return (
        <BasicBackButtonLayout>
            <View>
                <AppText style={apptw`font-bold absolute left-19  bottom-3 text-xl`}>
                    Proof Of Address
                </AppText>

                <PressAppText style={apptw`text-xl absolute left-80 bottom-3`}   >
                    Save
                </PressAppText>

            </View>

            <View
                style={apptw`px-5 py-10`}
            >
                <DropdownField
                    data={ProofOptions}
                    title="Proof Of Address"

                />

                <AppButtonWIcon
                    text="  Upload"
                    buttonStyle={apptw`bg-primCol`}
                    textStyle={apptw`text-center text-white`}
                    iconL={
                        <Feather name="upload"
                            size={24}
                            color="white" />
                    }
                />
            </View>



        </BasicBackButtonLayout>
    )
}



export default ProofOfAddress