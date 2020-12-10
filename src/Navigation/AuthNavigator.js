// import * as React from 'react';
// import {Text, View} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import LoginScreen from '../screens/Login.js';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Heading from '../components/Heading.js'
// const Tab = createBottomTabNavigator();

// const createAppStack = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons
//               name="format-list-bulleted"
//               color={color}
//               size={size}
//             />
//           ),
//           tabBarBadge: 1,
//         }}
//       />
//       <Tab.Screen
//         name="Orders"
//         component={OrderScreen}
//         options={{
//           tabBarLabel: 'Orders',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons
//               name="format-list-bulleted"
//               color={color}
//               size={size}
//             />
//           ),
//           tabBarBadge: 1,
//         }}
//       />
//       <Tab.Screen
//         name="Products"
//         component={ProductScreen}
//         options={{
//           tabBarLabel: 'Products',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons
//               name="briefcase-outline"
//               color={color}
//               size={size}
//             />
//           ),
//           tabBarBadge: 1,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           headerShown: false,
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="human" color={color} size={size} />
//           ),
//         }}
//       />
//       {/* <Tab.Screen name="test" options={{
//     headerShown:false,

//       // headerTitleStyle: { alignSelf: 'center' },
//       headerStyle : {backgroundColor:"skyblue"}
//   }} component={ProfileScreen}></Tab.Screen>
//   <Tab.Screen name="AddProduct"  options={{
//       headerTitleStyle: { alignSelf: 'center' },
//   }} component={AddProduct}></Tab.Screen> */}
//     </Tab.Navigator>
//   );
// };

// export default createAppStack;
