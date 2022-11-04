import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({
  text,
  color = '#0050FF',
  textColor = '#FFFFFF',
  onPress,
  width,
  height,
  elevation,
  disabled,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} disabled={disabled} onPress={onPress}>
      <View style={styles.container(color, width, height, elevation)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color, width, height, elevation, paddingVertical) => ({
    backgroundColor: color,
    paddingVertical: 12,
    borderRadius: 10,
    width: width,
    height: height,
    elevation: elevation,
  }),
  text: color => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
});
