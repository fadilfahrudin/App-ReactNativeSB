import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Gap,
  Header,
  Loading,
  Select,
  Switch,
  TextArea,
  TextInput,
} from '../../components';
import {getData, useForm} from '../../utils';
import Axios from 'axios';
import {API_HOST} from '../../config';
import {WebView} from 'react-native-webview';

const Checkout = ({navigation, route}) => {
  const {item, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  useEffect(() => {
    getData('token').then(result => {
      // console.log('token: ', result);
      setToken(result.value);
    });
  }, []);
  const [form, setForm] = useForm({
    amount_final: '',
    doa_donatur: '',
    bank_transfer: '',
  });

  const onSubmit = () => {
    const data = {
      program_id: item.id,
      title: item.title,
      program_by: item.program_by,
      banner_program: item.banner_program,
      user_id: userProfile.id,
      amount_final: form.amount_final,
      doa_donatur: form.doa_donatur,
      status: 'pending',
      bank_transfer: form.bank_transfer,
    };

    // console.log('data transaksi: ', data);
    Axios.post(`${API_HOST.url}/checkout`, data, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => {
        // console.log('checkout success', response.data);
        if (response.data.data.bank_transfer == 'midtrans') {
          setIsPaymentOpen(true);
          setPaymentURL(response.data.data.payment_url);
        }
      })
      .catch(err => {
        console.log('error: ', err);
      });
  };

  const OnNavChange = state => {
    console.log('nav: ', state);
    const urlSuccess = '';
    //Testing Sementara pakai internet tepat karena blm di hosting
    const urlWeb = 'https://mercusuar.uzone.id/';
    if (state.url === urlWeb) {
      navigation.replace('MainApp', {screen: 'Donasi Saya'});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title={'Pembayaran Donasi Program'}
          subTitle={item.title}
          onBack
          onPress={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={OnNavChange}
        />
      </>
    );
  }
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Pembayaran Donasi Program'}
        subTitle={item.title}
        onBack
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bodyContainer}>
          <View>
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

            <Gap height={15} />

            <View style={styles.bank}>
              <Select
                label="Pilih Metode Pembayaran"
                value={form.bank_transfer}
                onSelectChange={value => setForm('bank_transfer', value)}
              />
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
      </ScrollView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 30,
    paddingVertical: 20,
    flex: 1,
  },

  bodyTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
