//  Code should be so expressive that comment should not be needed to understand the code

//task 1
function calculateAge(birthYear, currentYear){
  var  currentYear  = currentYear;
  var birthYear = birthYear;
  var age = currentYear - birthYear;
  alert("You are either " + age +  " or " + age);
}

function showCurrentYear(birthYear){
  var date = new Date();
  var year = date.getFullYear();
  var age = year - birthYear;
  //document.getElementById('currentYearB') .value = year;
  //alert(year);
  alert("You are either " + age +  " or " + age);
}
//task 2
function calculateSupply(age, amountPerDay, roundIt){
   var perDay = amountPerDay  / age / 360;
  if (!roundIt){
    
   alert("You will need " + perDay + " to last you until the ripe old age of " + age);
  }
  else {
    perDay =Math.round(perDay) ;
   alert("You will need " + perDay  + " to last you until the ripe old age of " + age);
  }
}

//task 3
function calcCircumfrence(radius){
  alert("The circumference is " + Math.round(2 * Math.PI * radius));
}

function calcArea(radius){
  alert("The are is "+ Math.round(Math.PI * radius * radius));
}

//task 4
function celsiusToFahrenheit(celsius, fahrenheit){
  //Multiply by 9, then divide by 5, then add 32
  var celsiusTemp = celsius;
  var FinalTemp = celsiusTemp * 9 / 5 + 32;
  alert(celsiusTemp + "°C is " + FinalTemp + "°F");
}

function fahrenheitToCelsius(celsius, fahrenheit){
  //Deduct 32, then multiply by 5, then divide by 9
  var fahrenheitTemp = fahrenheit;
  var finalTemp = (fahrenheitTemp - 32) * 5 / 9;
  alert(fahrenheitTemp + "°F is " + finalTemp + "°C");
}