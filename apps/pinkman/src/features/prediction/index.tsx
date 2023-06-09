import {
  AppDispatch,
  PredictMonkeyPox,
  SliceStatus,
  getPredictMonkeyPoxSliceDiseased,
  getPredictMonkeyPoxSliceStatus,
} from '@gp/redux';

import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from '../../components/atoms/page-header';
import Loader from '../../components/organisms/loader';

const Prediction = ({ route, navigation }) => {
  const [loaderOpen, setLoaderOpen] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const prediction = useSelector(getPredictMonkeyPoxSliceDiseased);
  const predictionStatus = useSelector(getPredictMonkeyPoxSliceStatus);

  useEffect(() => {
    if (predictionStatus === SliceStatus.SUCCEEDED) {
      alert(prediction);
    }
    if (selectedImage !== '') {
      const form = new FormData();
      form.append('image', {
        name: new Date().toString() + ' _image',
        uri: selectedImage,
        type: 'image/jpg ',
      } as any);

      dispatch(PredictMonkeyPox(form));
    }
    return;
  }, [dispatch, selectedImage]);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <PageHeader route={route} navigation={navigation} />
        {!loaderOpen && (
          <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Text> Hello From Prediction </Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: 'red',
                }}
                onPress={async () => {
                  launchCamera(
                    {
                      mediaType: 'photo',
                      maxHeight: 256,
                      maxWidth: 256,
                      quality: 1,
                    },
                    (e) => {
                      // setSelectedImage(e.assets)
                      console.log('e.assets   ', e.assets);
                    }
                  );
                }}
              >
                <Text style={{ textAlign: 'center' }}>
                  Open Camera directly
                </Text>
              </Pressable>
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: 'red',
                }}
                onPress={async () => {
                  launchImageLibrary(
                    {
                      mediaType: 'photo',
                      maxHeight: 256,
                      maxWidth: 256,
                      quality: 1,
                    },
                    (e) => {
                      if (e.didCancel) {
                        console.log('e.assets   ', e);
                      } else if (e.assets) {
                        console.log('e.assets   ', e.assets[0]);

                        setSelectedImage(e.assets[0].uri);
                      }
                    }
                  );
                }}
              >
                <Text style={{ textAlign: 'center' }}>
                  Open Camera directly
                </Text>
              </Pressable>
            </View>
          </SafeAreaView>
        )}
      </View>
      <Loader setLoaderOpen={setLoaderOpen} loaderOpen={loaderOpen} />
    </>
  );
};

export default Prediction;
