import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {LogoHeader} from '../../../asset';
import {getData} from '../../../utils/storage';

const HomeProfile = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then(result => {
        // console.log('user profile :', result);
        setPhoto({uri: result.profile_photo_url});
      });
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LogoHeader width={100} />
      <View style={styles.profileFrame}>
        <Image source={photo} style={styles.profile} />
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
