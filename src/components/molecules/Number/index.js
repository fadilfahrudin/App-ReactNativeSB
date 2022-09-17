import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';

const Number = ({number, style}) => {
  return (
    <NumericFormat
      value={number}
      thousandSeparator=","
      type="text"
      renderText={value => <Text style={style}>{value}</Text>}
      displayType="text"
      prefix="Rp."
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
