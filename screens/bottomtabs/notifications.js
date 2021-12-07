import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import Header from '../../components/header';
import {fonts, colors} from '../../enums';

const Notifications = props => {
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <Header title="Notifications" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.headText}>Notification Page</Text>
          <TextInput placeholder="Enter username" style={styles.input} />
          <View>
            <Button title="Submit" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 22,
    color: colors.mainFontColor,
    fontFamily: fonts.bold,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
    width: '65%',
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
});

export default Notifications;
