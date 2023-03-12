import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from 'hooks';
import {clearCart, selectedCart} from 'actions/cartSlice';
import {CartItem} from 'components/CartItem.component';
import Icon from 'react-native-vector-icons/Ionicons';

export const CartList = () => {
  const [isPay, setIsPay] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const {totalQuantity, totalPrice, items} = useAppSelector(selectedCart);

  useEffect(() => {
    return () => setIsPay(false);
  }, []);

  const clearAllHandler = () => dispatch(clearCart());
  const handlePayNow = () => {
    dispatch(clearCart());
    setIsPay(true);
    // return dispatch(hideModal())
  };

  return (
    <View style={{flex: 1, paddingVertical: 10}}>
      {isPay ? (
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Icon name={'checkmark-circle'} size={200} color={'#5DDD48'} />
          <Text
            style={{marginVertical: 10, textAlign: 'center'}}
            variant={'headlineSmall'}>
            {' '}
            Payment Success!{' '}
          </Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CartItem pokemon={item} />}
          />

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={clearAllHandler}>
              <Text
                style={{
                  color: '#6A6969',
                  marginTop: 5,
                  marginBottom: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: '#6A6969',
                }}>
                Clear All
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 150,
              }}>
              <Text variant={'labelLarge'}>Total Cards</Text>
              <Text>{totalQuantity}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 150,
              }}>
              <Text variant={'bodyLarge'}>Total Prices</Text>
              <Text>${totalPrice.toFixed(2)}</Text>
            </View>
          </View>

          <Button
            disabled={totalQuantity === 0}
            style={{marginTop: 10, paddingHorizontal: 15}}
            buttonColor={'#298BFD'}
            onPress={handlePayNow}
            mode={'contained'}>
            Pay now
          </Button>
        </View>
      )}
    </View>
  );
};
