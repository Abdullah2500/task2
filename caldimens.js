import {Dimensions} from 'react-native';

const calHeight = number => {
  return (number / 100) * Dimensions.get('window').height;
};

const calWidth = number => {
  return (number / 100) * Dimensions.get('window').width;
};

export {calHeight, calWidth};
