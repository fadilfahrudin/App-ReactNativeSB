import {
  DrawerLayoutAndroid,
  DrawerLayoutAndroidComponent,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DummyProgram, IcBack, IcBackWhite, IcCeklist} from '../../asset';
import {Button, Gap} from '../../components';
import * as Progress from 'react-native-progress';

const ProgramDetail = () => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView stickyHeaderIndices={[1]}>
        <View>
          <ImageBackground source={DummyProgram} style={styles.cover}>
            <TouchableOpacity style={styles.icBack}>
              <IcBackWhite />
              <Text style={{color: 'white', marginLeft: 5}}>Kembali</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.headlineContainer}>
          <View>
            <Text style={styles.judul}>Bersama Semangat Bantu Palestina</Text>
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
                  <Text style={styles.by}>Semangatbantu.com</Text>
                  <IcCeklist style={{marginLeft: 2}} />
                </View>
              </View>
              <Text>28 hari lagi</Text>
            </View>
            <Gap height={5} />
            <Progress.Bar
              progress={0.7}
              width={352}
              height={3}
              color={'rgba(0, 80, 255, 1)'}
            />

            <View style={styles.containerInfoNominal}>
              <Text style={styles.lableNominal}>Terkumpul</Text>
              <Text style={styles.nominal}>Rp,90.000.000</Text>
              <Text style={styles.infoNominal}>dari Rp,100.000.000</Text>
            </View>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              fontFamily: 'Roboto',
              fontSize: 10,
            }}>
            <Text style={{fontWeight: 'bold'}}>Deskripsi</Text>
            <Text>10 Juni 2022</Text>
          </View>
          <View>
            <Text>
              Assalamu’alaikum Warahmatullahi Wabarakatuh.. Al-Qur’an adalah
              lentera bagi sebuah peradaban. Terang gelapnya sebuah negeri di
              hadapan Allah tergantung ada atau tidaknya Ahlul Qur’an di
              dalamnya. Ahlul Qur’an adalah mereka yang menjadikan Al-Qur’an ada
              di hati, pikiran, lisan dan perbuatan. Oleh karen itu, harus ada
              sinergi yang kuat di tengah-tengah umat untuk menjaga sinar-sinar
              kebaikan itu tetap memancar dan menjadikan Indonesia sebagai
              negeri yang diberkahi oleh Allah Subhanahu Wa Ta’ala.
            </Text>
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Image
                source={DummyProgram}
                style={{
                  width: 230,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <Text>
              Maskanul Huffadz adalah sebuah yayasan sosial yang berkomitmen
              untuk menjadi wadah bagi generasi muda Islam Indonesia agar kelak
              mereka menjadi penjaga kalam-Nya yang akan menyebar ke seluruh
              pelosok Indonesia bahkan dunia untuk menyebarkan risalah ini.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          text={'Bagikan'}
          color="white"
          textColor="#0050FF"
          width={100}
          height={50}
          elevation={5}
        />
        <Button
          text={'Donasi'}
          textColor="white"
          width={200}
          elevation={5}
          height={50}
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
    paddingHorizontal: 30,
    paddingTop: 48,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bodyContainer: {
    backgroundColor: 'white',
    paddingBottom: 50,
    paddingHorizontal: 30,
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
});
