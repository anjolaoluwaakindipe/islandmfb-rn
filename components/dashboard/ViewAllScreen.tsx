import React from "react";
import {  View } from "react-native";
import apptw from "../../utils/lib/tailwind";
import AppText from '../shared/Apptext';
import BasicBackButtonLayout from "../layouts/BasicBackButtonLayout";
import TransHistory from "./TransHistory";

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
