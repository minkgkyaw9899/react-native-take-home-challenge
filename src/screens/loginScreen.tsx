import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {LoginScreenProps} from 'types/navigation/types';
import {Appbar} from 'react-native-paper';

const LoginScreen: FC<LoginScreenProps> = () => {
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content title="TCG Marketplace" />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default LoginScreen;
