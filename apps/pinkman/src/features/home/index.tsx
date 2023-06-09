import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Loader from '../../components/organisms/loader';

const HomeScreen = () => {
  const [loaderOpen, setLoaderOpen] = useState<boolean>(true);

  return (
    <>
      {!loaderOpen && (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View
            style={{
              backgroundColor: '#e6ffee',
              height: 120,
              alignItems: 'flex-end',
              paddingBottom: 20,
              flexDirection: 'row',
            }}
          >
            <Text style={{ fontSize: 24 }}> MonkeyPox Master</Text>
          </View>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
              <View>
                <Text>All Categories</Text>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      )}
      <Loader setLoaderOpen={setLoaderOpen} loaderOpen={loaderOpen} />
    </>
  );
};

export default HomeScreen;
