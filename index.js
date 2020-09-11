console.log('I am working, I am JS, I am beautiful and i am worth it.');

// 주석 태그
let a = 221;
const b = 5;
a = 4;
console.log(a, b);


//Boolean
const something = true; //is not a Boolean

//day
const infoWonchul = {
  name:"Wonchul",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["ABC, BBC, CCC"],
    favFoods: [
      {
        name: "Kimchi",
        fatty: false
      },
      {
        name: "Cheese Burger",
        fatty : true
      }
    ] 
  };

console.log(infoWonchul.favFoods[0].name);

//JS 함수 문법
function sayHello(name, age){
 console.log(`Hello! ${name} you are ${age} years old`);
}
//`` 사용법

sayHello("Wonchul", 26);

//exemple
//declare function name and values
function introduce(teacher, name ,age) {
console.log("Hello", teacher, "I'm", name, "and", age, "years old.");
}
introduce("Nico!", "Wonchul", "26")

//functions calculator
  //plus
  const calculator = {
    plus : function(a,b) {
      return a+b;
    },
  
  //minus
    minus : function(a,b){
      return a-b;
    },

  //multiple
    multiple : function(a,b){
      return a*b;
    },

  //diviser
    divide : function(a,b){
      return a/b;
    },

  //power
    power : function(a,b){
      return a ** b;
    }
  }

//afficage
const plus = calculator.plus(1,1);
const minus = calculator.minus(2,1);
const multiple = calculator.multiple(3,3);
const divide = calculator.divide(8,2);
const power = calculator.power(4,9);

console.log(plus, minus, multiple, divide, power);

//choisir id dans html
console.log(document);

const title = document.querySelector("#title");

console.dir(document);

title.innerHTML = "Hi! from JS!";
//title.style.color = "red";

document.title = "You are mine from now";


//addEventListener(listener, function)
function handleResize(event){
  console.log(event); //이걸로 자동적으로 function이 작동함 form이나 클릭등을 사용할 때 유용함
}
window.addEventListener("resize",handleResize);

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#6c5ce7";

/*function handleClick(){
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else{
    title.style.color = BASE_COLOR;
  }
}*/

const CLICKED_CLASS = "clicked";

/*
function handleClick(){
  const hasClass = title.classList.contains(CLICKED_CLASS);
//  const currentClass = title.className;
  if(hasClass){
    title.classList.remove(CLICKED_CLASS);
  }else {
    title.classList.add(CLICKED_CLASS);
  }
}
*/ //이걸 toggle로 요약해서 표현할 수 있음.
//->
function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  /*title.style.color = BASE_COLOR;*/
  title.addEventListener("click", handleClick); //mouseenter도 가능
}
init();

//이런 event를 찾고 싶다면 MDN을 검색해보는 것이 좋다.

