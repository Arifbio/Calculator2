// var button = document.getElementById('btn1');

// // Add a click event listener to the button
// button.addEventListener('click', function() {
//     alert('Button was clicked!');
// });

function appendToDisplay(value){
  const display = document.getElementById('display');
    display.value += value;
  
}

// function calculate() {
//   const display = document.getElementById('display');
//   try {
//       display.value = eval(display.value);
//   } catch (e) {
//       display.value = 'Error';
//   }
// }
let a = "1,2,3,4,5,6,7,8,9";

// making this string into a array 

let str1 = a.split(',');
console.log(str1);

// str1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// making a loop for this array 
let mLoo = '';
for (i = 0; i < str1.length ; i++ ) {
   mLoo += str1[i]  ;

}
console.log(mLoo);