import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../../common';
import MapScreen from './map';
import ProbabilityScreen from './probability';
import QuestionsScreen from './questions';

const Stack = createNativeStackNavigator();

const SymptomsChecker = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAMES.PROBABILITY}
        component={ProbabilityScreen}
      />
      <Stack.Screen name={SCREEN_NAMES.MAP} component={MapScreen} />
      <Stack.Screen name={SCREEN_NAMES.QUESTIONS} component={QuestionsScreen} />
    </Stack.Navigator>
  );
};

export default SymptomsChecker;
