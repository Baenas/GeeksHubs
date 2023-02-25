const add = require('../add')

describe('basic test', () => {
    test('it sums integers', () => {
        const result = add(1, 2);

        expect(result).toBe(3);
    });


    test('big integers', () => {
        const result = add(10000000, 1);

        expect(result).toBe(10000001)
    });


    test('negative integers', () => {
        const result = add(1, -1
        )
        expect(result).toBe(0)
    });


    test('should sums 0', () => {
        const result = add(1, 0)

        expect(result).toBe(1)
    });


    test('decimal', () => {
        const result = add(1, 0.3)

        expect(result).toBe(1.3)

    });

    test('decimal+', () => {
        const result = add(1.2, 1.2)

        expect(result).toBe(2.4)

    });

    test('decimal- ', () => {
        const result = add(1.2,-0.2)

        expect(result).toBe(1)
    });


    test('decimal ', () => {
        const result = add(1.2, 0.23)
            
        expect(result).toBe(1.43)

    });

    test('NaN', () => {
        const result = add("a","b")
            
        expect(result).toBe(NaN)
    });


    test('array length', () => {
        let array = [123];

        let array_1 = [1, 2, 3]
        
        expect(array).toHaveLength(1);
        expect(array_1).toHaveLength(3)
    });

    test('> 1', () => {
        let one = 1;

        expect(one).toBeGreaterThan(0)

        expect(one).toBeLessThan(2)
    });
});

