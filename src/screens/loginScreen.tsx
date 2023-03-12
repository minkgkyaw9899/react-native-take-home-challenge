import React, {FC, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {LoginScreenProps} from 'types/navigation/types';
import LoginSvg from 'assets/login.svg';
import {Button, Text, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {login} from 'actions/userSlice';

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [secure, setSecure] = useState<boolean>(false);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(login());
    return navigation.goBack();
  };
  return (
    <KeyboardAvoidingView style={styles.root}>
      <View style={styles.header}>
        <LoginSvg width={150} height={180} />
        <Text style={styles.headerText} variant={'displaySmall'}>
          Login
        </Text>
        <Text variant="headlineMedium">Welcome back again</Text>
      </View>
      <View style={styles.loginContainer}>
        <TextInput
          outlineColor={'#3994FD'}
          activeOutlineColor={'#3994FD'}
          style={{marginTop: 20}}
          mode="outlined"
          label="Email"
          right={<TextInput.Affix text="/100" />}
        />

        <TextInput
          outlineColor={'#3994FD'}
          activeOutlineColor={'#3994FD'}
          style={{marginTop: 40}}
          mode="outlined"
          label="Password"
          secureTextEntry={secure}
          right={
            <TextInput.Icon
              onPress={() => setSecure(prev => !prev)}
              icon={secure ? 'eye-off' : 'eye'}
            />
          }
        />

        <Button
          onPress={loginHandler}
          style={{marginTop: 40}}
          mode={'contained'}
          buttonColor={'#3994FD'}>
          Login
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  headerText: {marginBottom: 10, marginTop: 20},
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
});

export default LoginScreen;
