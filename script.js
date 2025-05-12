/*
const firstName = "pawan";
const sirName = "Hardasani";
const bornYear = 2003;

console.log (`My Name is ${firstName} 
    My Sir name is ${sirName} 
    My age is ${2025 - bornYear}`); 
    let anyaAge = 19;
    const ageRequired = 18;

    if (anyaAge >= ageRequired) {
        console.log('Welcome to Essay Club')
    } else {
        console.log('jaldi paida hona chahiye thi bhai')
    }
        const massMark = 55;
        const heightMark = 1.85;
        const massJohn = 45;
        const heightJohn = 2.35;
        
        const BMIMark = massMark / (heightMark * heightMark);
        const BMIJohn = massJohn / (heightJohn * heightJohn);
        console.log(BMIMark, BMIJohn);
        if (BMIMark >= BMIJohn) {
            console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
        } else {
            console.log(`Mark's BMI ${BMIJohn} is higher than John's ${BMIMark}!`);
        }
            
        const myAge = "23"
        console.log(Number(myAge) + 25)
        Truthy and falsy values*/
//         let umarWife = ""
//     if (umarWife) {
//         console.log("itni to allowed he abhi chalta he");
//     }
//     else {
// console.log("happy life");
//     
// const Dolphins1 = 96;
// const Dolphins2 = 108;
// const Dolphins3 = 110;

// const Koalas1 = 88;
// const Koalas2 = 91;
// const Koalas3 = 89;

// let scoreDolphins = (Dolphins1 + Dolphins2 + Dolphins3) / 3;
// let scoreKoalas = (Koalas1 + Koalas2 + Koalas3) / 3;
// console.log(scoreDolphins)
// console.log(scoreKoalas)

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas){
//      console.log("Dolphins win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//     scoreDolphins === scoreKoalas
// } else{}

// function personalDetails(firstName, lastName) {
//     console.log(`Hello Guyz My Name is ${firstName} ${lastName}`)
// }

// let name = "Pawan"
// let sirName = "Hardasani"
// personalDetails(name, sirName)

// function juiceMakerMachine(apple, mango, banana){
// const juice = `Juice of ${apple} Apples and ${mango} Mangoes ${banana} Bananas is ready`;
// return juice;
// }
// const finalJuice = juiceMakerMachine(2, 5, 5);
// console.log(finalJuice);

// function multiplyer(num) {
//     const number =(num * num);
//     return number;
// }

// const userinput = prompt("Enter a Number");
// let finalnum = multiplyer(Number(userinput));
// document.write(finalnum);

// const agecalc = function(birthyear){
//     const age = 2025 - birthyear;
//     return age;
// }
// let age1 = agecalc(2003);
// console.log(age1)
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function fruitJuiceMaker(mango, apple){
//     const mangopices = cutFruitPieces(mango);
//     const applepices = cutFruitPieces(apple);
//     const juice = `Juice with ${mangopices} mangopices and ${applepices} applepieces are done`;
//     return juice;
// }

//     const finalJuice = fruitJuiceMaker(5, 2)
//     console.log(finalJuice)
const calcAverage = (a, b, c) => a + b + c / 3;
const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(85, 54, 49)

console.log(scoreDolphins)