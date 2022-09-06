import React, { useState } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import tw from "twrnc";
import { Style } from "twrnc/dist/esm/types";
import apptw from "../../utils/lib/tailwind";
import AppText from './Apptext';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


type DateInputFieldProps = {
    title?: string;
    buttonStyle?: Style;
    textStyle?: Style;
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
    errorMessage?: string;
    validationName?: string;
    control?: any;



};

const DateInputField = (props: DateInputFieldProps) => {
    const [date, setDate] = useState(new Date(1598051730000))
    const [show, setShow] = useState(false);


    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: "date",
            is24Hour: false,

        });
    };

    const ShowDatepicker = () => {
        showMode('date')
    }
    return (
        <View>

            <AppText style={apptw`text-base`} fontFamily="poppins-semibd">
                {props.title}
            </AppText>
            <Pressable
                style={({ pressed }) =>
                    apptw.style(
                        `${pressed ? "bg-opacity-75" : "bg-opacity-100"
                        } bg-textField w-full py-4 rounded-lg`,
                        props?.buttonStyle
                    )
                }
                onPress={ShowDatepicker}


            >

                <AppText
                    style={tw.style(
                        `text-base px-5 text-black`,
                        props?.textStyle

                    )}
                    fontFamily="poppins"
                >

                    {/* {date.toDateString()} */}
                    {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
                    



                </AppText>



            </Pressable>
            <ErrorMessage>{props.errorMessage}</ErrorMessage>

        </View>



    );
};







// error message
const ErrorMessage = (props: { children: React.ReactNode }) => (
    <AppText style={tw`text-xs text-red-700 mt-1`}>{props?.children}</AppText>
);


export default DateInputField;
