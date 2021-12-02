import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/header';
import ModalComponent from '../../components/modal';

const Notifications = props => {
  const [isloading, setIsLoading] = useState(true);
  return (
    <View style={{ backgroundColor: '#E5E5E5' }}>
      <Header title="Notifications" navigation={props.navigation} />
      <View
        style={{
          paddingVertical: 200,
          alignItems: 'center',
          height: '100%',
        }}>
        <Text>Notifications Page</Text>
      </View>
      {
        isloading && <ModalComponent toggleLoading={setIsLoading} />
      }
    </View>
  );
};

export default Notifications;
