import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyUser, LogoHeader} from '../../../asset';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <LogoHeader width={100} />
      <View style={styles.profileFrame}>
        <Image source={DummyUser} style={styles.profile} />
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
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
  },
  profile: {width: 30, height: 30},
});
