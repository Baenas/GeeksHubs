import { sum } from '../sum';

test('basic', () => {
    expect(sum()).toBe(0)
});

test('basic', () => {
    expect(sum(1,2)).toBe(3)
});