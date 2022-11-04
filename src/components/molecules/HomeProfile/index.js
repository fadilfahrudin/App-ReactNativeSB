import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DummyProgram, LogoHeader} from '../../../asset';
import {getData} from '../../../utils';

const HomeProfile = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then(result => {
        setPhoto({uri: result.profile_photo_url});
      });
    });
  }, [navigation]);

  console.log('? :', photo);

  return (
    <View style={styles.container}>
      <LogoHeader width={100} />
      <View style={styles.profileFrame}>
        <Image style={styles.profile} source={photo} />
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileFrame: {
    backgroundColor: 'white',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
  },
  profile: {width: 40, height: 40, borderRadius: 10},
});
