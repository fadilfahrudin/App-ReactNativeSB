import Axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  //use state local
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  //custome hook useState
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  //dns ip dari android 10.0.2.2 dan port localhost 8000
  const onSubmit = () => {
    Axios.post('http://10.0.2.2:8000/api/login', form)
      .then(result => {
        console.log('success', result);
      })
      .catch(err => {
        console.log('error', err);
      });
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
});
