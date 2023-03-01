export class stringCalculator {


    add(string: string) {

        let numbers = string.split(',')

        if (numbers.length > 0) {
            let total = 0

            for (let index = 0; index < numbers.length; index++) {
                total += Number(numbers[index])
            }

            return total;
        } else {
            
            return Number(string)
        }




    }

}