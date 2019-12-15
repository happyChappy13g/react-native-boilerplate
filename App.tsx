import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AppNavigator from './src/navigation';

export default () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};
