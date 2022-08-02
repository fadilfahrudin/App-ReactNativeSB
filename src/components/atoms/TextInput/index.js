import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, keyboardType}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        keyboardType={keyboardType}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Reguler', color: '#020202'},
  input: {borderWidth: 1, borderColor: '#020202', borderRadius: 8, padding: 10},
});
