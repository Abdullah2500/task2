import React, {useEffect} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

const ModalComponent = props => {
  useEffect(() => {
    setTimeout(() => props.toggleLoading(false), 10000);
  }, []);
  return (
    <Modal>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E5E5E5',
        }}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default ModalComponent;
