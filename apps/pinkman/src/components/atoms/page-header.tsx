import { Pressable, Text, View } from 'react-native';
import MIcon from 'react-native-vector-icons/Ionicons';
import { SCREEN_NAMES } from '../../common';

const PageHeader = ({ route, navigation }) => {
  console.log('navigation', route);
  return (
    <View
      style={{
        height: 120,
        backgroundColor: '#e6ffee',
        alignItems: 'flex-end',
        paddingBottom: 20,
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 8,
        }}
      >
        <MIcon
          name="chevron-back-circle-outline"
          size={45}
          color="green"
          style={{ paddingHorizontal: 15 }}
        />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate(SCREEN_NAMES.HOME);
          return;
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Text
          style={{
            // flex: 1,
            fontWeight: '700',

            fontSize: 24,
            color: 'green',
          }}
        >
          {route.name}
        </Text>
      </Pressable>
    </View>
  );
};

export default PageHeader;
