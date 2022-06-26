import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react';

const Select = () => {
  return (
    <View>
      <Text style={styles.label}>Select</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={selectedLanguage}
        // onValueChange={(itemValue, itemIndex) =>
        //   setSelectedLanguage(itemValue)
        // }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
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
