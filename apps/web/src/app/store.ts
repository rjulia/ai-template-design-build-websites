import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/cart/cartSlice';
import { loadCartState, saveCartState } from '../features/cart/cartStorage';
import counterReducer from '../features/counter/counterSlice';
import { cmsApi } from '../services/cmsApi';

const preloadedCartState = loadCartState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
    [cmsApi.reducerPath]: cmsApi.reducer,
  },
  preloadedState: preloadedCartState
    ? {
        cart: preloadedCartState,
      }
    : undefined,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cmsApi.middleware),
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
