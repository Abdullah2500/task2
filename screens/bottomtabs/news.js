// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import Header from '../../components/header';
// import {fonts, colors} from '../../enums';

// const News = props => {
//   return (
//     <View style={styles.mainContainer}>
//       <Header title="News" navigation={props.navigation} />
//       <View style={styles.container}>
//         <Text style={styles.labelText}>News Page</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: colors.background,
//     flex: 1,
//   },
//   container: {
//     height: '80%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   labelText: {
//     fontSize: 16,
//     color: colors.labelFontColor,
//     fontFamily: fonts.regular,
//   },
// });

// export default News;

import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, Pressable} from 'react-native';
import {fonts, colors} from '../../enums';
const News = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 15,
              padding: 25,
              elevation: 20,
            }}>
            <Text
              style={{
                fontFamily: fonts.bold,
                color: colors.labelFontColor,
                fontSize: 18,
              }}>
              Hello from the modal
            </Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                marginTop: 10,
                backgroundColor: colors.primaryColor,
                padding: 10,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontFamily: fonts.regular,
                  color: colors.white,
                  fontSize: 16,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Close Modal
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: colors.primaryColor,
          padding: 10,
          borderRadius: 15,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontFamily: fonts.regular,
            color: colors.white,
            fontSize: 16,
          }}>
          Show Modal
        </Text>
      </Pressable>
    </View>
  );
};

export default News;
