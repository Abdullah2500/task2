import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {fonts, colors} from '../../../enums';
import Header from '../../../components/header';
import {calHeight, calWidth} from '../../../caldimens';

const SinglePost = props => {
  const {
    name,
    address,
    about,
    short_description,
    long_description,
    site_plan,
    floor_plan,
  } = props.route.params;
  const [index, setIndex] = useState(1);
  const tabs = [
    {
      id: 1,
      name: 'Gallery',
    },
    {
      id: 2,
      name: 'About',
    },
    {
      id: 3,
      name: 'Siteplan',
    },
    {
      id: 4,
      name: 'Floorplans',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{paddingRight: calWidth(6)}}
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
        <Text style={styles.sectionHeader}>About</Text>
        <Text style={styles.paraText}>{about}</Text>
      </View>
    );
  };
  const SitePlan = () => {
    return (
      <View>
        <Text style={styles.sectionHeader}>Siteplan</Text>
        <Text style={styles.paraText}>{site_plan}</Text>
      </View>
    );
  };
  const FloorPlans = () => {
    return (
      <View>
        <Text style={styles.sectionHeader}>Floorplans</Text>
        <Text style={styles.paraText}>{floor_plan}</Text>
      </View>
    );
  };
  // const Short_Desc = () => {
  //   return (
  //     <View>
  //       <Text style={styles.paraText}>{short_description}</Text>
  //     </View>
  //   );
  // };
  // const Long_Desc = () => {
  //   return (
  //     <View>
  //       <Text style={styles.paraText}>{long_description}</Text>
  //     </View>
  //   );
  // };

  const switchFunc = () => {
    switch (index) {
      case 1:
        return <About />;
      case 2:
        return <About />;
      case 3:
        return <SitePlan />;
      case 4:
        return <FloorPlans />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header navigation={props.navigation} />
      <View style={styles.container}>
        <ScrollView>
          <View style={{paddingHorizontal: calWidth(7)}}>
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
          {index === 1 && (
            <View style={styles.imageSliderContainer}>
              <ScrollView
                horizontal={true}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}>
                <Image
                  style={styles.sliderImgStyle}
                  source={require('../../../assets/img/community1.png')}
                />
                <Image
                  style={styles.sliderImgStyle}
                  source={require('../../../assets/img/community2.png')}
                />
              </ScrollView>
            </View>
          )}
          <View
            style={{
              paddingHorizontal: calWidth(7),
            }}>
            {switchFunc()}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    // paddingBottom: calHeight(12),
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
    marginTop: '4%',
  },
  tabContainer: {
    marginTop: '5%',
    paddingHorizontal: calWidth(7),
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
  paraText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.labelFontColor,
    lineHeight: 30,
    paddingBottom: calHeight(25),
  },
  sectionHeader: {
    fontFamily: fonts.regular,
    fontSize: 18,
    color: colors.labelFontColor,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  imageSliderContainer: {
    width: calWidth(100),
    paddingLeft: calWidth(7),
  },
  sliderImgStyle: {
    marginTop: 20,
    marginRight: 20,
    borderRadius: 10,
    width: calWidth(65),
    height: calHeight(25),
  },
});

export default SinglePost;
