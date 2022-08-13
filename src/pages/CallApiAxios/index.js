import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const CallApiAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    job: '',
    name: '',
  });

  const getData = () => {
    //dgn axios tidk perlu mengubah dari respon ke json, karean default axios json
    Axios.get('https://reqres.in/api/users/3')
      .then(result => {
        setDataUser(result.data.data);
      })
      .catch(err => console.loh('err: ', err));
  };

  const postData = () => {
    //object
    const dataForApi = {
      name: 'morpheus',
      job: 'leader',
    };

    Axios.post('https://reqres.in/api/users', dataForApi) //body property (obj) bisa di input langsung
      .then(result => {
        setDataJob(result.data);
      })
      .catch(err => console.log('err:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CallApiAxios</Text>
      <Button title="Get Data" onPress={getData} />
      <Text>response get data</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="Post Data" onPress={postData} />
      <Text>response get data</Text>
      <Text>{dataJob.job}</Text>
      <Text>{dataJob.name}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default CallApiAxios;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 1, backgroundColor: 'black', marginVertical: 10},
  avatar: {height: 100, width: 100, borderRadius: 100},
});
