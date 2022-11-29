import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AppText from './Apptext';
import tw from "twrnc";
import apptw from '../../utils/lib/tailwind';



type DropdownFieldProps = {

    data: (string | { label: string; value: string })[];
    errorMessage?: string;
    title: string
    value?: any | undefined
    onChange?:any|undefined
}

const DropdownField = (props: DropdownFieldProps) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.container}>
            <AppText style={apptw`text-base`} fontFamily="poppins-semibd">
                {props.title}
            </AppText>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'gray' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={props.data}

                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : ' '}

                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                
            />

            <ErrorMessage>{props.errorMessage}</ErrorMessage>

        </View>
    );
};

export default DropdownField;





// error message
const ErrorMessage = (props: { children: React.ReactNode }) => (
    <AppText style={tw`text-xs text-red-700 mt-1`}>{props?.children}</AppText>
);







const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding: 1,
    },
    dropdown: {
        height: 50,
        borderColor: '#F1F1F1',
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor:'#F1F1F1',
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor:'#F1F1F1',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});