import React, {useState} from 'react';
import { View } from "react-native";

const Checkbox = ({ label }: { label: string }) => {
 const [checked, setChecked] = useState(false);

 
 return (
  <View>
   <label>
    <input type={'checkbox'} checked={checked} onChange={() => setChecked(!checked)} />
    <span>{label }</span>
   </label>
  </View>
 );
};



export default Checkbox;