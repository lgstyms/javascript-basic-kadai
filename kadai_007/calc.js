let inputNumber = 30;   //検査値
let fizz;               //３の倍数
let buzz;               //５の倍数
let result;

fizz = inputNumber % 3;
buzz = inputNumber % 5;

if (fizz == 0 && buzz == 0) {
  result = '3と5の倍数です';
} else if (fizz == 0) {
  result = '3の倍数です';
} else if (buzz == 0) {
  result = '5の倍数です';
} else {
  result = inputNumber;
}

console.log(result);