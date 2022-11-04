import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Gap,
  HomeProfile,
  HomeTabSection,
  InfoCard,
  ProgramCard,
} from '../../components';
import {getProgramByTyeps, getProgramData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const nav = useNavigation();
  const {program_pilihan, program} = useSelector(state => state.homeReducer);

  useEffect(() => {
    nav.addListener('focus', () => {
      dispatch(getProgramByTyeps('program_pilihan'));
    });
  }, []);

  useEffect(() => {
    nav.addListener('focus', () => {
      dispatch(getProgramData());
    });
  }, []);
  // console.log('program total: ', program);

  //hitung total donasi all program
  const sumCollageAmount = program => {
    let sum = 0;
    for (let i = 0; i < program.length; i++) {
      sum += program[i].collage_amount;
    }
    return sum;
  };
  // console.log('test :', sumCollageAmount(program));

  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.programCardContainer}>
            <Gap width={16} />

            {program_pilihan.map(itemProgram => {
              return (
                <ProgramCard
                  key={itemProgram.id}
                  image={{uri: itemProgram.banner_program}}
                  judul={itemProgram.title}
                  by="Semangatbantu.com"
                  value={itemProgram.collage_amount}
                  max={itemProgram.target_amount}
                  nominal={itemProgram.collage_amount}
                  date={itemProgram.end_program}
                  onPres={() =>
                    navigation.navigate('ProgramDetail', itemProgram)
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.infoCardContainer}>
            <InfoCard namaInfo="Program Tersedia" total={program.length} />
            <InfoCard
              namaInfo="Jumlah Donasi"
              totalDonasi={sumCollageAmount(program)}
            />
            <InfoCard namaInfo="Penerima Manfaat" total={1000} />
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
