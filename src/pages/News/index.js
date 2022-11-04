import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {Header, NewsCard} from '../../components';
import {getNews} from '../../redux/action';

const News = ({navigation, route}) => {
  const {program_id, title} = route.params;
  const dispatch = useDispatch();
  const nav = useNavigation();
  const {news} = useSelector(state => state.newsReducer);

  useEffect(() => {
    nav.addListener('focus', () => {
      dispatch(getNews(program_id));
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header
        onBack
        onPress={() => navigation.goBack()}
        title={'Berita Terkini'}
        subTitle={title}
      />

      {news.length < 0 ? (
        <Text>Saat ini kamu belum ada berita terbaru</Text>
      ) : (
        <View>
          <FlatList
            key={item => item.distributed_date}
            data={news}
            renderItem={({item}) => (
              <NewsCard
                key={item.distributed_date}
                danaPencairan={item.amount}
                picture={{uri: item.picture}}
                tglDistribusi={item.distributed_date}
                title={item.title}
                onPress={() => navigation.navigate('News Detail', item)}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});
