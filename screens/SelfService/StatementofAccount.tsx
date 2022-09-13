import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppButton from "../../components/shared/AppButton"
import AppText from "../../components/shared/Apptext"
import AppTextField from "../../components/shared/AppTextField"
import DateInputField from "../../components/shared/DateInputField"
import apptw from "../../utils/lib/tailwind"







const StatementofAccount = () => {
    return (
        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-23 bottom-3 text-xl`}>
                    Statement of Account
                </AppText>
            </View>



            <ScrollView
                style={apptw`px-5 py-5`}
            >
                <DateInputField
                    title="Start Date"
                />

                <DateInputField
                    title="End Date"
                />


                <AppTextField
                    title="Email"
                    keyboardType="email-address"
                />

                <AppButton
                    text="SEND"
                />

            </ScrollView>

        </BasicBackButtonLayout>
    )
}



export default StatementofAccount