import { View, Text, TouchableWithoutFeedback, Platform, Pressable, Keyboard } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';

type EmptyLayoutProps = {
    children : React.ReactNode
}

const EmptyLayout = ({children}:EmptyLayoutProps) => {
   
  return (
      <TouchableWithoutFeedback
          onPress={() => (Platform.OS != "web" ? Keyboard.dismiss() : null)}
      >
          <SafeAreaView
              style={tw`bg-white  flex-1 shadow-md`}
              edges={["top", "left", "right"]}
          >
              

              {children}
          </SafeAreaView>
      </TouchableWithoutFeedback>
  );
}

export default EmptyLayout