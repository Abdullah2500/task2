import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Button,
} from 'react-native';

const Notifications = props => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10}}>
            Notification Page
          </Text>
          <TextInput
            placeholder="Enter username"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#000',
              marginBottom: 20,
              width: '65%',
              textAlign: 'center',
            }}
          />
          <View>
            <Button title="Submit" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Notifications;
