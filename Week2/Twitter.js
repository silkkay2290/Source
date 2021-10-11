//PART 1

// Create an array called twitter_users with 1 user
let twitter_users = ["kayla"];


// Add 3 usernames to the array using .push() (hint: make sure the usernames are strings)
twitter_users.push("taylor");
twitter_users.push("john");
twitter_users.push("alex");
//Create an arrow function called print_array that loops through every username in the array and prints out the username with a “!”At the end
//Example - print_array(["@obama", "@bill", "@vinay"]) should print @obama! @bill! and @vinay to the console
//Hint - no return statement necessary
const print_array = (arr) => {
    arr.forEach((username)=> {
    console.log(username + "!");
    })
};
print_array(["@obama", "@bill", "@vinay"]);
//Create an arrow function  that empties an array using pop and a while loop (hint: use the .length property of an array inside the while loop condition)

 const popArray = (arr) => {
    while(arr.length > 0){
    arr.pop();  
    }
    console.log(arr);
 }
//Call this arrow function with the usernames array to empty the array
popArray(twitter_users);
//----------------------------------------

//PART 2

//Create two tweet objects with text author and date fields
//Example {text: "First tweet", author: "Jack Dorsey", date: "September 20th"}
let tweet1 = { text: "Fun time",author:"Mckayla", data: "12-26-2013"};
let tweet2 = { text: "Idk",author:"Alex", data: "11-08-2019"}; 
//Create an array called tweets and add these two objects to the array
let tweets = [];
tweets.push(tweet1);
tweets.push(tweet2);
//Loop through the array and add a likes field to each tweet object with 0 likes
tweets.forEach((tweet)=> tweet.likes = 0);
//Create an arrow function that takes in a tweet and adds 1 to the likes field of the tweet object
const addLike = (tweet) => {
    tweet.likes += 1;
    console.log(tweet);
 }
 
//Example add_like({text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 0}) should edit the object to be {text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 1}
//Hint - no return statement necessary
tweets.forEach((tweet)=> addLike(tweet));
// Use a forEach to call this function on each tweet

//Create an arrow function that takes in the array of tweets and returns the number of tweets there are with 0 likes
const zero_likes = (tweets) => {
    let nolikes =0;
    tweets.forEach((tweet)=> {
        let nolikes =0;
        if(tweet.likes ===0){
            nolikes+=1;
        }
        })
        console.log(nolikes);
 }
 zero_likes([{text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 0}, {text: "Second tweet", author: "Jeff Bezos", date: "September 21th", likes: 0}])
//ex zero_likes([{text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 0}, {text: "Second tweet", author: "Jeff Bezos", date: "September 21th", likes: 1}]) should return 1