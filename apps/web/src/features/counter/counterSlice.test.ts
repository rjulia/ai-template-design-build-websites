import reducer, { decrement, increment, incrementByAmount } from './counterSlice';

describe('counterSlice', () => {
  it('increments the counter', () => {
    const result = reducer({ value: 0 }, increment());

    expect(result.value).toBe(1);
  });

  it('decrements the counter', () => {
    const result = reducer({ value: 1 }, decrement());

    expect(result.value).toBe(0);
  });

  it('increments by amount', () => {
    const result = reducer({ value: 2 }, incrementByAmount(4));

    expect(result.value).toBe(6);
  });
});
