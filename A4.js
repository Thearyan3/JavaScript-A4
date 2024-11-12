// Question No. 1 - You are given a string S, and your task is to return an array B(having a size of 2),
//  where B[0] contains the count of character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.

// function countCharacters(){
// let S = "AbaDd";
// let countA = 0;
// let countD = 0;
// for(let i = 0; i < S.length; i++){
//    if(S[i] === "A"){
//       countA++;
//    }else if(S[i] === "D"){
//     countD++;
//    }
// }
// console.log(countA, countD);
// }
// countCharacters();


// Question No. 2 - Tina is given a string S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string S, she decided to write a code that finds out the count of characters that occur more than once in the string. 

// let tina = "1223334444";
// let count = tina[0];
// let duplicates = "";
// for(let j = 0; j < tina.length; j++){
//      count = tina[0 + j];
//     // for(let k = 0 + 1; k < tina.length; k++){
//         if((count === tina[j]) && (!duplicates.search(tina[j]))){
//         count = tina[j];
//         duplicates.split().push(tina[j]);
//         }
//     // }
// }
// console.log(duplicates);



// Question No. 3 - You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the 
// given string. 

// function count_Vowelsfunction(){
// let str = "Prepbytes";
// let vowels = "aeiouAEIOU";
// let count = 0;
// for (let i = 0; i < str.length; i++){
//    for (let j = 0; j < vowels.length; j++){
//    if(str[i] === vowels[j]){
//       count++;
//       }
//    }
// }
// console.log(count);
// }
// count_Vowelsfunction();


// Question No. 4 - You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the concatenation of both the given strings.

// function Concatenate_Strings(){
// let S1 = "Prep";
// let S2 = "bytes";
// let S3 = S1.concat(S2);
// // let S3 = S1 + S2;
// console.log(S3);
// }
// Concatenate_Strings();


// Question No. 5 - You are given a string S, and your task is to return the length of the string S. You have to solve it without using length method. 

// function findLength(){
// let Stri = "Hello, My name is Aryan";
// let count1 = 0;
// (I Method) --->>

// for(No of Stri){
//    if(No !== ""){
//       count1++;
//    }    
// }
// console.log(count1);
// }

// (II Method) --->>
// for(No of Stri){
//     if(((No >= 'a') && (No <= 'z')) || ((No >= 'A') && (No <= 'Z'))){
//       count1++;  // This condition will not be valid for special characters, spaces or numbers.For that, we have to include ASCII values.
//    }     
// }
// console.log(count1);
// }

// (III Method) --->> 
// console.log(Stri.lastIndexOf("n") + 1);
// findLength();


// Question No. 6 - You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which player wins the maximum number of games or there is a draw between them.

// function Game_Winner(){
//    function Game1(){
//       let game1 = "ADDAAAAAAADDDDD";
//       let A_g1 = 0;
//       let D_g1 = 0;
//       for(wins of game1){
//          if('A' === wins){
//             A_g1++;
//          }else{
//             D_g1++;
//          }
//       }
//       if(A_g1 > D_g1){
//         console.log("Aditya");
//       }else if(A_g1 === D_g1){
//          console.log("Draw");
//       }else{
//          console.log("Danish");
//       }
//    }
//    Game1();
//    function Game2(){
//       let game2 = "ADDAADADD";
//       let A_g2 = 0;
//       let D_g2 = 0;
//       for(wins of game2){
//          if('A' === wins){
//             A_g2++;
//          }else{
//             D_g2++;
//          }
//       }
//       if(A_g2 > D_g2){
//         console.log("Aditya");
//       }else if(A_g2 === D_g2){
//          console.log("Draw");
//       }else{
//          console.log("Danish");
//       }
//    }
//    Game2();
// }
// Game_Winner();


// Question No. 7 - You are given two strings S and P, and your task is to concatenate them and return the concatenated string. 

// function joinStrings(){
//    let Q = "PrepBytes";
//    let P = "Technologies";
//    let joinedQP = Q.concat(P);
//    console.log(joinedQP); 
// }
// joinStrings();


// Question No. 8 - You are given a string S, Your task is to check wether the given string is a Palindrome or not. 
// A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain 
// both upppercase lowercase letters. 

// function Plain_Check(){
//    let name1 = "Naman";
//    let pal = "";
//    let name2 = "naman";
//    for(let i = name2.length - 1; i >= 0; i--){
//      pal = pal + name2[i];
// }
// if(name2 === pal){
//    console.log("true");
// }else{
//    console.log("false");
// }
// }
// Plain_Check();


// Question No. 9 - You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters. 

// function Reverse_String(){
//    let name3 = "I am utkarsh Raj";
//    let name4 = "";
//    for(let i = name3.length - 1; i >= 0 ; i--){
//          name4 = name4 + name3[i];
//    }
//    console.log(name4);
// }
// Reverse_String();


// Question No. 10 - You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO. 

// function String_Match(){
// let str1 = "Prepbytes";
// let str2 = "Prepbytes";
// if(str1 === str2){
//    console.log("YES");
// }else{
//    console.log("NO");
// }
// }
//  String_Match();


// Question No. 11 - You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string. 

// function Replace(){
// let str4 = "Hi, I am You You Prepbytes.";
// let str5 = str4.replaceAll("You ", "");
// console.log(str5);
// }
// Replace();


// Question No. 12 - You are given a string S, Your task is to split the string with respect to spaces. 

// function Split_the_String(){
// let name6 = "I am utkarsh raj";
// let arr6 = name6.split();
// console.log(arr6);
// }
// Split_the_String();


// Question No. 13 - You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of consonants in the given string. 

// function count_Vowelsfunction(){
// let word = "PrepBytes";
// let CountV = 0;
// let CountC = 0;
// let vowels = "aeiouAEIOU";

// for (let i = 0; i < word.length; i++) {
//   if (vowels.includes(word[i])) {
//    CountV++;
//   } else {
//     CountC++;
//   }
// }
// console.log(CountV, CountC);
// }
// count_Vowelsfunction();