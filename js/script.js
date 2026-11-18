 console.warn("you should be careful");
 console.error("This is an error");
 console.table([1,2,3])

// variable

/* 

var/let/const variableName = variableValue

*/
  let num; //variable decleration
  num = 100; //variable assign
  console.log(num)

/* 
  
  js a 2 kinds of data type =

  1.primitive data type = 1.String, 2.Number ,3.Boolean, 4.Undefined, 5.Null,6.BigInt,7.Symbol
  
  2.Non-primitive data type =1.Array,2.Object,3.Function
 
 
*/
 
//   String

let myName ="Sumaiya";
console.log(myName)
console.log(typeof myName)

//Number

let Num=-100;
console.log(Num)
console.log(typeof Num)

//Boolean

let isActive=true;
console.log(isActive)
console.log(typeof isActive)

//Undefined

let numberOne;
console.log(numberOne)
console.log(typeof numberOne)

//Null

let value =null;
console.log(value)
console.log(typeof value)

//BigInt

let numBer = 102341098347564755666455n;
console.log(numBer)

//Symbol

let rollOne=Symbol (1);
let rollTwo=Symbol (1);
console.log(rollOne === rollTwo)
console.log(rollOne == rollTwo)
console.log(rollOne)

let ak=10;
let bk=12;
console.log(ak==bk)

let k=10;//number
let j='10';//string
console.log(k==j)
console.log(k===j)

//Logical Operator = &&,||,!

let p = 14;
let q = 12;
let t = 12;
let s = 12;

console.log( p && q)
if( p > q && t == s){
    console.log("True")
}else{
    console.log("False")
}

let x=12;
let y=9;
let l=12;
let h=12;

if( x>y || l == h){
    console.log("true")
}else{
    console.log("false")
}

let f = 14;
console.log(!f)

//

let roadNumber = 102;
let Address = `Creative IT ,
 Mirpur - 10`;

let Mirpur = `road: ${roadNumber}`;

 console.log(Mirpur)
console.log(Address)


let n=100;
let info=`My Output is ${n}`;
console.log(info)


//condition

//syntax:

/*if(condition){
    //all code
}eles{
    //all code
}
*/

let g=10;
let r=20;
z = g+r;
console.log(z)


//Comparision

let Number =21;
if(Number%2 ==0){
    console.log("Even")
}else{
    console.log("Odd")
}


// Loop diye Grade nirnoy code

for (let i = 1; i <= 5; i++) {

    let marks = 102;

    if (marks < 0 || marks > 100) {
        console.log("Invalid Marks");
    }
    else if (marks >= 80) {
        console.log("Grade A+");
    }
    else if (marks >= 70) {
        console.log("Grade A");
    }
    else if (marks >= 60) {
        console.log("Grade A-");
    }
    else if (marks >= 50) {
        console.log("Grade B");
    }
    else if (marks >= 40) {
        console.log("Grade C");
    }
    else if (marks >= 33) {
        console.log("Grade D");
    }
    else {
        console.log("Fail");
    }
}

// Create a variable named name and store a name in it. 


let name = "Sumaiya Akter Brishty";

console.log(name);

// Create a variable named age and store the age in it. 


let age = 21;

console.log(age);

// Create two variables named city and country. Store the city and country names and print both values.


let city = "Dhaka";
let country = "Bangladesh";

console.log(city);
console.log(country);

//Create a variable using let with an initial value of 10. Change its value to 20 and print it.


let number = 10;

number = 20;

console.log(number);

//Create a constant named PI and assign the value 3.1416 to it.


const PI = 3.1416;

console.log(PI);

//Create two variables named firstName and lastName. Combine them to create and print the full name.


let firstName = "Sumaiya";
let lastName = "Akter";

let fullName = firstName + " " + lastName;

console.log(fullName);

//Create a variable named price with a value of 500. Increase its value by 100 and print the result.


let price = 500;

price = price + 100;

console.log(price);

//Create two variables, a = 10 and b = 20. Swap their values.


let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log("a =", a);
console.log("b =", b);


//Create three variables named productName, productPrice, and quantity. Assign values and print them.

let productName = "Laptop";
let productPrice = 50000;
let quantity = 2;

console.log("productName =", productName);
console.log("productPrice =", productPrice);
console.log("quantity =", quantity);


/*Check the data types of the following values using typeof:
"JavaScript"
100
true
undefined
null*/


console.log(typeof "JavaScript");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

//Create a String variable and check its data type.

let language = "Python";

console.log(typeof language);

//Create a Number variable and check its data type.

let theNumber = 100;

console.log(typeof theNumber);

//Create an Array containing five numbers.

let numbers = [10, 20, 30, 40, 50];

console.log(typeof numbers);
 console.log(Array.isArray(numbers));

//Create an Object containing name, age, city properties

let student = {
    name: "Sumaiya",
    age: 21,
    city: "Dhaka"
};

console.log(student);

//Loop diye 100 bar name paste


for (let i = 1; i <= 100; i++) {
    console.log(i,"Sumaiya Akter Brishty");
}

