const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'; //TODOS_LS = string / toDos = array

let toDos = [];

function deleteToDo(event){
 //event.target만으로는 father를 찾을 수 없음. dir에서 parentNode를 찾아 추가한다.
 const btn = event.target;
 const li = btn.parentNode;
 toDoList.removeChild(li);
 //여기까지로 눈에 보이지 않게 삭제를 할 수 있지만 새로고침하면 다시 튀어나옴.
 const cleanToDos = toDos.filter(function(toDo){
   return toDo.id !== parseInt(li.id);
 });//parseInt => string을 숫자로
 toDos = cleanToDos;
 saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete❌";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    text : text,
    id: newId
  };
  toDos.push(toDoObj); // array 안에 넣기
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}


function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
    
  }
}


function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();