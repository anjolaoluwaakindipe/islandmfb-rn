import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppButton from "../../components/shared/AppButton"
import AppText from "../../components/shared/Apptext"
import AppTextField from "../../components/shared/AppTextField"
import apptw from "../../utils/lib/tailwind"





const LoanApplication = () => {
    return (
        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-35  bottom-3 text-xl`}>
                    Quick Loan
                </AppText>
            </View>




            <ScrollView
                style={apptw`px-5`}
            >
                <AppTextField
                    title="Amount"
                    keyboardType="number-pad"
                />

                <AppTextField
                    title="Tenor"
                />
                <AppTextField
                    title="Purpose"
                />

                <AppTextField
                    title="Interest"
                />

                <AppTextField
                    title="Total Due"
                />

                <AppButton
                text="Submit"
                />
            </ScrollView>
        </BasicBackButtonLayout>
    )

}



export default LoanApplication