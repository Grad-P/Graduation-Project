import AnimatedLottieView from 'lottie-react-native';
import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { SCREEN_NAMES } from '../../common';
import Loader from '../../components/organisms/loader';

const HomeScreen = ({ route, navigation }) => {
  const [loaderOpen, setLoaderOpen] = useState<boolean>(true);

  return (
    <>
      {!loaderOpen && (
        <View
          style={{
            backgroundColor: '#f7fff9',
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: '#e6ffee',
              height: 120,
              alignItems: 'flex-end',
              paddingBottom: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 24, color: 'green' }}>
              MonkeyPox Master
            </Text>
          </View>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
              contentContainerStyle={{
                flex: 1,
                flexDirection: 'column',
                // justifyContent: 'space-around',
              }}
            >
              <View style={{ gap: 24, padding: 16, paddingBottom: 0 }}>
                <Text
                  style={{ fontSize: 46, fontWeight: '700', color: 'green' }}
                >
                  Welcome
                </Text>
                <Text style={{ fontSize: 16, lineHeight: 24 }}>
                  The recent monkeypox outbreak has become a global healthcare
                  concern owing to its rapid spread in more than 65 countries
                  around the globe. To obstruct its expeditious pace, early
                  diagnosis is a must. But the confirmatory Polymerase Chain
                  Reaction (PCR) tests and other biochemical assays are not
                  readily available in sufficient quantities. In this scenario,
                  computer-aided monkeypox identification from skin lesion
                  images can be a beneficial measure
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Pressable
                  onPress={() => {
                    navigation.navigate(SCREEN_NAMES.SYMPTOMS_CHECKER);
                  }}
                  style={{
                    backgroundColor: 'green',
                    padding: 16,
                    margin: 16,
                    borderRadius: 10,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      color: 'white',
                      fontWeight: '600',
                    }}
                  >
                    Let's Start
                  </Text>
                </Pressable>
              </View>

              <AnimatedLottieView
                source={require('../../assets/animations/doctor.json')}
                style={{
                  height: 300,
                  alignSelf: 'center',
                }}
                autoPlay={!loaderOpen}
                loop={true}
              />
            </ScrollView>
          </SafeAreaView>
        </View>
      )}
      <Loader setLoaderOpen={setLoaderOpen} loaderOpen={loaderOpen} />
    </>
  );
};

export default HomeScreen;
