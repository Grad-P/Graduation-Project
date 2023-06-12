import {
  AppDispatch,
  PredictMonkeyPox,
  SliceStatus,
  getPredictMonkeyPoxSliceDiseased,
  getPredictMonkeyPoxSliceStatus,
} from '@gp/redux';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import GalleryUpload from '../../assets/icons/upload.from.galery.svg';
import PageHeader from '../../components/atoms/page-header';
import Loader from '../../components/organisms/loader';
import PredictionResult from '../../components/organisms/result';
const Prediction = ({ route, navigation }) => {
  const [loaderOpen, setLoaderOpen] = useState<boolean>(true);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [imageType, setImageType] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const prediction = useSelector(getPredictMonkeyPoxSliceDiseased);
  const predictionStatus = useSelector(getPredictMonkeyPoxSliceStatus);

  useEffect(() => {
    if (predictionStatus === SliceStatus.SUCCEEDED) {
      setLoaderOpen(false);
      setShowResult(true);
    }
    if (predictionStatus === SliceStatus.LOADING) {
      setLoaderOpen(true);
    }
    return;
  }, [predictionStatus]);

  useEffect(() => {
    if (selectedImage !== '') {
      const form = new FormData();
      form.append('image', {
        name: new Date().toString() + ' _image',
        uri: selectedImage,
        type: imageType,
      } as any);
      dispatch(PredictMonkeyPox(form));
      return;
    }
  }, [dispatch, imageType, selectedImage]);

  return (
    <>
      <PageHeader route={route} navigation={navigation} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {!loaderOpen && (
          <SafeAreaView style={{ flex: 1, backgroundColor: '#f7fff9' }}>
            <ScrollView
              contentContainerStyle={{
                flexDirection: 'row',
                gap: 20,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: '#e6ffee',
                  height: 150,
                  width: 150,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
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
                      if (e.didCancel) {
                        console.log('e.assets   ', e);
                      } else if (e.assets) {
                        console.log('e.assets   ', e.assets[0]);
                        setSelectedImage(e.assets[0].uri);
                        setImageType(e.assets[0].type);
                      }
                    }
                  );
                }}
              >
                <MIcon name="camera" size={50}></MIcon>
                <Text style={{ textAlign: 'center', padding: 8 }}>
                  Open Camera
                </Text>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: '#e6ffee',
                  height: 150,
                  width: 150,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
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
                        setImageType(e.assets[0].type);
                      }
                    }
                  );
                }}
              >
                <GalleryUpload
                  width={50}
                  height={50}
                  fill={'green'}
                  style={{}}
                />
                <Text style={{ textAlign: 'center', padding: 8 }}>
                  Open Gallery
                </Text>
              </Pressable>
            </ScrollView>
          </SafeAreaView>
        )}
        <Loader setLoaderOpen={setLoaderOpen} loaderOpen={loaderOpen} />
      </SafeAreaView>
      <PredictionResult
        visible={showResult}
        setVisible={setShowResult}
        diseased={prediction}
        navigation={navigation}
      />
    </>
  );
};

export default Prediction;
