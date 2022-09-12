import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Logo} from '../../asset';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  //prop navigation merupakan bawaan dari react navigation yang langsung inject ke halaman yg di tuju
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(result => {
        // console.log('token:', result);
        if (result) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000); //berpindah setelah 2 detik
  }, []); //arry kosong agar tidak terus rerender

  useEffect(() => {}, []);
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
