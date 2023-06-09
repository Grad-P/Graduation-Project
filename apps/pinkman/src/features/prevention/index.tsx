import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import PageHeader from '../../components/atoms/page-header';
import Loader from '../../components/organisms/loader';

const Prevention = ({ route, navigation }) => {
  const [loaderOpen, setLoaderOpen] = useState<boolean>(true);

  return (
    <>
      {!loaderOpen && (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <PageHeader route={route} navigation={navigation} />
          <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Text> Hello From Prevention </Text>
          </SafeAreaView>
        </View>
      )}
      <Loader setLoaderOpen={setLoaderOpen} loaderOpen={loaderOpen} />
    </>
  );
};

export default Prevention;
