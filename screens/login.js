import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {calHeight, calWidth} from '../calDimens';
import Header from '../components/Header';
import ModalComponent from '../components/Modal';
import {base_url, colors, fonts} from '../enums';
import Button from '../components/Button';

const Login = props => {
  const [passVisible, setPassVisibile] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validate_field = () => {
    if (!email || !password) {
      alert('Email and Password fields should not be empty');
      return false;
    } else if (password.length < 6) {
      alert('Password should be at least 6 characters long');
      return false;
    } else {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === true) {
        return true;
      } else {
        alert('Email is not valid');
        return false;
      }
    }
  };

  // AsyncStorage setToken
  const storeToken = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  const loginBtnPressed = async () => {
    try {
      if (validate_field()) {
        setIsLoading(true);
        const res = await axios.post(base_url + '/login', {
          email: email,
          password: password,
        });
        if (res.data.code === 200) {
          storeToken(res.data.data.token);
          props.navigation.push('HomePage');
        } else if (res.data.code === 202) {
          alert(res.data.message);
        } else {
          alert('Some Network error');
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <Header navigation={props.navigation} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <View style={styles.upperSection}>
            <Text style={styles.mainHead}>Welcome Back!</Text>
            <Text style={styles.headLabel}>
              Login to your account by entering your email and password.
            </Text>
          </View>
          <View style={styles.bottomSection}>
            <Text style={styles.inputLabel}>E-Mail</Text>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../assets/img/mail.png')}
              />
              <View>
                <TextInput
                  onChangeText={text => setEmail(text)}
                  style={styles.inputInnerContainer}
                  placeholder="Enter your e-mail here"
                />
              </View>
            </View>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../assets/img/password.png')}
              />
              <View>
                <TextInput
                  onChangeText={text => setPassword(text)}
                  style={(styles.inputInnerContainer, {width: calWidth(54)})}
                  secureTextEntry={passVisible}
                  placeholder="Enter your password here"
                />
              </View>

              <Pressable active onPress={() => setPassVisibile(!passVisible)}>
                <Image
                  source={
                    passVisible
                      ? require('../assets/img/eye-crossed.png')
                      : require('../assets/img/eye.png')
                  }
                />
              </Pressable>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => alert('Improve your memory!')}
              style={styles.forgotPass}>
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button
              activeOpacity={0.9}
              btnPressed={loginBtnPressed}
              title="Login"
            />
            <View style={styles.endTextStyle}>
              <Text style={styles.endTextFontStyle}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => alert('Redirecting to Sign up page')}>
                <Text style={styles.signUpBtn}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isLoading && <ModalComponent toggleLoading={setIsLoading} />}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  upperSection: {
    alignItems: 'center',
    paddingTop: calHeight(4),
    paddingHorizontal: calWidth(7),
    alignSelf: 'center',
    height: calHeight(25),
  },
  mainHead: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.mainFontColor,
  },
  headLabel: {
    color: colors.labelFontColor,
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 35,
  },
  bottomSection: {
    backgroundColor: colors.white,
    alignItems: 'center',
    postion: 'absolute',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingTop: calHeight(6),
    paddingHorizontal: calWidth(7),
    bottom: 0,
    height: calHeight(80),
  },
  inputLabel: {
    color: colors.primaryColor,
    fontFamily: fonts.regular,
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.borderColor,
    margin: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputInnerContainer: {
    width: calWidth(64),
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.placeholderColor,
  },
  inputIcon: {
    marginHorizontal: calWidth(5),
    alignSelf: 'center',
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginTop: calHeight(2),
  },
  forgotPassText: {
    color: colors.mainFontColor,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  endTextStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: calHeight(3),
  },
  endTextFontStyle: {
    color: colors.mainFontColor,
    fontFamily: fonts.regular,
    fontSize: 16,
    paddingRight: '2%',
  },
  signUpBtn: {
    color: colors.primaryColor,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
});

export default Login;
