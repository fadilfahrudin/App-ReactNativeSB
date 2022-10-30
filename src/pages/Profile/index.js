import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {Gap, Header, ItemsListMenu} from '../../components';
import {getData} from '../../utils';

const Profile = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});
  const nav = useNavigation();

  const [isWebOpen, setIsWebOpen] = useState(false);
  const [url, setUrl] = useState('');

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };

  useEffect(() => {
    nav.addListener('focus', () => {
      getData('userProfile').then(result => {
        // console.log('user profile :', result);
        setUserProfile(result);
      });
    });
  }, [nav]);

  const onWeb = alamat => {
    if (alamat === 'About') {
      setIsWebOpen(true);
      setUrl('https://www.semangatbantu.com/tentang-kami');
    } else if (alamat === 's&k') {
      setIsWebOpen(true);
      setUrl('https://www.semangatbantu.com/syarat-ketentuan');
    } else if (alamat === 'kebijakanPrivasi') {
      setIsWebOpen(true);
      setUrl('https://www.semangatbantu.com/kebijakan-privasi');
    } else if (alamat === 'legalitas') {
      setIsWebOpen(true);
      setUrl('https://www.semangatbantu.com/legalitas');
    } else {
      setIsWebOpen(true);
      setUrl('https://www.semangatbantu.com/tim-kami');
    }
  };

  if (isWebOpen) {
    return (
      <>
        <Header
          title={'Tentang'}
          subTitle={'Semangat Bantu'}
          onBack
          onPress={() => setIsWebOpen(false)}
        />
        <WebView source={{uri: url}} />
      </>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.containerPhotoDetail}>
        <View style={styles.bgPhoto}>
          <Image
            source={{uri: userProfile.profile_photo_url}}
            style={styles.photo}
          />
        </View>
        <Gap height={10} />
        <Text style={styles.nama}>{userProfile.name}</Text>
      </View>

      <View style={styles.containerMenu}>
        <Text style={styles.titleSection}>Akun Saya</Text>
        <View style={styles.bodySection}>
          <ItemsListMenu
            nama="Profile Saya"
            onPres={() => navigation.navigate('Detail Profile')}
          />
        </View>
        <Text style={styles.titleSection}>Seputar Semangat Bantu</Text>
        <View style={styles.bodySection}>
          <ItemsListMenu
            nama="Tentang Semangat Bantu"
            onPres={() => onWeb('About')}
          />
          <ItemsListMenu
            nama="Syarat dan Ketentuan"
            onPres={() => onWeb('s&k')}
          />
          <ItemsListMenu
            nama="Kebijakan Privasi"
            onPres={() => onWeb('kebijakanPrivasi')}
          />
          <ItemsListMenu nama="Legalitas" onPres={() => onWeb('legalitas')} />
          <ItemsListMenu nama="Tim Kami" onPres={() => onWeb('tim')} />
        </View>
        <Gap height={15} />
        <ItemsListMenu nama="Keluar" color="red" onPres={signOut} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  tabContainer: {flex: 1},
  containerPhotoDetail: {
    backgroundColor: '#0050FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginBottom: 6,
  },
  bgPhoto: {
    backgroundColor: 'white',
    width: 110,
    height: 110,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#f0f0f0',
  },
  nama: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  username: {fontFamily: 'Roboto-Reguler', fontSize: 16},
  titleSection: {
    marginLeft: 10,
    fontFamily: 'Poppins-Medium',
    marginVertical: 6,
    fontSize: 16,
    color: '#020202',
  },
});
