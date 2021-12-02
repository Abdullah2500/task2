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
} from 'react-native';
import axios from 'axios';
import {calHeight, calWidth} from '../caldimens';
import Header from '../components/header';
import ModalComponent from '../components/modal';
import {base_url} from '../enums';

const Login = props => {
  const [passVisible, setPassVisibile] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loginBtnPressed = () => {
    setIsLoading(true);
    if (email && password) {
      axios
        .post(base_url + '/login', {
          email: email,
          password: password,
        })
        .then(res => {
          if (res.data.code === 200) {
            props.navigation.push('LoginDashboard', {msg: res.data.message});
          }else if(res.data.code === 202){
            alert(res.data.message)
          }else{
            alert('Invalid credentials');
          }
        })
        .catch(error => console.log('Error: ', error))
        .finally(() => setIsLoading(false));
    } else {
      alert('Email and Password should not be empty');
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header navigation={props.navigation} />
          <View
            style={{
              alignItems: 'center',
              paddingTop: calHeight(4),
              width: calWidth(86),
              alignSelf: 'center',
              height: calHeight(25),
            }}>
            <Text
              style={{
                fontFamily: 'NunitoSans-Bold',
                fontSize: 24,
                color: '#373C46',
              }}>
              Welcome Back!
            </Text>
            <Text
              style={{
                color: '#585C63',
                fontSize: 16,
                fontFamily: 'NunitoSans-Regular',
                lineHeight: 35,
              }}>
              Login to your account by entering your email and password.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              alignItems: 'center',
              postion: 'absolute',
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
              paddingTop: calHeight(6),
              paddingHorizontal: calWidth(7),
              bottom: 0,
              height: calHeight(80),
            }}>
            <Text
              style={{
                color: '#85754E',
                fontFamily: 'NunitoSans-Regular',
                fontSize: 16,
                alignSelf: 'flex-start',
              }}>
              E-Mail
            </Text>
            <View
              style={{
                width: '100%',
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#A3A3A3',
                margin: calHeight(2),
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginHorizontal: calWidth(5),
                  alignSelf: 'center',
                }}
                source={require('../assets/img/mail.png')}
              />
              <View>
                <TextInput
                  onChangeText={text => setEmail(text)}
                  style={{
                    width: calWidth(64),
                    fontFamily: 'NunitoSans-Regular',
                    fontSize: 16,
                    color: '#585C6399',
                  }}
                  placeholder="Enter your e-mail here"
                />
              </View>
            </View>
            <Text
              style={{
                color: '#85754E',
                fontFamily: 'NunitoSans-Regular',
                fontSize: 16,
                alignSelf: 'flex-start',
              }}>
              Password
            </Text>
            <View
              style={{
                width: '100%',
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#A3A3A3',
                margin: calHeight(2),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  alignSelf: 'center',
                  marginHorizontal: calWidth(5),
                }}
                source={require('../assets/img/password.png')}
              />
              <View>
                <TextInput
                  onChangeText={text => setPassword(text)}
                  style={{
                    fontFamily: 'NunitoSans-Regular',
                    fontSize: 16,
                    width: calWidth(54),
                    color: '#585C6399',
                  }}
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
              style={{
                alignSelf: 'flex-end',
                marginTop: calHeight(2),
              }}>
              <Text
                style={{
                  color: '#373C46',
                  fontFamily: 'NuniyoSans-Regular',
                  fontSize: 16,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={loginBtnPressed}
              style={{
                backgroundColor: '#85754E',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: calHeight(8),
                borderRadius: 12,
                marginTop: calHeight(4),
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'NunitoSans-Regular',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginTop: calHeight(3),
              }}>
              <Text
                style={{
                  color: '#373C46',
                  fontFamily: 'NuniyoSans-Regular',
                  fontSize: 16,
                  paddingRight: '2%',
                }}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => alert('Redirecting to Sign up page')}>
                <Text
                  style={{
                    color: '#85754E',
                    fontFamily: 'NunitoSans-Regular',
                    fontSize: 16,
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isLoading && <ModalComponent toggleLoading={setIsLoading} />}
    </KeyboardAvoidingView>
  );
};

export default Login;
