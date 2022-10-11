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
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {IcBackWhite, IcCeklist} from '../../asset';
import {Button, Gap, Number, ProgressBarr} from '../../components';
import {getData} from '../../utils';

const moment = extendMoment(Moment);

const ProgramDetail = ({navigation, route}) => {
  const {width} = useWindowDimensions();
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
  const start = new Date();
  const end = new Date(end_program);
  const range = moment.range(start, end);
  const formatDate = range.diff('days');

  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getData('userProfile').then(result => {
      // console.log('user :', result);
      setUserProfile(result);
    });
  }, []);

  const source = {
    html: `${description}`,
  };
  // console.log('deskripsi :', description);

  const onOrder = () => {
    const data = {
      item: {
        id: id,
        title: title,
        banner_program: banner_program,
        program_by: program_by,
      },
      userProfile,
    };
    // console.log('on order data: ', data);
    navigation.navigate('Checkout', data);
  };

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
              <Number number={collage_amount} style={styles.nominal} />
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
          onPress={onOrder}
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
    paddingBottom: 100,
    paddingHorizontal: 30,
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
  p: {marginBottom: -50},
});
