import { store } from './store';
import { increment } from '../features/counter/counterSlice';

describe('store', () => {
  it('dispatches reducer actions', () => {
    const initial = store.getState().counter.value;

    store.dispatch(increment());

    expect(store.getState().counter.value).toBe(initial + 1);
  });
});
