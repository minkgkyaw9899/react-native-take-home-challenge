import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {ShopScreenProps} from 'types/navigation/types';
import {ProductCardList} from 'components/ProductCardList.component';
import {CartModal} from 'components/CartModal.component';
import Logo from "assets/logo.svg"

const ShopScreen: FC<ShopScreenProps> = () => {
  return (
    <View style={styles.root}>
      <Appbar.Header elevated style={{backgroundColor: '#FFFFFF', height: 80}}>
        <Appbar.Content
          titleStyle={{textAlign: 'center', marginBottom: 20}}
          title="TCG Marketplace"
        />
        <Logo style={{position: 'absolute', top: 20, left: 150}} width={100} height={100} />
      </Appbar.Header>
      <View
        style={styles.productContainer}>
        <ProductCardList />
        <CartModal />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  productContainer: {
    flex: 1,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ShopScreen;
