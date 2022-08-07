import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import ItemsListMenu from '../ItemsListMenu';
import {Gap} from '../../atoms';

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
const Akun = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Gap height={10} />
      <ItemsListMenu nama="Edit Profile" />
      <ItemsListMenu nama="Ubah Password" />
      <ItemsListMenu nama="keluar" />
    </ScrollView>
  );
};
const TentangAplikasi = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Gap height={10} />
      <ItemsListMenu nama="Profile Semangat Bantu" />
      <ItemsListMenu nama="Bantuan" />
      <ItemsListMenu nama="Beri Rating" />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: Akun,
  2: TentangAplikasi,
});

const ProfileTabSection = () => {
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

export default ProfileTabSection;

const styles = StyleSheet.create({});
