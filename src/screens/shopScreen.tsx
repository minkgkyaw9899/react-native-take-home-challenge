import React, {FC, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ShopScreenProps} from 'types/navigation/types';
import {Appbar, Button} from 'react-native-paper';
import {FilterComponent} from 'components/FilterComponent';
import {ProductCardComponent} from 'components/ProductCard.component';
import {CartModal} from 'components/CartModal.component';

const ShopScreen: FC<ShopScreenProps> = () => {
  return (
    <View style={styles.root}>
      <Appbar.Header elevated style={{backgroundColor: '#FFFFFF'}}>
        <Appbar.Content
          titleStyle={{textAlign: 'center'}}
          title="TCG Marketplace"
        />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          zIndex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ProductCardComponent />
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
});

export default ShopScreen;
