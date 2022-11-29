import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppButton from "../../components/shared/AppButton"
import AppText from "../../components/shared/Apptext"
import AppTextField from "../../components/shared/AppTextField"
import apptw from "../../utils/lib/tailwind"






const LinkBvn = () => {
    return (
        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-35  bottom-3 text-xl`}>
                    Link Bvn
                </AppText>
            </View>


            <ScrollView
                style={apptw`px-5 py-5`}
            >
                <AppTextField
                    title="BVN"
                    keyboardType="number-pad"
                />


                <AppTextField
                    title="Phone Number"
                    keyboardType="phone-pad"
                />

                <AppTextField
                    title="Email"
                    keyboardType="email-address"
                />


                <AppButton
                    text="LINK BVN"
                />
            </ScrollView>



        </BasicBackButtonLayout>
    )
}



export default LinkBvn