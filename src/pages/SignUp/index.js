import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {useSelector} from 'react-redux';

const SignUp = ({navigation}) => {
  const globalState = useSelector(state => state.globalReducer);
  console.log('global state:', globalState);

  return (
    <View style={styles.page}>
      <Header
        title={'Daftar'}
        subTitle={'untuk menebarkan jutaan manfaat'}
        onBack //Button Back
        onPress={() => navigation.navigate('SignIn')}
      />
      {/* <ScrollView> fitur scroll*/}
      <View style={styles.container}>
        <Text>{`status error: ${globalState.isError}`}</Text>
        <TextInput label={'Nama'} placeholder={'Masukan nama kamu'} />
        <Gap height={16} />
        <TextInput
          label={'No. WhatsApp'}
          placeholder={'Masukan nomor whatsapp kamu'}
        />
        <Gap height={16} />
        <TextInput label={'Email'} placeholder={'Masukan email kamu'} />
        <Gap height={16} />
        <TextInput label={'Password'} placeholder={'Masukan password kamu'} />
        <Gap height={25} />
        {/* <Select /> fitur select */}
        <Gap height={25} />
        <Button
          text={'Daftar'}
          color={'#0050FF'}
          textColor={'#FFFFFF'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default SignUp;

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
