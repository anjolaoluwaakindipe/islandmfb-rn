import { View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppText from "../../components/shared/Apptext"
import apptw from "../../utils/lib/tailwind"

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes"




const LoanProducts = () => {

    return (
        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-25  bottom-3 text-xl`}>
                    Loan Repayment
                </AppText>
            </View>

        </BasicBackButtonLayout>
    )
}

export default LoanProducts