import React from 'react';
import {Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import styles from './styels';

interface Props {
  navigation: NavigationStackProp;
}

export default ({navigation}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.screenTitle}>Sign in</Text>
      <Text onPress={() => navigation.navigate('SignUpScreen')}>
        go to sign Up screen
      </Text>
      <Text onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        go to forgot password screen
      </Text>
    </View>
  );
};
