import React, {useState} from 'react';
import {View, Text, Pressable, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import Header from '../../components/header';
import {calHeight, calWidth} from '../../caldimens';
import {fonts, colors} from '../../enums';

const More = props => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const btnClicked = () => {
    axios
      .get('http://18.142.135.121/pos/uat/public/api/get_category_list')
      .then(res => {
        setCategories(res.data.result.categories);
      })
      .catch(error => console.log(error));
    setShow(!show);
  };
  return (
    <View style={styles.mainContainer}>
      <Header title="More" navigation={props.navigation} />
      <View style={styles.container}>
        <Text style={styles.textStyle}>More Page</Text>
        <Pressable onPress={btnClicked} style={styles.btn}>
          <Text style={(styles.textStyle, {color: colors.white})}>
            Show names
          </Text>
        </Pressable>
        <View style={styles.flatBlock}>
          {show && (
            <FlatList
              data={categories}
              renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name}</Text>;
              }}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  btn: {
    backgroundColor: colors.primaryColor,
    padding: 8,
    margin: 7,
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 16,
    color: colors.labelFontColor,
    fontFamily: fonts.regular,
  },
  flatBlock: {
    height: '20%',
  },
});

export default More;
