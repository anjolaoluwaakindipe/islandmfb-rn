import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { View } from "react-native";
import AppText from "../shared/Apptext";
import apptw from "../../utils/lib/tailwind";

const Drawer = createDrawerNavigator();
 function Notifications( props:any) {
 return (
  <Drawer.Navigator >
   <DrawerContent {...props} >
    <View>
     <AppText>You have no new notifications.</AppText>
    </View>
   </DrawerContent>
  </Drawer.Navigator>
 );
};
export default Notifications;