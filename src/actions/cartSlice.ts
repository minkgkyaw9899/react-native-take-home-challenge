import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface ICartItem {
  name: string;
  type: string;
  rarity: string;
  set: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

const initialState = {
  totalQuantity: 0,
  items: [] as ICartItem[],
  totalPrice: 0,
};

const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export const selectedUser = (state: RootState) => state.user;

export default userSlice.reducer;
