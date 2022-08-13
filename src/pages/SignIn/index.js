import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Semangat Sedekah Bantu Sesama" />
      <View style={styles.container}>
        <TextInput label="Email" placeholder="Masukan email kamu" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Masukan password kmau" />
        <Gap height={25} />
        <Button
          text="Sign In"
          onPress={() => navigation.navigate('LocalAPI')}
        />
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
