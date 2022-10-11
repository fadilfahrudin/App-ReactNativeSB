import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {useState} from 'react';

const Select = ({label, value, onSelectChange}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          <Picker.Item label="--Pilih--" />
          <Picker.Item label="Midtrans" value="midtrans" />
          <Picker.Item label="Bank Syariah Indonesia" value="7128976" />
          <Picker.Item label="Bank Mandiri" value="114001235678" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Reguler', color: '#020202'},
  input: {borderWidth: 1, borderColor: '#020202', borderRadius: 8, padding: 1},
});
