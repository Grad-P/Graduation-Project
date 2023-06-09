import AnimatedLottieView from 'lottie-react-native';
import { Fragment, useEffect, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { SCREEN_NAMES } from '../../common';
import PageHeader from '../../components/atoms/page-header';
import Loader from '../../components/organisms/loader';

const Treatment = ({ route, navigation }) => {
  const [loaderOpen, setLoaderOpen] = useState<boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const TreatmentScreens = 3;

  const TreatmentScreensData = [
    {
      0: (
        <Fragment key={0}>
          <AnimatedLottieView
            source={require('../../assets/animations/vaccine.json')}
            loop
            autoPlay
            style={{ width: 300, height: 300 }}
          />

          <Text style={{ fontSize: 16, textAlign: 'center', padding: 16 }}>
            There are three vaccines against monkeypox. Although supplies are
            currently limited, get vaccinated if it is offered to you as they
            provide a valuable level of protection against the disease Only
            people who are at risk should be considered for vaccination. Mass
            vaccination is not recommended at this time.
          </Text>
        </Fragment>
      ),
      1: (
        <Fragment key={1}>
          <AnimatedLottieView
            source={require('../../assets/animations/prevention.json')}
            loop
            autoPlay
            style={{ width: 300, height: 300 }}
          />

          <Text style={{ fontSize: 16, textAlign: 'center', padding: 16 }}>
            take care to avoid catching and spreading monkeypox this is because
            it takes several weeks to develop immunity after being vaccinated,
            and because we don’t yet know to what extent the vaccines protect
            you from infecting others as efficacy data in this outbreak setting
            is needed.
          </Text>
        </Fragment>
      ),
      2: (
        <Fragment key={2}>
          <AnimatedLottieView
            source={require('../../assets/animations/pandemic.json')}
            loop
            autoPlay
            style={{ width: 300, height: 300 }}
          />

          <Text style={{ fontSize: 16, textAlign: 'center', padding: 16 }}>
            Some countries recommend vaccination for at-risk individuals safer.
            Extensive research has led to safer vaccines for smallpox vaccines.
            These vaccines may also be effective against monkeypox. Two approved
            vaccines for monkeypox prevention: MVA-BN and LC16.
          </Text>
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
      <PageHeader route={route} navigation={navigation} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {!loaderOpen && (
          <ScrollView
            style={{}}
            contentContainerStyle={{
              flex: 1,
              gap: 20,
              alignItems: 'center',
              justifyContent: 'center',
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
        )}
        <Loader setLoaderOpen={setLoaderOpen} loaderOpen={loaderOpen} />
      </SafeAreaView>
    </>
  );
};

export default Treatment;
