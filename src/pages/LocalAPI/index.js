import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const Item = ({nama, email, job, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://gravatar.com/avatar/48c47102d85eff26f7c4465319718c83?s=400&d=retro&r=x`,
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.des}>
        <Text style={styles.desNama}>{nama}</Text>
        <Text style={styles.desEmail}>{email}</Text>
        <Text style={styles.desJob}>{job}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.hapus}>X Hapus</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      nama,
      email,
      job,
    };
    // console.log('data testing', data);

    if (button === 'Simpan') {
      //noted: 10.0.2.2 adalah ip hp emulator
      Axios.post('http://10.0.2.2:3004/users', data).then(result => {
        console.log('hasil dari: ', result);
        setNama('');
        setEmail('');
        setJob('');
        getData();
      });
    } else if (button === 'Update') {
      Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data).then(
        result => {
          console.log('hasil dari: ', result);
          setNama('');
          setEmail('');
          setJob('');
          getData();
          setButton('Simpan');
        },
      );
    }
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then(result => {
      console.log('data users :', result);
      setUsers(result.data);
    });
  };

  const selectItem = item => {
    console.log('yang di pilih: ', item);
    setSelectedUser(item);
    setNama(item.nama);
    setEmail(item.email);
    setJob(item.job);
    setButton('Update');
  };

  const deleteItem = item => {
    console.log(item);
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then(result => {
      console.log('result : ', result);
      getData();
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>LocalAPI JSON Server</Text>
        <View style={styles.gap} />
        <Text style={styles.textTitle}>Input Data</Text>
        <View style={styles.gap} />
        <TextInput
          placeholder="Masukan Nama"
          style={styles.input}
          value={nama}
          onChangeText={value => setNama(value)}
        />
        <TextInput
          placeholder="email"
          style={styles.input}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          placeholder="job"
          style={styles.input}
          value={job}
          onChangeText={value => setJob(value)}
        />
        <Button title={button} onPress={submit} />
        <View style={styles.line} />

        {users.map(user => {
          return (
            <Item
              key={user.id}
              nama={user.nama}
              email={user.email}
              job={user.job}
              onPress={() => selectItem(user)}
              onDelete={() =>
                Alert.alert('Peringatan', 'Yakin ingin menghapus akun ini?', [
                  {text: 'Tidak', onPress: () => console.log('button tidak')},
                  {text: 'Ya', onPress: () => deleteItem(user)},
                ])
              }
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  input: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  gap: {height: 10},
  line: {marginVertical: 10, borderWidth: 1},
  avatar: {width: 80, height: 80},
  itemContainer: {marginVertical: 20, flexDirection: 'row'},
  des: {marginLeft: 18, flex: 1},
  desNama: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  desEmail: {color: 'blue', fontSize: 14, fontWeight: '400', marginTop: 8},
  desJob: {color: 'black', fontSize: 14, fontWeight: '400', marginTop: 3},
  hapus: {color: 'red', fontSize: 12, fontWeight: 'bold'},
});
