import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyUser, LogoHeader} from '../../asset';
import {ProgramCard} from '../../components';

const Home = () => {
  return (
    <View>
      <View style={styles.container}>
        <LogoHeader width={200} />
        <View style={styles.profileFrame}>
          <Image source={DummyUser} style={styles.profile} />
        </View>
      </View>
      <View>
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: 108,
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
  profile: {width: 50, height: 50},
});
