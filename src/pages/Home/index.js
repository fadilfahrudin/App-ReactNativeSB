import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {DummyProgram} from '../../asset';
import {
  Gap,
  HomeProfile,
  HomeTabSection,
  InfoCard,
  ProgramCard,
} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.programCardContainer}>
            <Gap width={16} />
            <ProgramCard image={DummyProgram} />
            <ProgramCard image={DummyProgram} />
            <ProgramCard image={DummyProgram} />
          </View>
        </ScrollView>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.infoCardContainer}>
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flexGrow: 1},
  tabContainer: {flex: 1},
  programCardContainer: {flexDirection: 'row'},
  infoCardContainer: {flexDirection: 'row', marginLeft: 10, marginBottom: 20},
});
