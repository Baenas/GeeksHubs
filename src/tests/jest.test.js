test('this test pass', () => {
    let number = 1
    let numberplus = 2.110
    const suma = number + numberplus

})

test('this test pass', () => {
    let number = 1
    const suma = number
})


describe('test example', () => {
    test('should pass', () => {
        let number = 10

    });

    test('should pass again', () => {
        let string = "hola"

    });

    test('should pass lenght', () => {
        let string = "asd"

        if (string.length == 3) {
        } else {
            throw new Error('failed')
        }
    });
});