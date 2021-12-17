import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Pressable,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {calHeight, calWidth} from '../calDimens';
import Header from '../components/Header';
import ModalComponent from '../components/Modal';
import {colors, fonts} from '../enums';
import Button from '../components/Button';
import InputComponent from '../components/formComponents/Input';
import InputPassComponent from '../components/formComponents/InputPass';
import {registerApi} from '../services/services';
import {useDispatch, useSelector} from 'react-redux';
import {
  closeLoading,
  setUserDetails,
  startLoading,
} from '../redux/actions/actions';

const Register = props => {
  const [passVisible, setPassVisibile] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const visible = useSelector(state => state.loadingReducer);

  const validate_field = () => {
    if (!username || !email || !password || !address || !phone) {
      alert('Fields should not be empty');
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

  const registerBtnPressed = async () => {
    try {
      if (validate_field()) {
        dispatch(startLoading());
        const res = await registerApi({
          username: username,
          email: email,
          password: password,
          address: address,
          phone_number: phone,
        });
        dispatch(setUserDetails(res.data));
        if (res.code === 200) {
          alert('User successfully registerd.');
          props.navigation.push('Login');
        } else {
          alert(res.message);
          dispatch(closeLoading());
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const stopInitialLoading = () => {
    if (visible) {
      dispatch(closeLoading());
    }
  };

  useEffect(() => {
    stopInitialLoading();
  }, []);

  return (
    <KeyboardAwareScrollView
      style={styles.mainContainer}
      keyboardShouldPersistTaps="handled">
      <Header navigation={props.navigation} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <View style={styles.upperSection}>
            <Text style={styles.mainHead}>Welcome Aboard!</Text>
            <Text style={styles.headLabel}>
              Create an account so you can access all the features of the app.
              in just 2 steps
            </Text>
          </View>
          <View style={styles.bottomSection}>
            <InputComponent
              textLabel="Full Name"
              imgSource={require('../assets/img/username.png')}
              onChangeText={text => setUsername(text)}
              placeholder="Enter your full name"
            />
            <InputComponent
              textLabel="E-Mail"
              imgSource={require('../assets/img/mail.png')}
              onChangeText={text => setEmail(text)}
              placeholder="Enter your e-mail here"
            />
            <InputPassComponent
              textLabel="Password"
              imgSource={require('../assets/img/password.png')}
              onChangeText={text => setPassword(text)}
              placeholder="Enter your password here"
              secureTextEntry={passVisible}
              onPress={() => setPassVisibile(!passVisible)}
              passVisible={passVisible}
            />
            <InputComponent
              textLabel="Current Address"
              imgSource={require('../assets/img/address.png')}
              onChangeText={text => setAddress(text)}
              placeholder="Enter your current full address"
            />
            <InputComponent
              textLabel="Phone Number"
              imgSource={require('../assets/img/phone_number.png')}
              onChangeText={text => setPhone(text)}
              placeholder="Enter your phone number"
            />
            <Button
              activeOpacity={0.9}
              btnPressed={registerBtnPressed}
              title="Register"
            />
            <View style={styles.endTextStyle}>
              <Text style={styles.endTextFontStyle}>
                Already have an account?
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.push('Login')}>
                <Text style={styles.loginBtn}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {visible && <ModalComponent />}
    </KeyboardAwareScrollView>
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
  },
  mainHead: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.mainFontColor,
    marginBottom: 10,
  },
  headLabel: {
    color: colors.labelFontColor,
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 30,
  },
  bottomSection: {
    backgroundColor: colors.white,
    alignItems: 'center',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    marginTop: calHeight(3),
    paddingVertical: calHeight(4),
    paddingHorizontal: calWidth(7),
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
  loginBtn: {
    color: colors.primaryColor,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
});

export default Register;
