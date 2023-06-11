import AnimatedLottieView from 'lottie-react-native';
import { Fragment, useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SCREEN_NAMES } from '../../common';
import PageHeader from '../../components/atoms/page-header';

const Prevention = ({ route, navigation }) => {
  const [loaderOpen, setLoaderOpen] = useState<boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const TreatmentScreens = 3;

  const TreatmentScreensData = [
    {
      0: (
        <Fragment key={0}>
          <AnimatedLottieView
            source={require('../../assets/animations/avoid.affected.json')}
            loop
            autoPlay
            style={{ height: 300 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, paddingBottom: 8 }}>
              Avoid contact with an affected person by :
            </Text>
            <View style={{ flex: 1 }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
              >
                <View
                  style={{
                    justifyContent: 'flex-start',
                    paddingBottom: 16,
                  }}
                >
                  <Text style={{ fontSize: 16, paddingBottom: 8 }}>
                    lesions or scabs in...
                  </Text>
                  <Text>
                    1) eyes {'\n'}2) anus {'\n'}3) throat {'\n'}4) mouth {'\n'}
                    5) rectum {'\n'}6) genitals
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    paddingBottom: 16,
                  }}
                >
                  <Text style={{ fontSize: 16, paddingBottom: 8 }}>
                    body fluids...
                  </Text>
                  <Text>
                    1) blood {'\n'}2) saliva {'\n'}3) semen
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingBottom: 16,
                  width: '83%',
                  alignSelf: 'center',
                }}
              >
                <Text style={{ fontSize: 16, paddingBottom: 8 }}>
                  specific situations...
                </Text>

                <Text>
                  1) when providing care at home
                  {'\n'}
                  2) when living in the same household
                  {'\n'}
                  3) during sexual contact, including oral and non-penetrative
                  contact
                  {'\n'}
                  4) talking
                  {'\n'}
                  5) breathing
                  {'\n'}
                  6) coughing or sneezing
                  {'\n'}
                  7) exposure during close contact
                </Text>
              </View>
            </View>
          </View>
        </Fragment>
      ),
      1: (
        <Fragment key={1}>
          <AnimatedLottieView
            source={require('../../assets/animations/avoid.monkey.json')}
            loop
            autoPlay
            style={{ width: 300, height: 300 }}
          />

          <View style={{ flex: 1 }}>
            <Text
              style={{ fontSize: 20, paddingBottom: 8, paddingHorizontal: 32 }}
            >
              Avoid contact with an affected animal by some situations :
            </Text>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  paddingBottom: 16,
                  width: '83%',
                  alignSelf: 'center',
                }}
              >
                <Text>
                  1) eating undercooked game meat
                  {'\n'}
                  2) hunting and processing animals for consumption
                  {'\n'}
                  3) exposureto body fluids, such as when cleaning up
                  {'\n'}
                  4) touchig or handling live or dead animals, especially{'\t'}
                  if there were bites or scratches while handling
                </Text>
              </View>
            </View>
          </View>
        </Fragment>
      ),
      2: (
        <Fragment key={2}>
          <AnimatedLottieView
            source={require('../../assets/animations/lowering.risk.json')}
            loop
            autoPlay
            style={{ width: 300, height: 300 }}
          />

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, paddingBottom: 8 }}>
              To lower your overall risk :
            </Text>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  paddingBottom: 16,
                  width: '83%',
                  alignSelf: 'center',
                }}
              >
                <Text style={{ fontSize: 16, paddingBottom: 8 }}>
                  fewer sexual partners...
                </Text>
                <Text
                  style={{ justifyContent: 'flex-start', paddingBottom: 16 }}
                >
                  1) using barrier protection during sexual activity: (condoms -
                  dental dams - gloves - clothing ){'\n'}
                  {'\n'}
                  2) Avoid close, skin-to-skin contact with people who have a
                  rash that looks like mpox
                  {'\n'}
                  {'\n'}
                  3) Avoid contact with objects and materials that a person with
                  mpox has used.
                  {'\n'}
                  {'\n'}
                  4) Get vaccinated!
                  {'\n'}
                  {'\n'}
                  5) If you are in Central or West Africa, avoid contact with
                  animals that can spread mpox virus, usually rodents and
                  primates.
                </Text>
              </View>
            </View>
          </View>
        </Fragment>
      ),
    },
  ];
  const lengthOfData = 2;
  const renderDots = () => {
    const arrayOfElements: JSX.Element[] = [];
    for (let index = 0; index < TreatmentScreens; index++) {
      arrayOfElements.push(
        <Pressable
          onPress={() => {
            setSelectedIndex(index);
          }}
          key={index}
          style={{
            width: 10,
            height: 10,
            borderRadius: 50,
            backgroundColor: selectedIndex === index ? 'green' : 'gray',
          }}
        />
      );
    }
    return arrayOfElements;
  };
  const renderTreatmentScreens = () => {
    const arrayOfElements: JSX.Element[] = [];
    for (let index = 0; index < TreatmentScreensData.length; index++) {
      arrayOfElements.push(TreatmentScreensData[0][selectedIndex]);
    }
    return arrayOfElements;
  };
  useEffect(() => {
    if (navigation.isFocused()) setLoaderOpen(true);
  }, [navigation]);
  return (
    <>
      {loaderOpen && (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <PageHeader route={route} navigation={navigation} />
          <ScrollView
            style={{
              flex: 1,
            }}
            contentContainerStyle={{
              gap: 20,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 24,
            }}
          >
            {renderTreatmentScreens()}
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '80%',
              }}
            >
              <Pressable
                style={{
                  borderRadius: 10,
                  backgroundColor: selectedIndex === 0 ? 'grey' : 'green',
                }}
                onPress={() => {
                  if (selectedIndex !== 0) setSelectedIndex(selectedIndex - 1);
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    padding: 16,
                    color: 'white',
                  }}
                >
                  Back
                </Text>
              </Pressable>
              <Pressable
                style={{
                  borderRadius: 10,
                  backgroundColor: 'green',
                }}
                onPress={() => {
                  if (selectedIndex !== lengthOfData)
                    setSelectedIndex(selectedIndex + 1);
                  else if (selectedIndex === lengthOfData) {
                    setSelectedIndex(0);
                    navigation.navigate(SCREEN_NAMES.HOME);
                  }
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    padding: 16,
                    borderRadius: 10,
                    color: 'white',
                  }}
                >
                  {selectedIndex === lengthOfData ? 'Finish' : 'Next'}
                </Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', gap: 6 }}>{renderDots()}</View>
          </ScrollView>
        </View>
      )}
      {/* <Loader setLoaderOpen={setLoaderOpen} loaderOpen={loaderOpen} /> */}
    </>
  );
};

export default Prevention;
