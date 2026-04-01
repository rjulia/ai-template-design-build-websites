import { describe, expect, it } from 'vitest';

import cartReducer, { addItem, closeCart, decreaseItemQuantity, increaseItemQuantity, removeItem } from './cartSlice';
import type { CartState } from './cartTypes';

const baseState: CartState = {
  isOpen: false,
  items: [],
};

describe('cartSlice', () => {
  it('adds a new item and opens the drawer', () => {
    const next = cartReducer(
      baseState,
      addItem({
        id: 'asgaard-sofa',
        name: 'Asgaard sofa',
        imageUrl: '/img.jpg',
        priceLabel: 'Rs. 250,000.00',
      }),
    );

    expect(next.items).toHaveLength(1);
    expect(next.items[0]?.quantity).toBe(1);
    expect(next.isOpen).toBe(true);
  });

  it('increments quantity when adding an existing item', () => {
    const stateWithItem = cartReducer(
      baseState,
      addItem({
        id: 'asgaard-sofa',
        name: 'Asgaard sofa',
        imageUrl: '/img.jpg',
        priceLabel: 'Rs. 250,000.00',
      }),
    );

    const next = cartReducer(
      stateWithItem,
      addItem({
        id: 'asgaard-sofa',
        name: 'Asgaard sofa',
        imageUrl: '/img.jpg',
        priceLabel: 'Rs. 250,000.00',
        quantity: 2,
      }),
    );

    expect(next.items[0]?.quantity).toBe(3);
  });

  it('removes items and allows closing the drawer', () => {
    const stateWithItem = cartReducer(
      baseState,
      addItem({
        id: 'asgaard-sofa',
        name: 'Asgaard sofa',
        imageUrl: '/img.jpg',
        priceLabel: 'Rs. 250,000.00',
      }),
    );

    const withoutItem = cartReducer(stateWithItem, removeItem('asgaard-sofa'));
    const closed = cartReducer(withoutItem, closeCart());

    expect(withoutItem.items).toHaveLength(0);
    expect(closed.isOpen).toBe(false);
  });

  it('supports increasing and decreasing quantity', () => {
    const stateWithItem = cartReducer(
      baseState,
      addItem({
        id: 'asgaard-sofa',
        name: 'Asgaard sofa',
        imageUrl: '/img.jpg',
        priceLabel: 'Rs. 250,000.00',
      }),
    );

    const increased = cartReducer(stateWithItem, increaseItemQuantity('asgaard-sofa'));
    const decreased = cartReducer(increased, decreaseItemQuantity('asgaard-sofa'));

    expect(increased.items[0]?.quantity).toBe(2);
    expect(decreased.items[0]?.quantity).toBe(1);
  });

  it('removes item when decreasing from quantity one', () => {
    const stateWithItem = cartReducer(
      baseState,
      addItem({
        id: 'asgaard-sofa',
        name: 'Asgaard sofa',
        imageUrl: '/img.jpg',
        priceLabel: 'Rs. 250,000.00',
      }),
    );

    const next = cartReducer(stateWithItem, decreaseItemQuantity('asgaard-sofa'));
    expect(next.items).toHaveLength(0);
  });
});
