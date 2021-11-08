//Girilen sayıların asal sayı olup olmadığını yazdıran fonksiyon
function findPrime(...numbers){
    for(let i=0; i < numbers.length; i++) {
        let total = 0;
        for(let j=2; j < numbers[i]; j++) {
            if(numbers[i] % j == 0){
                total = 1;
            }
        }
        if (total == 0) {
            console.log(numbers[i] + " asal sayıdır")
        }
        else{
            console.log(numbers[i] + " asal sayı değildir")
        }
    }
}


findPrime(1,5,4,8,9,12,11,7,21,13);