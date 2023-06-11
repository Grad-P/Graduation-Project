import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import PageHeader from '../../../components/atoms/page-header';
import SymptomsCheckerResult from './questions.result/questions.result';

const QuestionsScreen = ({ route, navigation }) => {
  const symptoms = [
    'Skin rash',
    'Mucosal lesions',
    'Fever',
    'Headache',
    'Muscle aches',
    'Back pain',
    'Low energy',
    'Swollen lymph nodes',
    'Rash (last for two to three weeks , affects : face,\n palms of the hands, soles of the feet, groin,\ngenital and/or anal regions.)',
    'Chills',
    'Exhaustion',
    'Sore throat',
    'Nasal congestion',
    'Cough',
    'High temperature',
    'Sores in the mouth',
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(symptoms.length).fill(false)
  );
  const [total, setTotal] = useState(0);

  const [showResult, setShowResult] = useState<boolean>(false);
  const [diseased, setDiseased] = useState<boolean>(false);
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    console.log('updatedCheckedState', updatedCheckedState);
    const totalChecked = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (index === position && currentState === true) {
          return total + 1;
        }
        if (index === position && currentState === false) {
          return total - 1;
        } else {
          return sum;
        }
      }
    );

    setTotal(totalChecked);
  };
  useEffect(() => {
    console.log('total', Number(total));
    return;
  }, [total]);

  const onSubmit = () => {
    const percentage = (total / symptoms.length) * 100;
    if (percentage > 35) {
      setDiseased(true);
    }
    if (percentage < 35) {
      setDiseased(false);
    }
    setShowResult(true);
  };
  return (
    <>
      <PageHeader route={route} navigation={navigation} />
      <SafeAreaView style={{ backgroundColor: '#f7fff9', flex: 1 }}>
        <Text style={{ fontSize: 18, padding: 12, paddingHorizontal: 16 }}>
          Check Your Symptoms about being diseased by monkeypox
        </Text>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 12 }}
        >
          {symptoms.map((ele, index) => {
            return (
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 5,
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: 2,
                      borderRadius: 50,
                      marginHorizontal: 4,
                    }}
                  >
                    <Checkbox
                      status={checkedState[index] ? 'checked' : 'unchecked'}
                      onPress={() => {
                        handleOnChange(index);
                      }}
                      color="green"
                    />
                  </View>
                  <Text style={{ textAlignVertical: 'center' }}>{ele}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <Pressable
          onPress={onSubmit}
          style={{
            backgroundColor: total ? 'green' : 'gray',
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

        <SymptomsCheckerResult
          navigation={navigation}
          visible={showResult}
          setVisible={setShowResult}
          diseased={diseased}
        />
      </SafeAreaView>
    </>
  );
};

export default QuestionsScreen;
