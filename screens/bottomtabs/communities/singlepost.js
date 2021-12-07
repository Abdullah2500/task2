import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../../enums';
import Header from '../../../components/header';
import {calHeight, calWidth} from '../../../caldimens';

const SinglePost = props => {
  const {name, address, about, short_description, long_description} =
    props.route.params;
  const [index, setIndex] = useState(1);
  const tabs = [
    {
      id: 1,
      name: 'About',
    },
    {
      id: 2,
      name: 'Short_Desc',
    },
    {
      id: 3,
      name: 'Long_Desc',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          paddingHorizontal: calWidth(7),
        }}
        onPress={() => setIndex(item.id)}>
        <Text
          style={item.id == index ? styles.selectedTab : styles.unselectedTab}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const About = () => {
    return (
      <View>
        <Text style={styles.paraText}>{about}</Text>
      </View>
    );
  };
  const Short_Desc = () => {
    return (
      <View>
        <Text style={styles.paraText}>{short_description}</Text>
      </View>
    );
  };
  const Long_Desc = () => {
    return (
      <View>
        <Text style={styles.paraText}>{long_description}</Text>
      </View>
    );
  };

  const switchFunc = () => {
    switch (index) {
      case 1:
        return <About />;
      case 2:
        return <Short_Desc />;
      case 3:
        return <Long_Desc />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header navigation={props.navigation} />
      <View style={styles.container}>
        <Text style={styles.mainHead}>{name}</Text>
        <Text style={styles.textLabel}>{address}</Text>
      </View>
      <View style={styles.tabContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.paraSection}>{switchFunc()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
  },
  container: {
    paddingHorizontal: calWidth(7),
  },
  mainHead: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.mainFontColor,
  },
  textLabel: {
    color: colors.labelFontColor,
    fontSize: 15,
    fontFamily: fonts.regular,
    marginTop: 5,
  },
  tabContainer: {
    marginTop: '5%',
  },
  selectedTab: {
    color: colors.primaryColor,
    fontFamily: fonts.regular,
    fontSize: 15,
    paddingBottom: 5,
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 2,
  },
  unselectedTab: {
    color: 'black',
    fontFamily: fonts.regular,
    fontSize: 15,
  },
  paraSection: {
    paddingHorizontal: calWidth(7),
    marginTop: calHeight(2),
  },
  paraText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.labelFontColor,
    lineHeight: 24,
  },
});

export default SinglePost;
