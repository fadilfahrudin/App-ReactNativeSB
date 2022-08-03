import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import React, {useState} from 'react';
import {Button, Gap, Header, TabProgram, TextInput} from '../../components';
import {BankBsi, DummyProgram, IcCeklist, IcChat, IcForward} from '../../asset';
import Modal from 'react-native-modal';

const OrderSummary = ({navigation}) => {
  const copyNorek = () => {
    Clipboard.setString('7111085310');
  }; //copy norek

  const copyNominalDonasi = () => {
    Clipboard.setString('10000');
  }; //copy nominal donasi

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <Header
        title="Intruksi Donasi"
        subTitle="Program Semangat Sedekah Subuh"
        onBack
        onPress={() => navigation.navigate('ProgramDetail')}
      />

      <View style={styles.page}>
        <Gap height={12} />

        <View>
          <View style={styles.mainContent}>
            <Text style={styles.title}>Batas waktu pembayaran</Text>
            <Text style={styles.subTitle}>2 jan 2022 16:19 WIB</Text>
          </View>

          <View style={styles.mainContent}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>Transfer Bank</Text>
              <BankBsi />
            </View>

            <Gap height={6} />

            <View style={styles.itemTransaksi}>
              <View>
                <Text style={styles.subTitleTransaksi}>An. Semangat Bantu</Text>
                <Gap height={5} />
                <Text style={styles.titleTransaksi}>711 1085 317</Text>
              </View>
              <Button
                text={'SALIN'}
                width={90}
                height={40}
                onPress={copyNorek}
              />
            </View>
            <Gap height={10} />
            <View style={styles.itemTransaksi}>
              <View>
                <Text style={styles.subTitleTransaksi}>Jumlah Donasi</Text>
                <Gap height={5} />
                <Text style={styles.titleTransaksi}>Rp10.000.000</Text>
              </View>
              <Button
                text={'SALIN'}
                width={90}
                height={40}
                onPress={copyNorek}
              />
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.bantuan} onPress={toggleModal}>
              <Text style={styles.bantuanTitle}>Bantuan</Text>
              <IcForward />
            </TouchableOpacity>

            <Modal
              isVisible={isModalVisible}
              onSwipeComplete={() => setModalVisible(false)}
              swipeDirection="down"
              onModalHide={() => setModalVisible()}>
              <View style={{backgroundColor: 'white'}}>
                <Text> atm mandiri</Text>
              </View>
            </Modal>
          </View>

          <View style={styles.infoProgram}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProgramDetail')}>
              <Image source={DummyProgram} style={styles.img} />
            </TouchableOpacity>
            <View
              style={{
                overflow: 'hidden',
                width: 270,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProgramDetail')}>
                <Text style={styles.infoProgramTitle}>
                  Bersama Semangat Bantu Selamatkan Al-Quds #SavePalestine
                </Text>
              </TouchableOpacity>
              <Gap height={5} />
              <Text>Pemilik Program</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontFamily: 'Roboto-Medium'}}>
                  Semangatbantu.com
                </Text>
                <IcCeklist />
              </View>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonEx}
              onPress={() => navigation.navigate('Home')}>
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
  title: {fontFamily: 'Roboto-Bold', fontSize: 16, fontWeight: '600'},
  subTitle: {fontSize: 14, fontWeight: '400'},
  itemTransaksi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleTransaksi: {
    backgroundColor: '#D9D9D999',
    paddingRight: 100,
    paddingLeft: 10,
    paddingVertical: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 5,
  },
  subTitleTransaksi: {
    fontFamily: 'Roboto-Medium',
    fontSize: 11,
    fontWeight: '400',
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
