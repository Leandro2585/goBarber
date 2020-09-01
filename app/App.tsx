import { RobotoSlab_400Regular, RobotoSlab_500Medium, useFonts } from '@expo-google-fonts';
import React from 'react';
import { StatusBar } from 'react-native';
import AppStack from './src/AppStack';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular, 
    RobotoSlab_500Medium
  });

    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#312e38" />
        <AppStack />
      </>
    );

}
