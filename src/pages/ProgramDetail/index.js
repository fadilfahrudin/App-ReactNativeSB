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
  Switch,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {IcBackWhite} from '../../asset';
import {
  Button,
  Gap,
  TextInput,
  TextArea,
  Loading,
  Header,
  HeadlineProgramInfo,
  // Switch,
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
      setUserProfile(result);
    });
  }, []);

  // Toggle Switch Anonim Function
  const [isAnonim, setAnonim] = useState(false);
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => {
    setIsEnable(previouseState => !previouseState);

    if (isEnable === false) {
      // ketika isEnable false dan toggle onpush  menjadi => true
      setAnonim('Anonim');
    } else {
      // ketika isEnable True dan toggle onpush  menjadi => false
      setAnonim(userProfile.name);
    }
    return isAnonim;
  };

  //get Token
  useEffect(() => {
    getData('token').then(result => {
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

  // Clsose Modal
  const closeModal = () => {
    setForm('doa_donatur', '');
    setModalVisible(false);
    setIsEnable(false);
    setAnonim(false);
  };

  // Button Berita
  const onNews = () => {
    const data = {
      program_id: id,
      title,
    };
    navigation.navigate('News', data);
  };

  // Message
  const [message, setMessage] = useState(false);

  // On Submit Function
  const onSubmit = () => {
    const data = {
      program_id: id,
      title: title,
      program_by: program_by,
      banner_program: banner_program,
      user_id: userProfile.id,
      phone_user: userProfile.no_wa,
      user_name: isAnonim,
      user_email: userProfile.email,
      amount_final: form.amount_final,
      doa_donatur: form.doa_donatur,
      status: 'pending',
      bank_transfer: 'midtrans',
    };

    if (form.amount_final === '') {
      setMessage(true);

      setTimeout(() => {
        setMessage(false);
      }, 3000);
    }

    // send to API
    Axios.post(`${API_HOST.url}/checkout`, data, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => {
        setIsPaymentOpen(true);
        setPaymentURL(response.data.data.payment_url);
      })
      .catch(err => {
        console.log('error: ', err);
      });
  };

  // ketika state navigasi berubah
  const OnNavChange = state => {
    // console.log('nav: ', state);
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      setTimeout(() => {
        navigation.replace('MainApp', {screen: 'Donasi Saya'});
      }, 500);
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
              <Text style={styles.kembali}>Kembali</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <HeadlineProgramInfo
          title={title}
          collage_amount={collage_amount}
          formatDate={formatDate}
          program_by={program_by}
          target_amount={target_amount}
        />

        {/* Body  */}
        <View style={styles.bodyContainer}>
          <View style={styles.menuView}>
            <Text style={styles.deskripsi}>Deskripsi</Text>
            <TouchableOpacity onPress={onNews}>
              <Text style={styles.berita}>Berita</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentDeskripsi}>
            <RenderHTML source={source} contentWidth={width} />
          </View>
        </View>

        <Modal
          onSwipeComplete={closeModal}
          isVisible={isModalVisible}
          swipeDirection="down"
          swipeThreshold={220}
          animationInTiming={1000}
          propagateSwipe
          onModalHide={() => setForm('amount_final', '')}
          onModalShow={() => setAnonim(userProfile.name)}
          style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.lineModal} />
            <ScrollView>
              <Text style={styles.headlineModal}>
                Tentukan donasi terbaikmu
              </Text>

              <TextInput
                label={
                  message ? (
                    <Text style={styles.dangger}>Masukan nominal donasi</Text>
                  ) : null
                }
                placeholder="Rp"
                keyboardType={'numeric'}
                value={form.amount_final}
                onChangeText={value => setForm('amount_final', value)}
              />
              <Text>Min. donasi sebesar Rp5.000</Text>
              <Gap height={15} />
              <TextArea
                lable="Kirim Do'a"
                placeholder="Sampaikan doa terbaikmu.."
                value={form.doa_donatur}
                onChangeText={value => setForm('doa_donatur', value)}
              />
              <View style={styles.switchContainer}>
                <Text>Sembunyikan nama saya (Anonim)</Text>
                <Switch
                  trackColor={{false: '#7392D4', true: '#0050FF'}}
                  thumbColor={isEnable ? '#0D3DA5' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnable}
                />
              </View>
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
  cover: {height: 250},
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

  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dangger: {
    color: 'red',
    paddingTop: 10,
  },
  deskripsi: {fontWeight: 'bold', marginRight: 10},
  berita: {
    backgroundColor: '#0050FF',
    borderRadius: 5,
    color: 'white',
    padding: 5,
    fontFamily: 'Poppins-Reguler',
    fontWeight: 'bold',
  },
  contentDeskripsi: {
    // backgroundColor: 'yellow',
    width: '100%',
    overflow: 'hidden',
  },
  kembali: {color: 'white', marginLeft: 5},
  lineModal: {
    height: 2,
    width: 70,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  headlineModal: {
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  switchContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
});
