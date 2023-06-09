import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-paper/lib/typescript/src/components/Icon';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SCREEN_NAMES } from '../../common';
import HomeScreen from '../home';
import SymptomsChecker from '../symptoms-checker';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  borderBottomWidth: 2,
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: focused ? 'red' : 'blue',
                }}
              >
                <Icon size={40} name={'home'} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.SYMPTOMS_CHECKER}
        component={SymptomsChecker}
      />
      <Tab.Screen
        name={SCREEN_NAMES.PREDICTION}
        component={SymptomsChecker}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  borderBottomWidth: 2,
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: focused ? 'red' : 'blue',
                }}
              >
                <Icon size={40} name={'home'} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
