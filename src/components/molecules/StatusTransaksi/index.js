import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';

const StatusTransaksi = ({image, judul, waktu, status, nominal}) => {
  const renderContent = () => {
    switch (status) {
      case 'sukses':
        return <Text style={styles.statusPembayaran('green')}>Sukses</Text>;
      case 'tertunda':
        return <Text style={styles.statusPembayaran('#FFC700')}>Tertunda</Text>;
      case 'gagal':
        return <Text style={styles.statusPembayaran('red')}>Gagal</Text>;
    }
  };

  return (
    <View style={styles.mainContent}>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <Image source={image} style={styles.img} />
          <View>
            <Text style={{fontFamily: 'Roboto-Bold', fontSize: 14}}>
              {judul}
            </Text>
            <View style={styles.info}>
              <Text>{waktu} lalu</Text>
              <Gap width={5} />
              <Text style={{fontWeight: 'bold', fontSize: 20}}>|</Text>
              <Gap width={5} />
              <Text style={{fontFamily: 'Roboto-Bold'}}>{nominal}</Text>
            </View>
          </View>
        </View>
        {renderContent()}
      </View>
    </View>
  );
};

export default StatusTransaksi;

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: 'white',
    marginTop: 2,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContent: {flexDirection: 'row', width: 200, alignItems: 'center'},
  img: {width: 90, height: 90, resizeMode: 'cover', marginRight: 13},
  info: {flexDirection: 'row', alignItems: 'center'},
  statusPembayaran: statusColor => ({
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: statusColor,
    height: 30,
    borderRadius: 15,
    color: 'white',
  }),
});
