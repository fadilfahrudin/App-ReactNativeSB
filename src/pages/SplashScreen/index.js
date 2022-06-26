import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../asset';

const SplashScreen = ({navigation}) => {
  //prop navigation merupakan bawaan dari react navigation yang langsung inject ke halaman yg di tuju
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000); //berpindah setelah 2 detik
  }, []); //arry kosong agar tidak terus rerender
  return (
    <View
      style={{
        backgroundColor: '#0050FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
    </View>
  );
};

export default SplashScreen;
