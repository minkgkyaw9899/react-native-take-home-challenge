import React, {useEffect, useState} from 'react';
import {Badge, Button, Text} from 'react-native-paper';
import {useAppDispatch, useAppSelector, usePokemonData} from 'hooks';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Pokemon} from 'types/pokemon/types';
import {FilterComponent} from 'components/FilterComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {selectedCartModal, showModal} from 'actions/cartModalSlice';
import {ProductCardItem} from 'components/ProductCartItem.component';
import { selectedCart } from "actions/cartSlice";

export const ProductCardComponent = () => {
  const {visible} = useAppSelector(selectedCartModal);
  const {totalQuantity} = useAppSelector(selectedCart)

  const dispatch = useAppDispatch();

  const [products, setProducts] = useState<Pokemon[]>([]);

  const [pageSize, setPageSize] = useState<number>(12);

  const {data} = usePokemonData(1, pageSize);

  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  const handleShowMore = () => setPageSize(prev => prev + 12);

  const handleShowModal = () => dispatch(showModal());

  return (
    <View style={styles.root}>
      {!visible && totalQuantity !== 0 && (
        <View style={styles.openModalBtn}>
          <Badge size={20} style={styles.badge}>
            {totalQuantity}
          </Badge>
          <Button
            icon="cart"
            mode="contained"
            buttonColor={'#298BFD'}
            // style={styles.openModalBtn}
            onPress={handleShowModal}>
            View Carts
          </Button>
        </View>
      )}
      <FlatList
        ListHeaderComponent={<FilterComponent />}
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductCardItem pokemon={item} />}
        ListFooterComponent={() => (
          <TouchableOpacity onPress={handleShowMore} style={styles.showMoreBtn}>
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
    position: 'relative',
  },
  openModalBtn: {
    width: 120,
    borderRadius: 8,
    marginBottom: 20,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  showMoreBtn: {
    marginBottom: 100,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: -49,
  },
  badge: {
    position: 'absolute',
    left: -6,
    bottom: 20,
    zIndex: 1,
    backgroundColor: '#FF7B7B'
  }
});
