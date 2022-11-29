import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppText from "../../components/shared/Apptext"
import PressAppText from "../../components/shared/PressAppText"
import apptw from "../../utils/lib/tailwind"
import tw from "twrnc";
import AppButtonWIcon from "../../components/shared/AppButtonWIcon"
import NavButton from "../../components/loan/NavButton"
import { Ionicons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes"
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { authSelector } from "../../state/authSlice";

type LoanDashProps =NativeStackScreenProps<RootStackParamList,"LoanDash">


const LoanDash = ({navigation}: LoanDashProps) => {

    const { user } = useSelector(authSelector)

    let fName = (user?.name)?.split(/\s+/)

const navigatetoLoanTransactions=()=>{
    navigation.navigate("LoanTransaction")
}

const navigatetoLoanRepayment=()=>{
    navigation.navigate("LoanRepayment")
}

const navigatetoLoanProducts=()=>{
    navigation.navigate("LoanProducts")
}

    return (
        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-40  bottom-3 text-xl`}>
                    Loan
                </AppText>
            </View>

            <ScrollView
                style={apptw`px-5`}
            >



                <View
                    style={tw`flex-row justify-between mt-5`}
                >
                    <AppText
                        style={tw``}
                    >
                        HI {fName?.[0]}
                    </AppText>



                </View>


                <View
                    style={apptw`bg-textField px-5 py-5 pl-5 mt-5 `}
                >



                    <AppText
                        style={apptw`text-primCol text-4xl`}
                    >
                        N 234,45455
                    </AppText>
                    <AppText>
                        Loan Balance
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

                <AppText
                    style={tw`mt-5 mb-5`}
                >
                    Quick Actions
                </AppText>



                <NavButton
                    subtext="                  see what loans you qualify for"
                    text="Apply for Loan"
                    onPress={navigatetoLoanProducts}
                    iconL={
                        <Ionicons
                            name="cash-outline"
                            size={43}
                            style={tw`mx-auto`}
                            color="#BC4B52"
                        />
                    }
                />

                <NavButton
                    subtext="                 repay your loans on time to access more "
                    text="Loan Repayment"
                    buttonStyle={apptw`mt-5 py-10`}
                    onPress={navigatetoLoanRepayment}
                    subtextStyle={tw`text-blue-500 px-10`}
                    iconL={
                        <MaterialCommunityIcons
                            name="cash-refund"
                            size={43}
                            style={tw`mx-auto`}
                            color="#BC4B52"
                        />
                    }
                />

                <NavButton
                    subtext="                 checkout your loan(s) transaction"
                    text="Loan Transactions"
                    buttonStyle={apptw`mt-5`}
                    onPress={navigatetoLoanTransactions}
                    iconL={
                        <Entypo
                            name="back-in-time"
                            size={43}
                            style={tw`mx-auto`}
                            color="#BC4B52"
                        />
                    }
                />

            </ScrollView>











        </BasicBackButtonLayout>
    )
}


export default LoanDash