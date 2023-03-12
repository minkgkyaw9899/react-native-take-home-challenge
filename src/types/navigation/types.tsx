import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Shop: undefined;
};

export type AppRootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type ShopScreenProps = AppRootStackScreenProps<'Shop'>;

export type LoginScreenProps = AppRootStackScreenProps<'Login'>;
