import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {DummyProgram} from '../../../asset';
import TabProgram from '../TabProgram';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      marginLeft: 1,
    }}
    activeColor={{}}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'roboto-medium',
          color: focused ? '#0B2B72' : '#5D83D7',
        }}>
        {route.title}
      </Text>
    )}
  />
);
const programPilihan = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <TabProgram
        onPress={() => navigation.navigate('ProgramDetail')}
        judul="Bersama Semangat Bantu Selamatkan Al-Quds #savePalestina"
        image={DummyProgram}
        progress={0.3}
        nominal="1.000.000"
      />
      <TabProgram
        onPress={() => navigation.navigate('ProgramDetail')}
        judul="Semangat Sedekah Subuh"
        image={DummyProgram}
        progress={0.1}
        nominal="10.000.000"
      />
      <TabProgram
        onPress={() => navigation.navigate('ProgramDetail')}
        judul="Bantu Berikan Senyum Yatim"
        image={DummyProgram}
        progress={1}
        nominal="50.000.000"
      />
    </ScrollView>
  );
};
const donasiRutin = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <TabProgram
        onPress={() => navigation.navigate('ProgramDetail')}
        judul="Semangat Sedekah Subuh"
        image={DummyProgram}
        progress={0.1}
        nominal="10.000.000"
      />
      <TabProgram
        onPress={() => navigation.navigate('ProgramDetail')}
        judul="Bantu Berikan Senyum Yatim"
        image={DummyProgram}
        progress={1}
        nominal="50.000.000"
      />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: programPilihan,
  2: donasiRutin,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Program Pilihan'},
    {key: '2', title: 'Donasi Rutin'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{flexGrow: 1}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
