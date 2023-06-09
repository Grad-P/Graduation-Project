import { SafeAreaView, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            height: 70,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Text> MonkeyPox Master</Text>
          {/* <Image
            source={{ uri: '../../assets/icons/logo.png' }}
            style={{ width: 50, height: 50 }}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
