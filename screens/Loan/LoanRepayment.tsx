import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppButton from "../../components/shared/AppButton"
import AppText from "../../components/shared/Apptext"
import AppTextField from "../../components/shared/AppTextField"
import apptw from "../../utils/lib/tailwind"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes"


type LoanRepaymentProps =NativeStackScreenProps<RootStackParamList,"LoanRepayment">





const LoanRepayment = ({navigation}: LoanRepaymentProps   ) => {

const navigatetoLoanRepaymentDet =()=>{
    navigation.navigate("LoanRepaymentDet")
}

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
                <AppTextField
                    placeholder="Qucik Loan"
                    title="Loan Product"
                />

                <AppTextField
                    title="Amount Due"
                />

                <AppTextField
                    title="Amount"
                    keyboardType="number-pad"
                />

                <AppButton
                    text="Next"
                    onPress={navigatetoLoanRepaymentDet}
                    buttonStyle={apptw` mx-auto`}
                />

            </ScrollView>


        </BasicBackButtonLayout>
    )
}


export default LoanRepayment


