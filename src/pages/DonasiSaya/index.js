import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, StatusTransaksi} from '../../components';
import {getOrders} from '../../redux/action';

const DonasiSaya = ({navigation}) => {
  const dispatch = useDispatch();
  const {order} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  // console.log('order status ', order);

  return (
    <ScrollView>
      <Header title={'Donasi Saya'} subTitle="Semangat Sedekah Bantu Sesama" />
      <Text style={styles.catatan}>Catatan Kebaikan</Text>
      {order.length <= 0 ? (
        <Text style={styles.donasiNow}>
          Saat ini kamu belum menebar kebaikan{' '}
        </Text>
      ) : (
        <View>
          {order.map(itemOrder => {
            return (
              <StatusTransaksi
                key={itemOrder.id}
                image={{uri: itemOrder.program.banner_program}}
                judul={itemOrder.program.title}
                waktu={itemOrder.updated_at}
                nominal={itemOrder.amount_final}
                status={itemOrder.status}
                onPress={() => navigation.navigate('OrderSummary', itemOrder)}
              />
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

export default DonasiSaya;

const styles = StyleSheet.create({
  catatan: {
    marginTop: 5,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '500',
  },
  donasiNow: {
    color: 'red',
    textAlign: 'center',
    marginTop: 100,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '500',
  },
});
