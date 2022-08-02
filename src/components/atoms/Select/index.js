import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {useState} from 'react';

const Bank = ({title}) => <Text>{title}</Text>;

const Select = ({label}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Bank Syariah Indonesia" value="bsi" />
          <Picker.Item label="Bank Mandiri" value="mandiri" />
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
