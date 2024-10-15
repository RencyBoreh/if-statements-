let names = document.getElementById('name').value;
let email = document.getElementById('email').value;
let age= document.getElementById('age').value;
let submit = document.getElementById('submit');
let result = document.getElementById('result');
let myAge;

submit.onclick=function(){
  myAge=age;
  myAge = Number(myAge);
  if (myAge>= 18){
  result.textContent='You Can Vote and Drive';
  }
}