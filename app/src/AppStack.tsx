import React from 'react';
import AppProvider from './hooks';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;

