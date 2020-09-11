const form = document.querySelector(".js-form"), input= form.querySelector("input"), greeting = document.querySelector(".js-greetings");
// querySelector 는 첫 번째 element만 가져오고 querySelectorAll은 true값인 모든 elements를 가져옴.

const USER_LS = "currentUser", SHOWING_ON = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault(); //기본 form event 설정 없애기
  const currentValue = input.value;
  console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();