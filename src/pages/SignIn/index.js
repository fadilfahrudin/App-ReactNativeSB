import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, Popup, TextInput} from '../../components';
import {signInAction} from '../../redux/action/auth';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  // Pop up modal state
  const [isVisible, setVisible] = useState(true);

  // handle modal
  const handleModal = e => {
    setVisible(e);
  };

  const dispatch = useDispatch();

  //note:
  //dns ip dari android 10.0.2.2

  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Semangat Sedekah Bantu Sesama" />

      <View style={styles.container}>
        <TextInput
          label="Email"
          placeholder="Masukan email kamu"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Masukan password kmau"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={25} />
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          text="Daftar"
          color="#7392D4"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>

      <Modal
        isVisible={isVisible}
        animationIn={'bounceIn'}
        animationInTiming={2000}
        animationOut={'bounceOutRight'}
        animationOutTiming={1000}>
        <View style={styles.wrapperModal}>
          <Text style={styles.h1}>Attention⚠️</Text>
          <View style={styles.lineModal} />
          <Text style={styles.p}>
            Aplikasi Semangat Bantu saat ini masih dalam tahap testing masih
            perlu dilakukan pengembangan lebih lanjut terutama pada sistem
            <Text style={styles.b}> transaksinya</Text>. Jika kamu ingin
            melakukan donasi yang sesungguhnya bisa langsung kunjungi website
            <Text style={styles.b}> www.semangatbantu.com</Text>
          </Text>

          <Text style={styles.p}>
            Silahkan tekan <Text style={styles.b}>Lanjutkan</Text> pada tombol
            di bawah untuk melakukan testing aplikasi 😊
          </Text>
          <Button
            onPress={() => handleModal(false)}
            text="Lanjutkan"
            textColor="#0D3DA5"
            color="#D9D9D9"
            width={120}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },

  page: {flex: 1},

  wrapperModal: {
    backgroundColor: '#7392D4',
    marginVertical: 160,
    flex: 1,
    borderRadius: 20,
    padding: 17,
    alignItems: 'center',
  },
  lineModal: {
    height: 1,
    width: 130,
    backgroundColor: '#D9D9D9',
    marginTop: 10,
    marginBottom: 8,
  },

  h1: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: 20,
    color: '#FFFFFF',
  },

  p: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFFFFF',
    marginHorizontal: 5,
  },

  btnLanjutkan: {
    width: 74,
    height: 22,
    backgroundColor: '#D9D9D9',
    color: '#0D3DA5',
    fontSize: 18,
    fontWeight: 'bold',
  },
  b: {fontWeight: 'bold'},
});
