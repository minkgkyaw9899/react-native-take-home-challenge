import React, {memo, useEffect, useState} from 'react';
import {Pokemon} from 'types/pokemon/types';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from 'hooks';
import {addToCart, selectedCart} from 'actions/cartSlice';

export const ProductCardItem = memo(({pokemon}: {pokemon: Pokemon}) => {
  const {items} = useAppSelector(selectedCart);

  const [isCartItem, setIsCartItem] = useState(false);

  useEffect(() => {
    const item = items.find(({id}) => id === pokemon.id);

    item ? setIsCartItem(true) : setIsCartItem(false);
  }, [items, pokemon.id]);

  const dispatch = useAppDispatch();

  const handleSelectCard = () => dispatch(addToCart(pokemon));

  return (
    <View key={pokemon.id} style={[styles.card]}>
      <Image
        source={{uri: pokemon.images.large}}
        resizeMode={'center'}
        alt={pokemon.name}
        style={styles.cardImage}
      />
      <View style={{marginTop: 70}}>
        <Text variant={'titleLarge'} style={styles.cardTitle}>
          {pokemon.name}
        </Text>
        <Text variant={'bodySmall'} style={styles.cardRarity}>
          {pokemon.rarity}
        </Text>
        <View style={styles.cardPriceContainer}>
          <Text variant={'bodyLarge'} style={{color: '#BEBDBD'}}>
            ${pokemon.cardmarket.prices.averageSellPrice}
          </Text>
          <Text variant={'bodyLarge'} style={{color: '#BEBDBD'}}>
            {pokemon.set.total}&nbsp;left
          </Text>
        </View>
      </View>

      <Button
        onPress={handleSelectCard}
        style={styles.cardBtn}
        mode={'contained'}
        buttonColor={isCartItem ? '#000000' : '#FDCE29'}
        textColor={isCartItem ? '#FFFFFF' : '#000000'}>
        {isCartItem ? 'Selected' : 'Select Card'}
      </Button>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: 300,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 1,
    alignContent: 'center',
    paddingTop: 20,
    height: 220,
    borderRadius: 30,
    marginVertical: 120,
  },
  cardImage: {
    width: 200,
    height: 250,
    position: 'absolute',
    top: -180,
  },
  cardTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 4,
  },
  cardRarity: {
    textAlign: 'center',
    paddingVertical: 4,
    color: '#1E76B5',
  },
  cardPriceContainer: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  cardBtn: {position: 'absolute', bottom: -20, width: 180},
});
