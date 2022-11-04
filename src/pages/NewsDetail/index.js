import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import {IcBack, IcCeklist} from '../../asset';

const NewsDetail = ({navigation, route}) => {
  const {id, amount, picture, distributed_date, title, program, description} =
    route.params;
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IcBack />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Kabar Detail</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text>Program dari :</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.by}>{program.program_by}</Text>
                <IcCeklist />
              </View>
            </View>
            <Text>{distributed_date}</Text>
          </View>
          <View
            style={{
              width: '100%',
              overflow: 'hidden',
            }}>
            <RenderHTML
              source={{html: `${description}`}}
              contentWidth={width}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  header: {
    backgroundColor: '#0050FF',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingLeft: 25,
    elevation: 20,
  },
  textHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30,
  },
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  by: {fontFamily: 'Poppins-Medium', fontWeight: 'bold', fontSize: 14},
});
