import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  OrderScreen,
  ProfileScreen,
  AddProduct,
  AllProduct,
  DeleteProduct,
  
} from '../screens';
//import {AddProducts,AddCategory} from '../screens/Products/components';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Heading from '../components/Heading.js'
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();
function ProductCategoriesScreen() {
  return (
    <Top.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 14,textTransform: 'none' },
        activeTintColor:'white',
        inactiveTintColor:'#D3D3D3',
        indicatorStyle:{backgroundColor:"white"},
        // tabStyle: { width: 100 },
        style: {backgroundColor: '#428bca',
},
      }}>
      <Top.Screen name="All Product" component={AllProduct} />
      <Top.Screen name="Add " component={AddProduct} />
      <Top.Screen name="Deleted " component={DeleteProduct} />

      {/* <Tab.Screen name="Messages" component={Messages} /> */}
    </Top.Navigator>
  );
}
const createAppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
          // tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductCategoriesScreen}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="briefcase-outline"
              color={color}
              size={size}
            />
          ),
          // tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="human" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name="test" options={{
    headerShown:false,

      // headerTitleStyle: { alignSelf: 'center' },
      headerStyle : {backgroundColor:"skyblue"}
  }} component={ProfileScreen}></Tab.Screen>
  <Tab.Screen name="AddProduct"  options={{
      headerTitleStyle: { alignSelf: 'center' },
  }} component={AddProduct}></Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default createAppStack;
