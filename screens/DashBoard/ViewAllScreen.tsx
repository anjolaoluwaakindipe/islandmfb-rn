import React from "react";
import {  View } from "react-native";
import apptw from "../../utils/lib/tailwind";
import AppText from '../../components/shared/Apptext';
import BasicBackButtonLayout from "../../components/layouts/BasicBackButtonLayout"
import TransHistory from "../../components/dashboard/TransHistory";

const ViewAllScreen = () => {
 return (
  <BasicBackButtonLayout>
   <View>
       <AppText style={apptw`left-28 bottom-10 text-2xl`}>Transaction History</AppText>
   </View>
   <View style={apptw`mx-5`}>
    <TransHistory amount="N 500000002"
     date="Tuesday,12th july,2021 "
     details="TRF/FRM Akinloluwa Adeleye Gbenga "
     name="Akinjoke Gboluga" />
    <TransHistory amount="N 500000002"
     date="Tuesday,12th july,2021 "
     details="TRF/FRM Akinloluwa Adeleye Gbenga "
     name="Akinjoke Gboluga" />
    <TransHistory amount="N 500000002"
     date="Tuesday,12th july,2021 "
     details="TRF/FRM Akinloluwa Adeleye Gbenga "
     name="Akinjoke Gboluga" />
    <TransHistory amount="N 500000002"
     date="Tuesday,12th july,2021 "
     details="TRF/FRM Akinloluwa Adeleye Gbenga "
     name="Akinjoke Gboluga" />
   </View>
  </BasicBackButtonLayout>
 )
}
export default ViewAllScreen;
