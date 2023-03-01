const FizzConst = "Fizz"
const BuzzConst = "Buzz"
const FizzBuzzConst = "FizzBuzz"

export class FizzBuzz {


    add(num: number) {

        if (num === 0) {
            return 0;
        } else if (num === 1) {
            return 1
        }

        if (this.fizzBuzz(num)) {
            return FizzBuzzConst
        } else if (this.buzz(num)) {
            return BuzzConst
        } else if (this.fizz(num)) {
            return FizzConst
        }

        return num;

    }


    private fizz(num: number) {
        return num % 3 === 0;
    }

    private buzz(num: number) {
        return num % 5 == 0;
    }

    private fizzBuzz(num: number) {
        return num % 5 === 0 && num % 3 === 0;
    }
}