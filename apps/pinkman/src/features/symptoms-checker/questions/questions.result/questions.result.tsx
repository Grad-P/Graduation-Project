import { CommonActions } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { Modal, Text } from 'react-native-paper';
import { SCREEN_NAMES } from '../../../../common';

interface Props {
  visible: boolean;
  setVisible(value: boolean);
  diseased;
  navigation;
}

const SymptomsCheckerResult = ({
  visible,
  setVisible,
  diseased,
  navigation,
}: Props) => {
  const hideModal = () => setVisible(false);

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={{
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 32,
        padding: 16,
        borderRadius: 8,
        gap: 18,
      }}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 24, fontWeight: '500' }}>Result</Text>
      {diseased && (
        <Text style={{ fontSize: 16 }}>
          You Have alot of Symptoms for Monkeypox so lets have another step of
          check with an image for your skin.
        </Text>
      )}
      {!diseased && (
        <Text style={{ fontSize: 16 }}>
          You don't Have alot of Symptoms for Monkeypox your probaility for
          having Monkeypox is very tiny You can check a next step or go to Home.
        </Text>
      )}

      <View style={{ gap: 8 }}>
        {!diseased && (
          <Pressable
            onPress={() => {
              const action = CommonActions.reset({
                index: 0,
                routes: [{ name: SCREEN_NAMES.HOME }],
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
              Go To Home
            </Text>
          </Pressable>
        )}

        <Pressable
          onPress={() => {
            const action = CommonActions.reset({
              index: 0,
              routes: [{ name: SCREEN_NAMES.PREDICTION }],
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
            Go To Prediction
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default SymptomsCheckerResult;
