import React, {FC, memo} from 'react';
import {Image, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {
  CartItem as CartItemProps,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from 'actions/cartSlice';
import {useAppDispatch} from 'hooks';

interface IProps {
  pokemon: CartItemProps;
}

export const CartItem: FC<IProps> = memo(({pokemon}) => {
  const dispatch = useAppDispatch();

  const increaseQuantityHandler = () =>
    dispatch(increaseQuantity({id: pokemon.id, quantity: 1}));
  const decreaseQuantityHandler = () => {
    if (pokemon.quantity > 1) {
      return dispatch(decreaseQuantity({id: pokemon.id, quantity: 1}));
    }
    return dispatch(removeFromCart(pokemon));
  };

  return (
    <View
      key={pokemon.id}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
      }}>
      <Image
        source={{uri: pokemon.image}}
        style={{
          width: 80,
          height: 140,
        }}
      />
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <Text variant={'headlineSmall'} style={{fontWeight: 'bold'}}>
            {pokemon.name}
          </Text>
          <Text variant={'labelLarge'}>{pokemon.price} per card</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'red', marginRight: 10}} variant={'labelLarge'}>
            {pokemon.remainStock}
          </Text>
          <Text style={{color: '#C4C3C3'}}>cards left</Text>
        </View>
      </View>

      <View style={{alignItems: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text variant={'headlineMedium'} style={{color: '#298BFD'}}>
            {pokemon.quantity}
          </Text>
          <View>
            <IconButton
              style={{margin: 0, padding: 0}}
              icon="menu-up"
              size={23}
              onPress={increaseQuantityHandler}
            />
            <IconButton
              style={{margin: 0}}
              icon="menu-down"
              size={23}
              onPress={decreaseQuantityHandler}
            />
          </View>
        </View>
        <Text>Price</Text>
        <Text style={{color: '#298BFD', fontWeight: 'bold'}}>
          ${pokemon.price * pokemon.quantity}
        </Text>
      </View>
    </View>
  );
});
