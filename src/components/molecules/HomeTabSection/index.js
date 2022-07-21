import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TabProgram from '../TabProgram';

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
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <TabProgram />
      <TabProgram />
      <TabProgram />
    </ScrollView>
  );
};
const donasiRutin = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

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
