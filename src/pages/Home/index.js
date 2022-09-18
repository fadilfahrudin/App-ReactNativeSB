import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProgramData} from '../../redux/action';
import {NumericFormat} from 'react-number-format';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {program} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getProgramData());
  }, []);

  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.programCardContainer}>
            <Gap width={16} />
            {program.map(itemProgram => {
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
                />
              );
            })}
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
