import React from 'react';
import AppLoading from 'expo-app-loading';
import AppStack from './src/AppStack';
import { RobotoSlab_400Regular, RobotoSlab_500Medium, useFonts} from '@expo-google-fonts/roboto-slab';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
      <AppStack />
  );
}
