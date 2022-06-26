import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SignIn, SignUp, SplashScreen} from '../pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen" //option untuk menyembunyikan halaman yang saat ini
        component={SplashScreen} //ambil dari component Splash Screen
        options={{headerShown: false}} //option untuk menyembunyikan halaman yang saat ini
      />
      <Stack.Screen
        name="SignIn" //option untuk menyembunyikan halaman yang saat ini
        component={SignIn} //ambil dari component SignIn
        options={{headerShown: false}} //option untuk menyembunyikan halaman yang saat ini
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
