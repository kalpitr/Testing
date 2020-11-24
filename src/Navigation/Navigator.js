import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/Login.js';
import SignUpScreen from '../screens/SignUp.js';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Heading from '../components/Heading.js';
import createAppStack from './TabNavigator.js';
import AddProduct from '../screens/AddProducts.js';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

var isSignedIn = true;
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Orders':
      return 'Orders';
    case 'Products':
      return 'Products';
    case 'Profile':
      return 'My profile';
  }
}
const Navigator = () => {
  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={createAppStack}
            options={({route}) => ({
              headerTitle: getHeaderTitle(route),
              headerShown: true,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            })}
          />

          <Stack.Screen
            name="AddProduct"
            component={AddProduct}
            options={{
              headerTitle: <Heading>Add Product</Heading>,
              headerShown: true,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{
              tabBarVisible: false,
            }}
            // options={{
            //   tabBarLabel: 'Sign In',
            //   tabBarIcon: ({color, size}) => (
            //     <MaterialCommunityIcons name="home" color={color} size={size} />
            //   ),
            // }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};
export default Navigator;
