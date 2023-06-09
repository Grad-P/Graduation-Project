import { SafeAreaView, Text } from 'react-native';
import PageHeader from '../../../components/atoms/page-header';

const SymptomsCheckerWelcome = ({ route,navigation }) => {
  return (
    <>
      <PageHeader route={route} navigation={navigation} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>Welcome From Symptoms Checker Welcome Screen</Text>
      </SafeAreaView>
    </>
  );
};

export default SymptomsCheckerWelcome;
