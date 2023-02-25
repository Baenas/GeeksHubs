const divide = require('../divide')

describe('basic test with divide function', () => {
    describe('basic calcs', () => {

        test('it should divide', () => {
            const result = divide(10, 2)

            expect(result).toBe(5)
        });

        test('should divide decimals ', () => {
            const result = divide(1.5, 2)

            expect(result).toBe(0.75)
        });

        test('should divide negatige ', () => {
            const result = divide(-10, 2)

            expect(result).toBe(-5)
        });

        test('should divide 0 ', () => {
            const result = divide(20, 0)

            expect(result).toBe(Infinity)
        });

        test('divide string', () => {
            const result = divide(100, "cero")

            expect(result).toBe(NaN)
        });

        test('divide by 2 strings', () => {
            const result = divide("a", "a")

            expect(result).toBe(NaN)
        });

        test('divide array values', () => {
            const arr = [10, 2]
            const result = divide(arr[0], arr[1])

            expect(result).toBe(5)
        });

        test('should divide object values ', () => {

            const obj = {
                values: {
                    first: 10,
                    second: 2
                }
            }

            const result = divide(obj.values.first, obj.values.second)

            expect(result).toBe(5)

        });
    });
});