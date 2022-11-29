import React from "react";
import { View } from "react-native";
import AppText from "../../components/shared/Apptext";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout";
import apptw from "../../utils/lib/tailwind";
import AppButtonWIcon from "../../components/shared/AppButtonWIcon";

type TransferTypeProps = NativeStackScreenProps<RootStackParamList, "TransferType">

const TransferType = ({ navigation }: TransferTypeProps) => {
     const navigateToTransferScreen = () => {
          navigation.navigate("Transfer")
     };
     return (
          <>
               <BasicBackButtonLayout>
                    <View>
                         <AppText style={apptw` font-bold text-2xl left-30 bottom-9 `}>Transfer Type</AppText>
                    </View>
                    <View style={apptw`mx-5`}>
                         <AppText >Choose Transfer Type</AppText>
                         <AppButtonWIcon
                              iconL={<MaterialIcons name="apartment" color="#BC4B52" size={24} />}
                              text="       To Island MF Account"
                              onPress={navigateToTransferScreen}
                              iconR={
                                   <MaterialIcons
                                        name="keyboard-arrow-right"
                                        color="black"
                                        size={24}
                                   />
                              }
                              buttonStyle={apptw`my-3`}
                         />
                         <AppButtonWIcon
                              iconL={<MaterialIcons name="account-balance" color="#BC4B52" size={24} />}
                              text="        To Other Bank Account"
                              onPress={navigateToTransferScreen}
                              iconR={
                                   <MaterialIcons
                                        name="keyboard-arrow-right"
                                        color="black"
                                        size={24}
                                   />
                              }
                              buttonStyle={apptw`my-3`}
                         />
                         <AppButtonWIcon
                              iconL={<MaterialIcons name="autorenew" color="#BC4B52" size={24} />}
                              text="        Own Account Transfer "
                              onPress={navigateToTransferScreen}
                              iconR={
                                   <MaterialIcons
                                        name="keyboard-arrow-right"
                                        color="black"
                                        size={24}
                                   />
                              }
                              buttonStyle={apptw`my-3`}
                         />
                    </View>
               </BasicBackButtonLayout>
          </>
     );
};
export default TransferType;