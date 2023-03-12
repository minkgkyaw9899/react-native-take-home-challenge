import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'store';

interface IUser {
  email?: string;
  password?: string;
  token?: string;
}

const initialState = {
  email: undefined,
  password: undefined,
  token: undefined,
} as IUser;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export const selectedUser = (state: RootState) => state.user;

export default userSlice.reducer;
