// 1- Girilen sayıların asal sayı olup olmadığını yazdıran fonksiyon
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

// 2- Parametre olarak girilen iki sayının arkadaş olup olmadığını bulan program

function friendNumber(number1,number2){
    let totalNumber1 = 0 ,totalNumber2 = 0
    for(let i = 1 ; i < number1 ; i++){
        if (number1 % i == 0) {
            totalNumber1 += i;
        }
    }

    for(let i = 1 ; i < number2 ; i++){
        if (number2 % i == 0) {
            totalNumber2 += i;
        }
    }

    if (totalNumber1 == number2 && totalNumber2 == number1) {
        console.log(`${number1} ve ${number2} arkadaş sayılardır.`)
    }
    else
    console.log(`${number1} ve ${number2} arkadaş sayılar değildir.`)
}

friendNumber(220,284)

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı
    for (let i = 1; i <= 1000; i++) {
        let total = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                total += j
            }
        }
        if (total == i) {
            console.log(i+" mükemmel sayı")
        }
    }

// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
    for (let i = 2; i <= 1000; i++) {
        let count
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count = 1
            }
        }
        if (count != 1) {
            console.log(i+ " asal sayıdır.")
        }
    }