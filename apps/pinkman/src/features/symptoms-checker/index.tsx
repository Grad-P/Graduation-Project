import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../../common';
import MapScreen from './map';
import ProbabilityScreen from './probability';
import QuestionsScreen from './questions';
import SymptomsCheckerWelcome from './symptoms-checker-welcom';

const Stack = createNativeStackNavigator();

const SymptomsChecker = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREEN_NAMES.SYMPTOMS_CHECKER_WELCOME}
    >
      <Stack.Screen
        name={SCREEN_NAMES.PROBABILITY}
        component={ProbabilityScreen}
      />
      <Stack.Screen
        name={SCREEN_NAMES.SYMPTOMS_CHECKER_WELCOME}
        component={SymptomsCheckerWelcome}
      />

      <Stack.Screen name={SCREEN_NAMES.MAP} component={MapScreen} />
      <Stack.Screen name={SCREEN_NAMES.QUESTIONS} component={QuestionsScreen} />
    </Stack.Navigator>
  );
};

export default SymptomsChecker;
