import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {Gap, ItemsListMenu, ProfileTabSection} from '../../components';
import {uploadPhotoAction} from '../../redux/action';
import {getData} from '../../utils';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [photo, setPhoto] = useState('');

  const dispatch = useDispatch();

  const addPhoto = () => {
    const option = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 200,
      maxHeight: 200,
    };

    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('user cencel');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        console.log('data res :', data);

        const dataImage = {
          uri: data.uri,
          type: data.type,
          name: data.fileName,
        };

        dispatch(uploadPhotoAction(dataImage, userProfile));
        setPhoto(data.uri);
      }
    });
  };

  useEffect(() => {
    getData('userProfile').then(res => {
      console.log('response :', res);
      setUserProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.containerPhotoDetail}>
        <View style={styles.bgPhoto}>
          <TouchableOpacity onPress={addPhoto}>
            {photo ? (
              <Image source={{uri: photo}} style={styles.photo} />
            ) : (
              <Image
                source={{uri: userProfile.profile_photo_url}}
                style={styles.photo}
              />
            )}
          </TouchableOpacity>
        </View>
        <Gap height={10} />
        <Text style={styles.nama}>{userProfile.name}</Text>
        <Text style={styles.username}>{userProfile.email}</Text>
      </View>

      <View style={styles.containerMenu}>
        <Text style={styles.titleSection}>Akun Saya</Text>
        <View style={styles.bodySection}>
          <ItemsListMenu nama="Profile Saya" />
        </View>
        <Text style={styles.titleSection}>Seputar Semangat Bantu</Text>
        <View style={styles.bodySection}>
          <ItemsListMenu nama="Tentang Semangat Bantu" />
          <ItemsListMenu nama="Syarat dan Ketentuan" />
          <ItemsListMenu nama="Kebijakan Privasi" />
          <ItemsListMenu nama="Legalitas" />
          <ItemsListMenu nama="Tim Kami" />
        </View>
        <Gap height={15} />
        <ItemsListMenu nama="Keluar" color="red" />
      </View>

      {/* <View style={styles.tabContainer}>
        <ProfileTabSection />
      </View> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  tabContainer: {flex: 1},
  containerPhotoDetail: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginBottom: 6,
  },
  bgPhoto: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,
  },
  nama: {fontFamily: 'Roboto-Bold', fontSize: 18, fontWeight: '800'},
  username: {fontFamily: 'Roboto-Reguler', fontSize: 16},
  titleSection: {
    marginLeft: 10,
    fontFamily: 'Poppins-Medium',
    marginVertical: 6,
    fontSize: 16,
    color: '#020202',
  },
});
