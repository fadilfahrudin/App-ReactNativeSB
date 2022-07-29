import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {DummyProgram} from '../../asset';
import {
  Gap,
  HomeProfile,
  HomeTabSection,
  InfoCard,
  InfoTab,
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
            <ProgramCard
              image={DummyProgram}
              judul="Semangat Sedekah Subuh"
              by="Semangatbantu.com"
              progress={0.8}
              nominal="100.000.000"
              date={25}
            />
            <ProgramCard
              image={DummyProgram}
              judul="100.000 Paket Sembako Bantu..."
              by="Semangatbantu.com"
              progress={0.5}
              nominal="50.000.000"
              date={20}
            />
            <ProgramCard
              image={DummyProgram}
              judul="BANTU PERLUASAN PESANTREN.."
              by="Semangatbantu.com"
              progress={0.9}
              nominal="664.606.311"
              date={39}
            />
          </View>
        </ScrollView>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.infoCardContainer}>
            <InfoCard namaInfo="Program Tersedia" total={6} />
            <InfoCard namaInfo="Jumlah Donasi" total="Rp.70.000.000" />
            <InfoCard namaInfo="Penerima Manfaat" total={100} />
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
