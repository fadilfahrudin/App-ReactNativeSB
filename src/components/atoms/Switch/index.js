import {StyleSheet, Text, View, Switch as SwitchRN} from 'react-native';
import React, {useState} from 'react';
import Gap from '../Gap';

const Switch = ({lable}) => {
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable(previouseState => !previouseState);

  return (
    <View style={styles.switchContainer}>
      <Text>{lable}</Text>
      <Gap width={10} />
      <SwitchRN
        trackColor={{false: '#7392D4', true: '#0050FF'}}
        thumbColor={isEnable ? '#0D3DA5' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnable}
      />
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  switchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
});
