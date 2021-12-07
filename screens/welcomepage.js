import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {calHeight, calWidth} from '../caldimens';
import Button from '../components/button';
import {colors, fonts} from '../enums';

const WelcomePage = props => {
  const btnClicked = () => {
    props.navigation.push('Login');
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'cover'}
        source={require('../assets/img/welcomepage.jpg')}
        style={styles.backImage}
      />
      <View style={styles.bottomSection}>
        <Image source={require('../assets/img/logo.png')} style={styles.logo} />
        <Text style={styles.headText}>
          Crafting Distinctive Niche Communities.
        </Text>
        <Text style={styles.labelText}>
          Available to you at the touch of a button. Let us take care of the
          hard work.
        </Text>
        <Button
          activeOpacity={0.9}
          btnPressed={btnClicked}
          title="Get Started"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    height: calHeight(45),
    width: '100%',
  },
  bottomSection: {
    alignItems: 'center',
    paddingHorizontal: calWidth(7),
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.background,
    height: calHeight(60),
  },
  logo: {
    marginTop: '7%',
    height: 50,
    width: 50,
  },
  headText: {
    color: colors.mainFontColor,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fonts.bold,
    marginTop: '10%',
  },
  labelText: {
    color: colors.labelFontColor,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.regular,
    marginTop: '10%',
    lineHeight: 30,
  },
});

export default WelcomePage;
