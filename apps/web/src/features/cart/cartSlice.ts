import { createSelector, createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { CartEntryPayload, CartState } from './cartTypes';
import { detectCurrencyPrefix, formatCartAmount, parsePriceLabelToNumber } from './cartUtils';
import type { RootState } from '../../app/store';

const initialState: CartState = {
  isOpen: false,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addItem: (state, action: PayloadAction<CartEntryPayload>) => {
      const quantityToAdd = Math.max(1, action.payload.quantity ?? 1);
      const existing = state.items.find((item) => item.id === action.payload.id);

      if (existing) {
        existing.quantity += quantityToAdd;
        state.isOpen = true;
        return;
      }

      state.items.push({
        id: action.payload.id,
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        priceLabel: action.payload.priceLabel,
        unitPrice: parsePriceLabelToNumber(action.payload.priceLabel),
        currencyPrefix: detectCurrencyPrefix(action.payload.priceLabel),
        quantity: quantityToAdd,
        href: action.payload.href,
      });
      state.isOpen = true;
    },
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((entry) => entry.id === action.payload);

      if (!item) {
        return;
      }

      item.quantity += 1;
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((entry) => entry.id === action.payload);

      if (!item) {
        return;
      }

      if (item.quantity <= 1) {
        state.items = state.items.filter((entry) => entry.id !== action.payload);
        return;
      }

      item.quantity -= 1;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearCart, closeCart, decreaseItemQuantity, increaseItemQuantity, openCart, removeItem, toggleCart } =
  cartSlice.actions;

export const selectCartState = (state: RootState) => state.cart;
export const selectCartIsOpen = (state: RootState) => state.cart.isOpen;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemCount = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0),
);
export const selectCartSubtotal = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.unitPrice * item.quantity, 0),
);
export const selectCartSubtotalLabel = createSelector([selectCartItems, selectCartSubtotal], (items, subtotal) => {
  const preferredPrefix = items.find((item) => item.currencyPrefix.length > 0)?.currencyPrefix ?? 'Rs.';
  return formatCartAmount(subtotal, preferredPrefix);
});

export default cartSlice.reducer;
