xtest('this test pass', () => {
    let number = 1
    let numberplus = 2.110
    const suma = number + numberplus

    console.log(suma);
})

xtest('this test pass', () => {
    let number = 1
    const suma = number
    console.log(suma);
})


xdescribe('test example', () => {
    test('should pass', () => {
        let number = 10

        console.log(number);
    });

    test('should pass again', () => {
        let string = "hola"

        console.log(string);
    });

    test('should pass lenght', () => {
        let string = "asd"

        if (string.length == 3) {
            console.log('yes');
        } else {
            throw new Error('failed')
        }
    });
});