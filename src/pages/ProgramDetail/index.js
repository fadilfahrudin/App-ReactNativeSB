import Moment from 'moment';
import {extendMoment} from 'moment-range';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Share,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {IcBackWhite, IcCeklist} from '../../asset';
import {
  Button,
  Gap,
  Number,
  ProgressBarr,
  TextInput,
  TextArea,
  Loading,
  Header,
} from '../../components';
import {getData, useForm} from '../../utils';
import Modal from 'react-native-modal';
import Axios from 'axios';
import {API_HOST} from '../../config';
import WebView from 'react-native-webview';

const moment = extendMoment(Moment);

const ProgramDetail = ({navigation, route}) => {
  const {width} = useWindowDimensions();
  //get data
  const {
    id,
    title,
    banner_program,
    program_by,
    end_program,
    collage_amount,
    target_amount,
    description,
  } = route.params;

  //format date
  const start = new Date();
  const end = new Date(end_program);
  const range = moment.range(start, end);
  const formatDate = range.diff('days');

  //set Token
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  //set user login
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(result => {
      // console.log('user :', result);
      setUserProfile(result);
    });
  }, []);

  //get Token
  useEffect(() => {
    getData('token').then(result => {
      // console.log('token: ', result);
      setToken(result.value);
    });
  }, []);

  //share
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Yuk, kita dukung program ${title} dengan cara share program ini: https://www.semangatbantu.com/sedekahsubuh?ref=apps`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  //html deskripsi
  const source = {
    html: `${description}`,
  };

  //avtive modal donasi
  const [isModalVisible, setModalVisible] = useState(false);

  //setForm input
  const [form, setForm] = useForm({
    amount_final: '',
    doa_donatur: '',
    bank_transfer: '',
  });

  const onSubmit = () => {
    const data = {
      program_id: id,
      title: title,
      program_by: program_by,
      banner_program: banner_program,
      user_id: userProfile.id,
      phone_user: userProfile.no_wa,
      user_name: userProfile.name,
      user_email: userProfile.email,
      amount_final: form.amount_final,
      doa_donatur: form.doa_donatur,
      status: 'pending',
      bank_transfer: 'midtrans',
    };

    // console.log('data transaksi: ', data);
    Axios.post(`${API_HOST.url}/checkout`, data, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => {
        // console.log('checkout success', response.data.data);
        setIsPaymentOpen(true);
        setPaymentURL(response.data.data.payment_url);
      })
      .catch(err => {
        console.log('error: ', err);
      });
  };

  const OnNavChange = state => {
    // console.log('nav: ', state);
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      setTimeout(() => {
        navigation.replace('MainApp', {screen: 'Donasi Saya'});
      }, 5000);
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title={'Pembayaran Donasi Program'}
          subTitle={title}
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
    <SafeAreaView style={styles.page}>
      <ScrollView stickyHeaderIndices={[1]}>
        <View>
          <ImageBackground source={{uri: banner_program}} style={styles.cover}>
            <TouchableOpacity
              style={styles.icBack}
              onPress={() => navigation.goBack()}>
              <IcBackWhite />
              <Text style={{color: 'white', marginLeft: 5}}>Kembali</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.headlineContainer}>
          <View>
            <Text style={styles.judul}>{title}</Text>
            <Gap height={14} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={styles.lable}>Pemilik Program</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.by}>{program_by}</Text>
                  <IcCeklist style={{marginLeft: 2}} />
                </View>
              </View>
              <Text>{formatDate} hari lagi</Text>
            </View>
            <Gap height={5} />
            <ProgressBarr max={target_amount} value={collage_amount} />

            <View style={styles.containerInfoNominal}>
              <Text style={styles.lableNominal}>Terkumpul</Text>
              <Number
                number={collage_amount <= 0 ? 'Rp.0' : collage_amount}
                style={styles.nominal}
              />
              <Text style={styles.infoNominal}>Dari</Text>
              <Number number={target_amount} style={styles.infoNominal} />
            </View>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={{fontWeight: 'bold'}}>Deskripsi</Text>
          <View
            style={{
              // backgroundColor: 'yellow',
              width: '100%',
              overflow: 'hidden',
            }}>
            <RenderHTML source={source} contentWidth={width} />
          </View>
        </View>

        <Modal
          onSwipeComplete={() => setModalVisible(false)}
          isVisible={isModalVisible}
          swipeDirection="down"
          swipeThreshold={220}
          animationInTiming={1000}
          propagateSwipe
          style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                height: 2,
                width: 70,
                backgroundColor: 'black',
                alignSelf: 'center',
              }}
            />
            <ScrollView>
              <Text
                style={{
                  color: 'black',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 20,
                  alignSelf: 'center',
                }}>
                Masukan Nominal Donasi
              </Text>
              <TextInput
                placeholder="Rp"
                keyboardType={'numeric'}
                value={form.amount_final}
                onChangeText={value => setForm('amount_final', value)}
              />
              <Text>Min. donasi sebesar Rp1.000</Text>
              <Gap height={15} />
              <TextArea
                lable="Kirim Do'a"
                placeholder="titipkan doa terbaikmu.."
                value={form.doa_donatur}
                onChangeText={value => setForm('doa_donatur', value)}
              />
              <Gap height={25} />

              <Button text="Lanjutkan Donasi" onPress={onSubmit} />
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          text={'Bagikan'}
          color="white"
          textColor="#0050FF"
          width={100}
          height={50}
          elevation={5}
          onPress={onShare}
        />
        <Button
          text={'Donasi'}
          textColor="white"
          width={200}
          elevation={5}
          height={50}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProgramDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {height: 330},
  lable: {fontFamily: 'Roboto-Reguler', marginBottom: 1, fontSize: 10},
  by: {fontFamily: 'Roboto-Bold', fontSize: 10},
  isiLable: {fontFamily: 'Roboto-Bold', fontSize: 10},
  icBack: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 25,
    width: 100,
    padding: 10,
  },
  headlineContainer: {
    backgroundColor: 'white',
    marginTop: -60,
    paddingHorizontal: 10,
    paddingTop: 48,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  bodyContainer: {
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingHorizontal: 10,
    // alignItems: 'center',
  },
  judul: {fontFamily: 'Roboto-Bold', fontSize: 18},
  containerInfoNominal: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    paddingBottom: 10,
    paddingTop: 5,
    fontSize: 10,
    marginBottom: 24,
  },
  lableNominal: {fontFamily: 'Roboto-Reguler'},
  nominal: {fontFamily: 'Roboto-Bold', marginLeft: 4},
  infoNominal: {fontFamily: 'Roboto-Reguler', marginLeft: 8},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },

  modalContainer: {
    margin: 0,
    marginTop: '75%',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flexGrow: 1,
  },
});
