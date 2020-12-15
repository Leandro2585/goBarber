import { RobotoSlab_400Regular, RobotoSlab_500Medium, useFonts } from '@expo-google-fonts/roboto-slab';
import React from 'react';
import { StatusBar } from 'react-native';
import AppStack from './src/AppStack';
import { AppLoading } from 'expo';
export default function App() {
  
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular, 
    RobotoSlab_500Medium
  });
  if(!fontsLoaded) {
    return <AppLoading/>;
  }
  else{
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#312e38" />
        <AppStack />
      </>
    );
  }

}
