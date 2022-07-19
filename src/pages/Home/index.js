import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {DummyUser, DummyProgram, LogoHeader} from '../../asset';
import {Gap, ProgramCard} from '../../components';

const Home = () => {
  return (
    <View>
      <View style={styles.container}>
        <LogoHeader width={200} />
        <View style={styles.profileFrame}>
          <Image source={DummyUser} style={styles.profile} />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.programCardContainer}>
          <Gap width={16} />
          <ProgramCard image={DummyProgram} />
          <ProgramCard image={DummyProgram} />
          <ProgramCard image={DummyProgram} />
        </View>
      </ScrollView>
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
  programCardContainer: {flexDirection: 'row'},
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
