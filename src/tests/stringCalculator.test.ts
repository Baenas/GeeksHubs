import { stringCalculator } from "../stringCalculator";

test('No le pasamos nada devuelve 0', () => {
    
    let string = "";
    let stringOperator = new stringCalculator();

    let value = stringOperator.add(string);

    expect(value).toBe(0);

});

test('Le pasamos UNO y devuelve UNO', () => {
    
    let string = "1";
    let stringOperator = new stringCalculator();

    let value = stringOperator.add(string);

    expect(value).toBe(1);

});

test('Le pasamos dos numeros separados por comas', () => {
    
    let string = "1,2";
    let stringOperator = new stringCalculator();

    let value = stringOperator.add(string);

    expect(value).toBe(3);

});

test('Le pasamos tres numeros separados por comas', () => {
    
    let string = "1,2,3";
    let stringOperator = new stringCalculator();

    let value = stringOperator.add(string);

    expect(value).toBe(6);

});

test('Le pasamos numeros indefinidos separados por comas', () => {
    
    let string = "1,2,3,1,1";
    let stringOperator = new stringCalculator();

    let value = stringOperator.add(string);

    expect(value).toBe(8);

});


