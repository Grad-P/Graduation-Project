import Lottie from 'lottie-react-native';
import { Modal } from 'react-native-paper';

interface Props {
  setLoaderOpen(value: boolean);
  loaderOpen: boolean;
}
const Loader = ({ loaderOpen, setLoaderOpen }: Props) => {
  return (
    <Modal
      visible={loaderOpen}
      onDismiss={() => {
        setLoaderOpen(false);
      }}
      contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Lottie
        source={require('../../assets/animations/loading.json')}
        style={{ width: 300, height: 300 }}
        autoPlay={loaderOpen}
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => {
          setLoaderOpen(false);
        }}
      />
    </Modal>
  );
};

export default Loader;
