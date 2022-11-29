import { ScrollView, View } from "react-native"
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import AppText from "../../components/shared/Apptext"
import apptw from "../../utils/lib/tailwind"

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes"
import NavButton from "../../components/loan/NavButton";
import LoanProduct from "../../components/loan/LoanProduct";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";



type LoanProductsProps = NativeStackScreenProps<RootStackParamList, "LoanProducts">

const LoanProducts = ({ navigation }: LoanProductsProps) => {

    const navigatetoLoanApplication = () => {
        navigation.navigate("LoanApplication")
    }



    return (
        <BasicBackButtonLayout>
            <View >
                <AppText style={apptw`font-bold absolute left-30  bottom-3 text-xl`}>
                    Loan Products
                </AppText>
            </View>

            <ScrollView
                style={apptw`px-5 py-5`}
            >
                <AppText
                    style={apptw`font-bold text-2xl`}
                >
                    Loan Products
                </AppText>
                <AppText
                    style={apptw`text-[3.05]`}
                >
                    We offer different loan products,
                    you can start with low value and progressively grow
                </AppText>

                <View
                    style={apptw`py-5`}
                >
                    <LoanProduct
                        text="Quick Loan"
                        subtext="                  %5 interest rate"
                        buttonStyle={apptw`mt-5`}
                        buttontext="Apply"
                        onPress={navigatetoLoanApplication}
                        iconL={
                            <Ionicons
                                name="cash-outline"
                                size={43}
                                style={tw`mx-auto`}
                                color="#BC4B52"
                            />
                        }
                    />



                    <LoanProduct
                        text="Student Loan"
                        subtext="                  %5 interest rate"
                        buttonStyle={apptw`mt-5`}
                        buttontext="Apply"
                        onPress={navigatetoLoanApplication}
                        iconL={
                            <Ionicons
                                name="cash-outline"
                                size={43}
                                style={tw`mx-auto`}
                                color="#BC4B52"
                            />
                        }
                    />



                    <LoanProduct
                        text="Business Loan"
                        subtext="                  %5 interest rate"
                        buttonStyle={apptw`mt-5`}
                        buttontext="Apply"
                        onPress={navigatetoLoanApplication}
                        iconL={
                            <Ionicons
                                name="cash-outline"
                                size={43}
                                style={tw`mx-auto`}
                                color="#BC4B52"
                            />
                        }
                    />



                    <LoanProduct
                        text="Education Loan"
                        subtext="                  %5 interest rate"
                        buttonStyle={apptw`mt-5`}
                        buttontext="Apply"
                        onPress={navigatetoLoanApplication}
                        iconL={
                            <Ionicons
                                name="cash-outline"
                                size={43}
                                style={tw`mx-auto`}
                                color="#BC4B52"
                            />
                        }
                    />

                </View>


            </ScrollView>

        </BasicBackButtonLayout>
    )
}

export default LoanProducts