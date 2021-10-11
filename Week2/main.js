//variables
let firstName = "mckayla"; //knows its a string
const age = 20; //cannot change

firstName = "taylor";//reassign
firstName = true;//reassign

// functions
function add(a, b) { //parameters a b
    let addition = a+b;
    return addition;
}

console.log(add(1,2)); 

//arrow fuction 
const subtract = (a,b)=>{ //a,b 
    return a - b;
}

const fullName =(firstName,lastName) =>{
    const full = firstName + lastName;
    return full;
}
const getTime =(today)=>{
    return today + "5pm";
}
const fullName2 =(firstName,lastName)=> firstName+lastName;//returns the same as other fullName
console.log(getTime("Friday"));// returns friday 5pm

subtract(10,7);

let num = 5;
if(num < 10){

} else if (num < 100) {

}else{
    console.log("num is greater than 100");
}

let myAge = 20;
if(myAge ===20){
    console.log("IM 20!");
}
if(myAge < 100 && myAge >0 && myAge === 19){
    console.log("age os ;ess than 100");
}

//ternary
let weather = "raining"; 

let jacket = weather ==="raining"? true : false; //if weather is raining then jacket is equal to true, if weather is sunny then jacket equals false
 //loops
 //for(let i = 0; i < 100; i++){ //prints from 0 to 99
   //  console.log(i);
 //}
let temp = 100;
 while(temp > 0){
     console.log(temp);
     temp = temp - 1; //or temp--
 }

 //objects
 let person = {firstName:"Mckayla", age: 20} 
 console.log(person.age);
 console.log(person.firstName);
 console.log(person["firstName"]);

 person.class = "source";
 console.log(person); //returns firstName: 'Mckayla', age: 20, class: 'source'

 //array(ordered list of somthing)
 let arrayOfNames = ["kaya","kk","thomas"];
 console.log(arrayOfNames[0])//get kaya from index 0(first index)
 arrayOfNames.push('taylor'); // add element to end of array
 arrayOfNames.pop('taylor'); // removes the last element
 arrayOfNames.unshift("Mckayla")//add to top of the list
 arrayOfNames.shift();//removes the first element and shifts the array down
 console.log(arrayOfNames.length);//length of array

 console.log(arrayOfNames[arrayOfNames.length-1])//gets the very last element in the array


 let newNames = ["arr", "kk", "q"];
 for(let i = 0; i < newNames.length; i++){ //prints all elements in the array
     console.log(newNames[i]);
 }
 newNames.forEach((currentName)=> console.log(currentName)); //prints all elemetns in the array
//currentName is a variable name

//array of odd numbers 0-100, then add them all together and print them out

    let newOdd = [];
    for(let i = 1; i < 100; i +=2){
        newOdd.push(i);
    }
    let addedOdds = 0;
    console.log(newOdd);
    for (let i = 0; i < newOdd.length; i++ ){
         newOdd[i]+= addedOdds ;
    }
    console.log(addedOdds);
    
// create and array of book objects(title,author),then use a forEach to print authors of them each out 

