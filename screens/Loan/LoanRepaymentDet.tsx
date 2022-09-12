import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppText from "../../components/shared/Apptext"
import apptw from "../../utils/lib/tailwind"

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes"
import AppButton from "../../components/shared/AppButton";
import AppTextField from "../../components/shared/AppTextField";
import SwitchAccount from "../../components/loan/SwitchAccount";


type LoanRepaymentDetProps = NativeStackScreenProps<RootStackParamList, "LoanRepaymentDet">


const LoanRepaymentDet = () => {

    return (
        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-25  bottom-3 text-xl`}>
                    Loan Repayment
                </AppText>
            </View>


            <ScrollView
                style={apptw`px-5 mt-5`}
            >

                <View
                    style={apptw`mb-5`}
                >

                    <AppText
                        style={apptw`font-bold`}
                    >
                        Switch Account
                    </AppText>

                    <SwitchAccount
                        text="Savings Account"
                        subtext="N323434,414"
                        accountText="#4456455250005"
                    />
                </View>




                <AppTextField
                    title="Pin"
                    keyboardType="number-pad"
                    isPassword={true}
                />

                <AppButton
                    text="Pay"

                    buttonStyle={apptw`mt- mx-auto`}
                />

            </ScrollView>

        </BasicBackButtonLayout>
    )
}


export default LoanRepaymentDet