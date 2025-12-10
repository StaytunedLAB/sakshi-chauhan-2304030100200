//---------------------------------------------------//
 // Prctice Questions//
//---------------------------------------------------//


// 1. Write a program to calculate simple interest and compound interest
// simple interest Calculation
function siCalc(p, r, t){
    let si = (p * r * t) / 100;
    let total = p + si;
    return {si, total};
}

// compound interest Calculation
function ciCalc(P, R, T, n){
    let rate = R/100;
    let amount = P * Math.pow((1 + rate/n), (n*T));
    let ci = amount - P;
    return {ci: ci, amt: amount};
}

let p = 5000, r = 6, t = 2, n = 12;

let a1 = siCalc(p,r,t);
console.log("Simple Interest =", a1.si);
console.log("Total =", a1.total);

let a2 = ciCalc(p,r,t,n);
console.log("Compound Interest =", a2.ci);
console.log("Amount =", a2.amt);


// 2. Write a program to generate Fibonacci series up to n terms.

function fibo(num){
    let a=0, b=1, temp;
    for(let i=0;i<num;i++){
        console.log(a);
        temp = a + b;
        a = b;
        b = temp;
    }
}

fibo(10);

// 3. Grade Calculation using switch case.
let mks = 78;
let grd;

switch(true){
    case (mks>=90):
        grd = "A";
        break;
    case (mks>=75):
        grd = "B";
        break;
    case (mks>=50):
        grd = "C";
        break;
    case (mks>=33):
        grd = "D";
        break;
    default:
        grd = "Fail";
}

console.log("Grade:", grd);

//4. Write a program to check whether a year is leap year or not.
function leap(y){
    if(y%400==0) return true;
    if(y%100==0) return false;
    if(y%4==0) return true;
    return false;
}

console.log(leap(2028) ? "Leap Year" : "Not Leap Year");

//5. Palindrome String Check 
function pal(str){
    let i=0, j=str.length-1;

    while(i<j){
        if(str[i] != str[j]){
            console.log("Not Palindrome");
            return;
        }
        i++;
        j--;
    }
    console.log("Palindrome");
}

pal("level");


