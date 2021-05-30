console.log(Boolean(Number('10')) + 1); //2 +
console.log('sub ' + Number(false));//sub 0 +
console.log(16 *  '          91      ');//1456 +
console.log(true - 70);//-69 +
console.log(Number(1 + String(1)) + 1);//12 +



let hour = prompt('ведите количество часов');


function secInHour() {
    let seconds = 3600 * Number(hour);
    alert(seconds)
};
secInHour();



let num = 1;
num += 12 ;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
alert(num);

