import React, {memo, useEffect, useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {usePokemonData} from 'hooks';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Pokemon} from 'types/pokemon/types';
import {FilterComponent} from 'components/FilterComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const CardItem = memo(({pokemon}: {pokemon: Pokemon}) => {
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
        onPress={() => console.log('pressed')}
        style={styles.cardBtn}
        mode={'contained'}
        buttonColor={'#FDCE29'}
        textColor={'#000000'}>
        Select Card
      </Button>
    </View>
  );
});

export const ProductCardComponent = () => {
  const [products, setProducts] = useState<Pokemon[]>([]);

  const [pageSize, setPageSize] = useState<number>(12);

  const {data} = usePokemonData(1, pageSize);

  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  const handleShowMore = () => setPageSize(prev => prev + 12);

  return (
    <View style={styles.root}>
      <Button
        icon="cart"
        mode="contained"
        buttonColor={'#298BFD'}
        style={{
          width: 120,
          borderRadius: 8,
          marginBottom: 20,
          position: 'absolute',
          bottom: 0,
          zIndex: 1,
        }}
        onPress={() => console.log('Pressed')}>
        View Carts
      </Button>
      <FlatList
        ListHeaderComponent={<FilterComponent />}
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardItem pokemon={item} />}
        ListFooterComponent={() => (
          <TouchableOpacity
            onPress={handleShowMore}
            style={{
              marginBottom: 100,
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: -49,
            }}>
            <Icon name={'search'} size={18} />
            <Text variant={'labelLarge'} style={{marginLeft: 6}}>
              Show More
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
