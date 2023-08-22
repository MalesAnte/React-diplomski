import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import ipzReducer from './features/ipz/ipzSlice.js';

export const store = configureStore({
  reducer: {
    ipz: ipzReducer,
  },
});

setupListeners(store.dispatch);
