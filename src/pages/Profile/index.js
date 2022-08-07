import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyUser} from '../../asset/Dummy';
import {Gap, ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.containerPhotoDetail}>
        <View style={styles.bgPhoto}>
          <Image source={DummyUser} style={styles.photo} />
        </View>
        <Gap height={10} />
        <Text style={styles.nama}>Fadillah Fahrudin</Text>
        <Text style={styles.username}>fadilfahrudin</Text>
      </View>

      <View style={styles.tabContainer}>
        <ProfileTabSection />
      </View>
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
    marginBottom: 20,
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
});
