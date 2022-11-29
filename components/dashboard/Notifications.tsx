import { View } from "react-native";
import AppText from "../shared/Apptext";
import apptw from "../../utils/lib/tailwind";
import BasicBackButtonLayout from "../layouts/BasicBackButtonLayout";


const Notifications = () => {
 return (
  <BasicBackButtonLayout>
   <View >
    <AppText style={apptw`left-32 bottom-10 text-2xl`}>Notifications</AppText>
   </View>
   <View style={apptw`mx-5`}>
    <AppText>You have no new notifications.</AppText>
   </View>
  </BasicBackButtonLayout>
 );
};
export default Notifications;