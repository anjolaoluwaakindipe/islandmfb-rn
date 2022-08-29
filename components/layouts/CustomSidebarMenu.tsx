// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
 
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ScrollView,
  ScrollViewProps,
} from 'react-native';
 
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { DrawerNavigationHelpers, DrawerDescriptorMap } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
 
const CustomSidebarMenu = (props: (JSX.IntrinsicAttributes & ScrollViewProps & { children: React.ReactNode; } & React.RefAttributes<ScrollView>) | (JSX.IntrinsicAttributes & { state: DrawerNavigationState<ParamListBase>; navigation: DrawerNavigationHelpers; descriptors: DrawerDescriptorMap; })) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
 
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
 
export default CustomSidebarMenu;
