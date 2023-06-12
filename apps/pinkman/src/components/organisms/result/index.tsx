import { AppDispatch, resetPrediction } from '@gp/redux';
import { CommonActions } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { Modal, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { SCREEN_NAMES } from '../../../common';

interface Props {
  visible: boolean;
  setVisible(value: boolean);
  diseased;
  navigation;
}

const PredictionResult = ({
  visible,
  setVisible,
  diseased,
  navigation,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Modal
      visible={visible}
      contentContainerStyle={{
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 32,
        padding: 16,
        borderRadius: 8,
        gap: 18,
      }}
      style={{ justifyContent: 'center', alignItems: 'center' }}
      onDismiss={() => {
        dispatch(resetPrediction());
        setVisible(false);
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: '500' }}>Result</Text>
      {diseased && (
        <Text style={{ fontSize: 16 }}>
          You are most likely infected with Monkeypox You Should make a PCR and
          call a doctor and you can see and Can Know More about the Treatment
          From Here.
        </Text>
      )}
      {!diseased && (
        <Text style={{ fontSize: 16 }}>
          You are most likely Healthy and not infected with Monkeypox You Should
          Know How To Prevent Your Self From being infected You Can Learn More
          From Here.
        </Text>
      )}

      <View style={{ gap: 8 }}>
        {!diseased && (
          <Pressable
            onPress={() => {
              dispatch(resetPrediction());
              const action = CommonActions.reset({
                index: 0,
                routes: [{ name: SCREEN_NAMES.PREVENTION }],
              });
              navigation.dispatch(action);
              return;
            }}
            style={{
              backgroundColor: '#e2ffee',
              padding: 16,
              borderRadius: 10,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                textAlignVertical: 'center',
                color: 'black',
                fontWeight: '600',
              }}
            >
              Go To Prevention
            </Text>
          </Pressable>
        )}

        {diseased && (
          <Pressable
            onPress={() => {
              dispatch(resetPrediction());
              const action = CommonActions.reset({
                index: 0,
                routes: [{ name: SCREEN_NAMES.TREATMENT }],
              });
              navigation.dispatch(action);
              return;
            }}
            style={{
              backgroundColor: 'green',
              padding: 16,
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
              Go To Treatment
            </Text>
          </Pressable>
        )}
      </View>
    </Modal>
  );
};

export default PredictionResult;
