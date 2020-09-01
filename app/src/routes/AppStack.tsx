import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Text>Aviao</Text>
      </View>
    </>
  );
};
export default App;
