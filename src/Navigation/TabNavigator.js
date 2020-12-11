import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginScreen,ProfileScreen,HomeScreen,OrderScreen,AddProductScreen,AllProductScreen} from '../screens/';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Heading from '../components/Heading.js'
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

function Products() {
  return (
    <Top.Navigator   tabBarOptions={{
      activeTintColor:'white',
        inactiveTintColor:'#D3D3D3',
      labelStyle: { fontSize: 14,textTransform: 'none' },
      indicatorStyle: {
        backgroundColor: 'white',
    },
      style: { backgroundColor: '#428bca' ,borderTopWidth:0},
    }}>
      <Top.Screen name="All Products" component={AllProductScreen} />
      <Top.Screen name="Add" component={HomeScreen} />
      <Top.Screen name="Delete" component={HomeScreen} />

    </Top.Navigator>
  );
}

const createAppStack = () => {
  return (
    <Tab.Navigator 
    
    headerStyle={{
      backgroundColor:"red"
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        
        options={{
          tabBarLabel: 'Home',
          headerStyle: {
            backgroundColor: '#e7305b'
         } ,
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
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="briefcase-outline"
              color={color}
              size={size}
            />
          ),
          tabBarBadge: 1,
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

