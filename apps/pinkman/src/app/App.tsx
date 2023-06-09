/* eslint-disable jsx-a11y/accessible-emoji */
import { store } from '@gp/redux';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { SCREEN_NAMES } from '../common';
import BottomTabNavigator from '../features/bottom-tab-navigator';

export const App = () => {
  const Stack = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef();

  const routeNameRef = useRef(null);
  const [routeName, setRouteName] = useState(SCREEN_NAMES.HOME);
  useEffect(() => {
    return;
  }, [routeName]);
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <StatusBar
          animated={true}
          translucent
          showHideTransition={'fade'}
          hidden={false}
          backgroundColor={'#e6ffee'}
        />
        <NavigationContainer
          ref={navigationRef}
          onStateChange={async () => {
            const currentRouteName =
              navigationRef.current.getCurrentRoute().name;
            routeNameRef.current = currentRouteName;
            setRouteName(navigationRef.getCurrentRoute().name as SCREEN_NAMES);
          }}
        >
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
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default AppWrapper;

// export default App;

// const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
// const scrollViewRef = useRef<null | ScrollView>(null);
