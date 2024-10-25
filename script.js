let marks = 80
marks >=90? console.log("A") :marks >=75&& marks<90? console.log("B") : marks >= 50 && marks <75? console.log("C"): marks< 50? console.log("D"):""

// 2 question
var num = 12345;
var temp = 0;
var digit = 0;
while (num != 0){
digit = num % 10;
temp = (temp*10)+digit;
num= Math.floor(num/10);
}
console.log(temp);

// 3 question
var number= 8;
var power = 3;
var ans = 1
for( let i = 0;i< power; i++){
    ans*= number
}
console.log(ans);

// 4 question
var string = "mam"
var n=string.length
for(let i=0;i<n;i++){
    if(string[i]!=string[n-i-1]){
        console.log(false);
    }
    else{
        console.log(true);
        
    }
}

// 5 question

var vowels = "ananya"
 var cnt = 0
 for(let i = 0;i<vowels.length;i++){
    if(vowels[i]=='a' || vowels[i]== "e" || vowels[i]=="i" || vowels[i]=="o" || vowels[i]=="u"){
        cnt= cnt+1
    }
 }
 console.log(cnt);


// 6 question
 var number1 = 20;
 for( let i=number1;i<=number1*10;i+=number1){
    console.log (i)
 }

// 7 question

var array =[1,2,3,4,5,6,7,8,9,10];
var odd = 0;
var even = 0;
for(i=0;i<array.length;i++){
    if(i%2==0){
        odd+=array[i];
    }
    else {
        even+=array[i];
    }
}
let result={
    even:even,
    odd:odd
}
console.log(result);

// 8 question
var year = 2024
(year%4==0 && (year%100!=0 || year%400!==0))?console.log(true):console.log(false);
