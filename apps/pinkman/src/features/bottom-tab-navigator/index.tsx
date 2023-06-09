import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-paper/lib/typescript/src/components/Icon';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { SCREEN_NAMES } from '../../common';

import HomeScreen from '../home';
import Prediction from '../prediction';
import Prevention from '../prevention';
import SymptomsChecker from '../symptoms-checker';
import Treatment from '../treatment';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// arrow-back-ios

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#e6ffee', height: 100 },
      }}
      initialRouteName={SCREEN_NAMES.HOME}
    >
      <BottomTab.Screen
        name={SCREEN_NAMES.PREDICTION}
        component={Prediction}
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MIcon
                  size={30}
                  color={focused ? 'green' : 'black'}
                  name={'add-a-photo'}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAMES.SYMPTOMS_CHECKER}
        component={SymptomsChecker}
        options={{
          title: 'Symptoms Checker',
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  size={35}
                  color={focused ? 'green' : 'black'}
                  name={'diagnoses'}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MIcon
                  name="home"
                  color={focused ? 'green' : 'black'}
                  size={45}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAMES.PREVENTION}
        component={Prevention}
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  size={35}
                  color={focused ? 'green' : 'black'}
                  name={'shield-virus'}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAMES.TREATMENT}
        component={Treatment}
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  size={35}
                  color={focused ? 'green' : 'black'}
                  name={'hand-holding-medical'}
                />
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
