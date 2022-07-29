import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import TabProgram from '../TabProgram';
import {DummyProgram} from '../../../asset';

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
const akun = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor: 'green'}}>
      <Text>ini deskripsi</Text>
    </ScrollView>
  );
};
const tentang = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Text>Ini berita</Text>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: akun,
  2: tentang,
});

const InfoTab = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Akun'},
    {key: '2', title: 'Tentang Aplikasi'},
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

export default InfoTab;

const styles = StyleSheet.create({
  container: {width: 500, backgroundColor: 'green'},
});
