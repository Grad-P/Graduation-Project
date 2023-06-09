/* eslint-disable jsx-a11y/accessible-emoji */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SCREEN_NAMES } from '../common';
import BottomTabNavigator from '../features/bottom-tab-navigator';

export const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <StatusBar
          animated={true}
          translucent
          showHideTransition={'fade'}
          hidden={false}
        />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Group>
              <Stack.Screen
                name={SCREEN_NAMES.BOTTOM_TAB_NAVIGATOR}
                component={BottomTabNavigator}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};
// const AppWrapper = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };
// export default AppWrapper;
export default App;
