import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

const ModalComponent = () => {
  return (
    <Modal transparent>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default ModalComponent;
