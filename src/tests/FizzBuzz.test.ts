import { FizzBuzz } from "../FizzBuzz";

test('Si le pasa 0 devuelve 0', () => {

    let fizzBuzz =  new FizzBuzz();

    let value = fizzBuzz.add(0);

    expect(value).toBe(0)

})


test('Si le pasa 1 devuelve 1', () => {

    let fizzBuzz =  new FizzBuzz();

    let value = fizzBuzz.add(1);

    expect(value).toBe(1)

})

test('Devuelve Fizz si el numero es divisible por tres ', () => {

    let fizzBuzz =  new FizzBuzz();

    let value = fizzBuzz.add(3);

    expect(value).toBe('Fizz')

})

test('Devuelve Buzz si el numero es divisible por cinco ', () => {

    let fizzBuzz =  new FizzBuzz();

    let value = fizzBuzz.add(5);

    expect(value).toBe('Buzz')

})

test('Devuelve Buzz si el numero es divisible por tres y por 5 ', () => {

    let fizzBuzz =  new FizzBuzz();

    let value = fizzBuzz.add(15);

    expect(value).toBe('FizzBuzz')

})