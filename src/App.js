import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {SignIn, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './rooter';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
