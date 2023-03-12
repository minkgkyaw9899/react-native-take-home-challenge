import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'store';

interface Modal {
  visible: boolean;
}

const initialState: Modal = {
  visible: false,
};

const cartModalSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    showModal: state => {
      state.visible = true;
    },
    hideModal: state => {
      state.visible = false;
    },
  },
});

export const {showModal, hideModal} = cartModalSlice.actions;

export const selectedCartModal = (state: RootState) => state.cartModal;

export default cartModalSlice.reducer;
