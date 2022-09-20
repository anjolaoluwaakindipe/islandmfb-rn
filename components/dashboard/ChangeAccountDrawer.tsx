import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { View } from "react-native";
import AppTextField from "../shared/AppTextField";
import AppText from "../shared/Apptext";
import apptw from "../../utils/lib/tailwind";
import tw from "twrnc";


const Drawer = createDrawerNavigator();
type ChangeAccountprop = {
 accountType: string;
 accountNumber: Number;
 amount: string;
}


 function changeAccountDrawer(props: ChangeAccountprop) {
 return (
  <Drawer.Navigator >
   <DrawerContent >
    <View
     style={apptw`bg-textField px-2 py-1 mt-2 mb-5`}
    >
     <AppText
      style={tw`text-[3]`}
     >
      Current Account
     </AppText>
     <View
      style={tw`flex-row justify-between`}
     >
      <AppText
       style={tw`text-[2.5]`}
      >
       2213456789
      </AppText>

      <AppText
       style={tw`text-[3] text-green-500`}
      >
       40,000,000
      </AppText>
     </View>
     <AppText
      style={tw`text-[3]`}
     >
      Available Balance
     </AppText>
    </View>
    <View
     style={apptw`bg-textField px-2 py-1 mt-2 mb-5`}
    >
     <AppText
      style={tw`text-[3]`}
     >
      Savings Account
     </AppText>
     <View
      style={tw`flex-row justify-between`}
     >
      <AppText
       style={tw`text-[2.5]`}
      >
       211023567
      </AppText>

      <AppText
       style={tw`text-[3] text-green-500`}
      >
       20,000
      </AppText>
     </View>
     <AppText
      style={tw`text-[3]`}
     >
      Available Balance
     </AppText>
    </View>
   </DrawerContent>

  </Drawer.Navigator>
 );
}
export default changeAccountDrawer;