const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector(".js-title");


function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; //여기서는 ``를 사용해야함.
  // mini if ${조건 ? return : another return}
}

//setInterval 함수
//setInterval (실행시킬 함수, 시간 1000=1초)



function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();
