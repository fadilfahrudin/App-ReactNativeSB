import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Gap, Header} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {uploadPhotoAction} from '../../redux/action';
import {getData} from '../../utils';

const DetailProfile = ({navigation}) => {
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
    <View style={{flex: 1}}>
      <Header
        title={'Detail'}
        subTitle={'Profile Anda'}
        onBack
        onPress={() => navigation.goBack()}
      />
      <Gap height={10} />

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
      </View>
      <Gap height={10} />
      <View style={styles.containerData}>
        <View style={styles.containerItem}>
          <Text style={styles.titleText}>Nama Lengkap</Text>
          <Text style={styles.name}>{userProfile.name}</Text>
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.titleText}>Email</Text>
          <Text style={styles.name}>{userProfile.email}</Text>
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.titleText}>Nomor Handphone</Text>
          <Text style={styles.name}>{userProfile.no_wa}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailProfile;

const styles = StyleSheet.create({
  containerPhotoDetail: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    marginBottom: 6,
  },
  bgPhoto: {
    borderWidth: 2,
    borderColor: '#7392D4',
    // backgroundColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 120,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  containerData: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
  },
  containerItem: {marginVertical: 5},
  name: {fontFamily: 'Poppins-Medium', fontSize: 16, color: '#020202'},
  titleText: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#8D92A3',
  },
});
