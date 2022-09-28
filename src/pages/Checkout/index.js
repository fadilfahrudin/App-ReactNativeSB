import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  Gap,
  Header,
  Select,
  Switch,
  TextArea,
  TextInput,
} from '../../components';
import {useForm} from '../../utils';

const Checkout = ({navigation, route}) => {
  const {item, userProfile} = route.params;
  const [form, setForm] = useForm({
    amount_final: '',
    doa_donatur: '',
  });

  const onSubmit = () => {
    console.log('donasi: ', form, item, userProfile);
    // navigation.replace('OrderSummary');
  };

  return (
    <View>
      <Header
        title={'Pembayaran Donasi Program'}
        subTitle={item.title}
        onBack
        onPress={() => navigation.goBack()}
      />

      <View>
        <View style={styles.formInput}>
          <View>
            <Text style={styles.bodyTitle}>Masukan Nominal Donasi</Text>
            <TextInput
              placeholder="Rp"
              keyboardType={'numeric'}
              value={form.amount_final}
              onChangeText={value => setForm('amount_final', value)}
            />
            <Text>Min. donasi sebesar Rp1.000</Text>
          </View>

          <View style={styles.bank}>
            <Select />
          </View>

          <Gap height={15} />

          <View>
            <TextArea
              lable="Kirim Do'a"
              placeholder="titipkan doa terbaikmu.."
              value={form.doa_donatur}
              onChangeText={value => setForm('doa_donatur', value)}
            />
          </View>
          <Switch lable="Sembunyikan nama saya (Anonim)" />
        </View>
        <Gap height={20} />
        <View style={{paddingHorizontal: 24}}>
          <Button text="Donasi Sekarang" onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  formInput: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 30,
    paddingVertical: 20,
  },

  bodyTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
