const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];


function paintToDo(text){
    const time = new Date();
    const li = document.createElement("li");
    const delBtn = document.createElement('button')
    const date = document.createElement("span")
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    const min = time.getMinutes(),
        hour = time.getHours();
    span.innerText = (text +" ");
    date.innerText = `${hour}:${min}`;
    delBtn.innerText ="X";
    li.appendChild(span);
    li.appendChild(date);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
         text : text,
         id: newId,
    }
    toDos.push(toDoObj);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
    }

}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit" , handleSubmit)
}

init();