import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';

import {setLoading, signUpAction} from '../../redux/action';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    no_wa: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const dispatch = useDispatch();
  // const registerReducer = useSelector(state => state.registerReducer);

  const onSubmit = () => {
    dispatch({type: 'SET_REGISTER', value: form});
    // console.log('form :', form);
    dispatch(setLoading(true));
    dispatch(signUpAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <Header
        title={'Daftar'}
        subTitle={'untuk menebarkan jutaan manfaat'}
        onBack //Button Back
        onPress={() => navigation.navigate('SignIn')}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <TextInput
            label={'Nama'}
            placeholder={'Masukan nama kamu'}
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={14} />
          <TextInput
            label={'No. WhatsApp'}
            placeholder={'Masukan nomor whatsapp kamu'}
            value={form.no_wa}
            onChangeText={value => setForm('no_wa', value)}
          />
          <Gap height={14} />
          <TextInput
            label={'Email'}
            placeholder={'Masukan email kamu'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={14} />
          <TextInput
            label={'Password'}
            placeholder={'Masukan password kamu'}
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={14} />

          <TextInput
            label={'Password Konfirmasi'}
            placeholder={'Masukan password kamu lagi'}
            value={form.password_confirmation}
            onChangeText={value => setForm('password_confirmation', value)}
            secureTextEntry
          />
          {/* <Gap height={25} /> */}
          {/* <Select /> fitur select */}
          <Gap height={20} />
          <Button
            text={'Daftar'}
            color={'#0050FF'}
            textColor={'#FFFFFF'}
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginTop: 24,
    flex: 1,
  },

  page: {flex: 1},
});
