import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {ShopScreenProps} from 'types/navigation/types';
import {Appbar} from 'react-native-paper';
import {ProductCardList} from 'components/ProductCardList.component';
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
});

export default ShopScreen;
