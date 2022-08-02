import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextArea = ({lable, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{lable}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Reguler', color: '#020202'},
  input: {
    height: 96,
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
  },
});
