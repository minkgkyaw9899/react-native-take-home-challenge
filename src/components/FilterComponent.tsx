import React, {useRef} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';

export const FilterComponent = () => {
  return (
    <KeyboardAvoidingView style={styles.root}>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#D5D4D4'}
        placeholder={'Name'}
      />

      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          contentStyle={{flexDirection: 'row-reverse', width: 100}}
          icon="menu-down"
          mode="elevated"
          buttonColor={'#FFFFFF'}
          textColor={'#D5D4D4'}
          onPress={() => console.log('Pressed')}>
          Types
        </Button>
        <Button
          contentStyle={{flexDirection: 'row-reverse', width: 100}}
          icon="menu-down"
          mode="elevated"
          buttonColor={'#FFFFFF'}
          textColor={'#D5D4D4'}
          onPress={() => console.log('Pressed')}>
          Rarity
        </Button>
        <Button
          contentStyle={{flexDirection: 'row-reverse', width: 100}}
          icon="menu-down"
          mode="elevated"
          buttonColor={'#FFFFFF'}
          textColor={'#D5D4D4'}
          onPress={() => console.log('Pressed')}>
          Set
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // paddingHorizontal: 25,
    backgroundColor: '#F8F8F8',
    marginBottom: 80,
    marginTop: 30,
  },
  input: {
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    elevation: 2,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});
