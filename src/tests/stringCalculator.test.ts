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