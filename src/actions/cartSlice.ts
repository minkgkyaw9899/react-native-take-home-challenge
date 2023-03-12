import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'store';
import {Pokemon} from 'types/pokemon/types';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  remainStock: number;
  image: string;
}

const initialState = {
  totalQuantity: 0,
  items: [] as CartItem[],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Pokemon>) => {
      const existedItem = state.items.find(
        pokemon => pokemon.id === action.payload.id,
      );

      if (existedItem) {
        return state;
      }

      state.totalQuantity = state.totalQuantity + 1;
      state.totalPrice =
        state.totalPrice + action.payload.cardmarket.prices.averageSellPrice;
      const cartItem: CartItem = {
        id: action.payload.id,
        name: action.payload.name,
        remainStock: action.payload.set.total - 1,
        price: action.payload.cardmarket.prices.averageSellPrice,
        image: action.payload.images.large,
        quantity: 1,
      };
      state.items.push(cartItem);
    },
    removeFromCart: (state, action: PayloadAction<Pokemon>) => {
      const existedItem = state.items.find(
        pokemon => pokemon.id === action.payload.id,
      );

      if (!existedItem) {
        return state;
      }

      state.totalQuantity = state.totalQuantity - existedItem.quantity;
      const existedItemTotalPrice = existedItem.price * existedItem.quantity;
      state.totalPrice = state.totalPrice - existedItemTotalPrice;
      state.items = state.items.filter(
        pokemon => pokemon.id !== action.payload.id,
      );
    },
    increaseQuantity: (
      state,
      action: PayloadAction<{id: string; quantity: number}>,
    ) => {
      const item = state.items.find(
        pokemon => pokemon.id === action.payload.id,
      );

      if (!item) {
        return state;
      }

      const {id, quantity} = action.payload;

      state.items = state.items.map(pokemon => {
        if (pokemon.id === id) {
          return {
            ...pokemon,
            quantity: pokemon.quantity + quantity,
            remainStock: pokemon.remainStock - quantity
          };
        }
        return pokemon;
      });
    },
    decreaseQuantity: (
      state,
      action: PayloadAction<{id: string; quantity: number}>,
    ) => {
      const item = state.items.find(
        pokemon => pokemon.id === action.payload.id,
      );

      if (!item) {
        return state;
      }

      const {id, quantity} = action.payload;

      state.items = state.items.map(pokemon => {
        if (pokemon.id === id) {
          return {
            ...pokemon,
            quantity: pokemon.quantity - quantity,
            remainStock: pokemon.remainStock + quantity
          };
        }
        return pokemon;
      });
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export const selectedCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
