import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'types/navigation/types';
import ShopScreen from 'screens/shopScreen';
import LoginScreen from 'screens/loginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Shop'} component={ShopScreen} />
      <Stack.Screen name={'Login'} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
