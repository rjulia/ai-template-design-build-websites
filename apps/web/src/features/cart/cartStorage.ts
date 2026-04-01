import type { CartItem, CartState } from './cartTypes';

const CART_STORAGE_KEY = 'furniro_cart_state_v1';

type PersistedCartState = {
  items: CartItem[];
};

function isValidPersistedCartState(value: unknown): value is PersistedCartState {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const maybeState = value as PersistedCartState;

  if (!Array.isArray(maybeState.items)) {
    return false;
  }

  return maybeState.items.every((item) => {
    if (!item || typeof item !== 'object') {
      return false;
    }

    return (
      typeof item.id === 'string' &&
      typeof item.name === 'string' &&
      typeof item.imageUrl === 'string' &&
      typeof item.priceLabel === 'string' &&
      typeof item.unitPrice === 'number' &&
      typeof item.currencyPrefix === 'string' &&
      typeof item.quantity === 'number'
    );
  });
}

export function loadCartState(): CartState | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!raw) {
      return undefined;
    }

    const parsed: unknown = JSON.parse(raw);

    if (!isValidPersistedCartState(parsed)) {
      return undefined;
    }

    return {
      isOpen: false,
      items: parsed.items,
    };
  } catch {
    return undefined;
  }
}

export function saveCartState(state: CartState): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const payload: PersistedCartState = {
      items: state.items,
    };

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage write failures (private mode/quota exceeded).
  }
}
