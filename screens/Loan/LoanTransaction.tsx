import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppText from "../../components/shared/Apptext"
import PressAppText from "../../components/shared/PressAppText"
import apptw from "../../utils/lib/tailwind"
import tw from "twrnc";
import AppButtonWIcon from "../../components/shared/AppButtonWIcon"
import NavButton from "../../components/loan/NavButton"
import { Ionicons } from "@expo/vector-icons"





const LoanTransaction = () => {
    return (
        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-40  bottom-3 text-xl`}>
                    Loan Transactions
                </AppText>
            </View>

            <ScrollView
                style={apptw`px-5`}
            >




                <View
                    style={apptw`bg-textField px-5 py-5 pl-5 mt-5 `}
                >



                    <AppText
                        style={apptw`text-primCol text-4xl`}
                    >
                        N 234,45455
                    </AppText>



                    <View
                        style={tw`flex-row justify-between mx-auto`}
                    >
                        <AppText>
                            Loan Balance
                        </AppText>

                        <AppText>
                            Quick Loan
                        </AppText>


                    </View>

                    <AppText
                        style={apptw` text-[3]`}
                    >
                        Date Issued {'   '}
                        <AppText
                            style={apptw` text-[3]`}
                        >
                            dd//mm/yyyy
                        </AppText>
                    </AppText>



                    <AppText
                        style={apptw` text-[3]`}
                    >
                        Next Payment Date {'   '}
                        <AppText
                            style={apptw` text-[3]`}
                        >
                            dd//mm/yyyy
                        </AppText>
                    </AppText>


                </View>



            </ScrollView>

        </BasicBackButtonLayout>
    )
}


export default LoanTransaction