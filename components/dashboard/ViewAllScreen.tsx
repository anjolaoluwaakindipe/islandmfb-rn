import React, { useState, useEffect } from "react";
import { View } from "react-native";
import apptw from "../../utils/lib/tailwind";
import tw from "twrnc";
import AppText from '../shared/Apptext';
import BasicBackButtonLayout from "../layouts/BasicBackButtonLayout";
import { useSelector } from "react-redux";
import { authSelector } from "../../state/authSlice";
import TransHistory from "../dashboard/TransHistory";

type ViewAllTransacts = {
  id: number,
  channel: string,
  postDate: string,
  narrative: string,
  reference: string,
  valueDate: string,
  ccy: string,
  ccyName: string | null,
  amount: number,
  status: string | null,
  ownNarrative: string | null,
  category: string | null,
  subCategory: string | null,
  tags: string | null
}

// type AllTransactsProps = {
//   date: string | any;
//   amount: string | any;
//   details: string;
//   name: string | null
// }



const ViewAllScreen = () => {
  const { user } = useSelector(authSelector);
  const [fullTransActs, setFullTransActs] = useState<ViewAllTransacts[]>([]);



  useEffect(() => {
    const getFullTrans = async () => {

      // const AccNo = user.accountNo;
      // const FromDate = "19500201";
      // const ToDate = "20220831";
      // const Page = 0;
      // const size = 2;
      // const sort = "descending"
      const response = await fetch("http://api.issl.ng:7777/ibank/api/v1/getAccountTransactionsPaged?accountno=1000021&fromdate=19500201&todate=20220831&page=0&size=2&sort=descending", { method: "GET" });
      try {
        const responseJson = await response.json();
        setFullTransActs(responseJson);
      
      }
      catch (err) {
        console.error(err);
      }

    };

    getFullTrans();
  }, []);
  return (
    <BasicBackButtonLayout>
      <AppText style={apptw`font-bold text-2xl left-22 bottom-8`}>Transaction History</AppText>
      <View style={apptw`mx-5`}
      >
        {/* {fullTransActs.map((fullTransAct) => (
          <AppText>{fullTransAct.narrative}</AppText>
        ))} */}


        <TransHistory amount={"30"} date={"2003-01-01"} details={"TRANS. TO DORMANT A/C"} name={user.name} />
        <TransHistory amount={"40"} date={"2003-10-01"} details={"TRANS. TO DORMANT A/C"} name={user.name} />
        <TransHistory amount={"90"} date={"2003-01-05"} details={"TRANS. TO DORMANT A/C"} name={user.name} />
        <TransHistory amount={"30"} date={"2003-05-01"} details={"TRANS. TO DORMANT A/C"} name={user.name} />
        <TransHistory amount={"0.74"} date={"2003-01-01"} details={"TRANS. TO DORMANT A/C"} name={user.name} />
        
      </View>

    </BasicBackButtonLayout>

  )



  console.log("SET FULL TRANSACTSSSSSS" + setFullTransActs)

};
export default ViewAllScreen;


