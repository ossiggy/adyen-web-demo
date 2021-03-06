import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { OnDeckState } from '../types';

const initialState: OnDeckState = {
  profile: {
    name: '',
    product: '',
    dropinVersion: '',
    checkoutVersion: ''
  },
  checkout: {},
  local: {},
  sessions: {}
};

export const onDeckSlice = createSlice({
  name: 'onDeck',
  initialState,
  reducers: {
    updateProfileInfo: (state, action: PayloadAction<OnDeckState>) => {
      const profile = { ...state.profile, ...action.payload };
      return { ...state, profile };
    },
    updateCheckoutInfo: (state, action: PayloadAction<OnDeckState>) => {
      return { ...state, checkout: action.payload };
    },
    updateLocalInfo: (state, action: PayloadAction<OnDeckState>) => {
      return { ...state, local: action.payload };
    },
    updateSessionsInfo: (state, action: PayloadAction<OnDeckState>) => {
      return { ...state, sessions: action.payload };
    },
    clearOnDeckInfo: state => {
      return initialState;
    }
  }
});

export const { actions, reducer } = onDeckSlice;
