import React, {useState} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import axios from 'axios';
import Header from '../../components/header';

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
    console.log('Categories:', categories);
    setShow(!show);
  };
  return (
    <View style={{backgroundColor: '#E5E5E5'}}>
      <Header title="More" navigation={props.navigation} />
      <View
        style={{
          paddingVertical: 200,
          alignItems: 'center',
          height: '100%',
        }}>
        <Text style={{fontSize: 16}}>More Page</Text>
        <Pressable
          onPress={btnClicked}
          style={{backgroundColor: 'grey', padding: 5, borderRadius: 8}}>
          <Text style={{fontSize: 16}}>Show names</Text>
        </Pressable>
        {show && (
          <FlatList
            data={categories}
            renderItem={({item}) => {
              return <Text style={{fontSize: 16}}>{item.name}</Text>;
            }}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default More;
