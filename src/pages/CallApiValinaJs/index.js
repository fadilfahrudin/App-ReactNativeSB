import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const CallApiVanilaJs = () => {
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

  useEffect(() => {
    // //call api dengan methode get
    // fetch('https://reqres.in/api/users/2') //methode default get
    //   .then(response => response.json()) //dari response parshing ke json
    //   .then(json => console.log(json)); //panggil json
    // //call api dengan methode post
    // //object
    // const dataForApi = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('ini data object:', dataForApi);
    // console.log(
    //   'data yang sudah di ubah ke stringify:',
    //   JSON.stringify(dataForApi),
    // );
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForApi), //dari object di ubah ke string
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('post response', json);
    //   });
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2') //methode default get
      .then(response => response.json()) //dari response parshing ke json
      .then(json => {
        //panggil isi json
        console.log(json);
        setDataUser(json.data);
      }); //panggil json
  };

  const postData = () => {
    //call api dengan methode post
    // //object
    const dataForApi = {
      name: 'morpheus',
      job: 'leader',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForApi), //dari object di ubah ke string
    })
      .then(response => response.json()) //parsing dari response ke json
      .then(json => {
        console.log('post response', json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CallApiVanilaJs</Text>
      <Button title="Get Data" onPress={getData} />
      <Text>response get data</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
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

export default CallApiVanilaJs;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 1, backgroundColor: 'black', marginVertical: 10},
  avatar: {height: 100, width: 100, borderRadius: 100},
});
