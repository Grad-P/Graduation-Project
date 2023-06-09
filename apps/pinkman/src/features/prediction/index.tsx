import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import PageHeader from '../../components/atoms/page-header';
import Loader from '../../components/organisms/loader';

const Prediction = ({ route, navigation }) => {
  const [loaderOpen, setLoaderOpen] = useState<boolean>(true);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <PageHeader route={route} navigation={navigation} />
        {!loaderOpen && (
          <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Text> Hello From Prediction </Text>
          </SafeAreaView>
        )}
      </View>
      <Loader setLoaderOpen={setLoaderOpen} loaderOpen={loaderOpen} />
    </>
  );
};

export default Prediction;
