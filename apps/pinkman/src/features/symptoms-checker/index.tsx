import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../../common';
import QuestionsScreen from './questions';

const Stack = createNativeStackNavigator();

const SymptomsChecker = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREEN_NAMES.QUESTIONS}
    >
      <Stack.Screen name={SCREEN_NAMES.QUESTIONS} component={QuestionsScreen} />
    </Stack.Navigator>
  );
};

export default SymptomsChecker;
