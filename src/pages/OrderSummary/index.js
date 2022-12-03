import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import {IcCeklist, IcChat} from '../../asset';
import {Button, Gap, Header, Loading, Number} from '../../components';

const OrderSummary = ({route, navigation}) => {
  const order = route.params;
  const [showWebView, setShowWebView] = useState(false);

  const renderContent = () => {
    switch (order.status) {
      case 'success':
        return <Text style={styles.statusPembayaran('#1ABC9C')}>SUKSES</Text>;
      case 'pending':
        return <Text style={styles.statusPembayaran('#FFC700')}>TERTUNDA</Text>;
      case 'expired':
        return <Text style={styles.statusPembayaran('#EC413D')}>BERAKHIR</Text>;
    }
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

  if (showWebView) {
    return (
      <>
        <Header
          title={'Pembayaran Donasi Program'}
          subTitle={order.program.title}
          onBack
          onPress={() => setShowWebView(false)}
        />
        <WebView
          source={{uri: order.payment_url}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={OnNavChange}
        />
      </>
    );
  }

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <Header
        title="Intruksi Donasi"
        subTitle={order.program.title}
        onBack
        onPress={() => navigation.goBack()}
      />

      <View style={styles.page}>
        <Gap height={12} />

        <View>
          <View style={styles.mainContent}>
            {renderContent()}
            <Text style={styles.title}>Batas waktu pembayaran</Text>
            <Text style={styles.subTitle}>{order.expired_date}</Text>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.itemTransaksi}>
              <View>
                <Text style={styles.subTitleTransaksi}>Jumlah Donasi</Text>
                <Gap height={5} />
                <Number
                  style={styles.titleTransaksi}
                  number={order.amount_final}
                />
              </View>
              {order.status === 'success' ? (
                <Button
                  disabled={true}
                  text={'Terbayar'}
                  width={150}
                  height={45}
                  onPress={() => setShowWebView(true)}
                  color={'#7392D4'}
                />
              ) : order.status === 'expired' ? (
                <Button
                  disabled={true}
                  text={'Kadaluarsa'}
                  width={150}
                  height={45}
                  onPress={() => setShowWebView(true)}
                  color={'red'}
                />
              ) : (
                <Button
                  text={'Bayar Sekarang'}
                  width={150}
                  height={45}
                  onPress={() => setShowWebView(true)}
                  color={'#0050FF'}
                />
              )}
            </View>
          </View>

          <View style={styles.infoProgram}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProgramDetail', order.program)
              }>
              <Image
                source={{uri: order.program.banner_program}}
                style={styles.img}
              />
            </TouchableOpacity>
            <View
              style={{
                overflow: 'hidden',
                width: 270,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProgramDetail', order.program)
                }>
                <Text style={styles.infoProgramTitle}>
                  {order.program.title}
                </Text>
              </TouchableOpacity>
              <Gap height={5} />
              <Text>Pemilik Program</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontFamily: 'Roboto-Medium'}}>
                  {order.program.program_by}
                </Text>
                <IcCeklist />
              </View>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonEx}
              onPress={() => navigation.navigate('MainApp', {screen: 'Home'})}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Lihat Program Lainnya
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.whatsappHelp}>
            <TouchableOpacity>
              <IcChat />
            </TouchableOpacity>
            <Gap width={10} />
            <View>
              <Text style={styles.title}>Ada kendala saat transaksi?</Text>
              <TouchableOpacity style={styles.whatsappklik}>
                <Text>Hubungi kami melalui Whatsapp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  // page: {overflow: 'hidden'},
  mainContent: {
    marginBottom: 12,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#020202',

    textAlign: 'center',
  },
  statusPembayaran: statusColor => ({
    color: statusColor,
    textAlign: 'center',
    marginBottom: 4,
  }),
  itemTransaksi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleTransaksi: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#020202',
  },
  subTitleTransaksi: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    color: '#020202',
  },
  bantuan: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bantuanTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '400',
  },
  infoProgram: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoProgramTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '700',
  },
  img: {width: 90, height: 90, resizeMode: 'cover', marginRight: 13},
  buttonEx: {
    backgroundColor: '#0050FF',
    width: 370,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    marginBottom: 12,
  },
  whatsappHelp: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  whatsappklik: {
    shadowOffset: 4,
    elevation: 4,
    backgroundColor: 'white',
    padding: 4,
    marginLeft: 20,
  },
});
