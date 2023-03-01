export class stringCalculator {

    add(string: string) {

        let numbers = string.split(',')

        if (numbers.length === 2) {
            let total = Number(numbers[0]) + Number(numbers[1]);
            return total
        }

        return Number(string)

    }

}