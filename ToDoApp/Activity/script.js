let addTodoButton=document.querySelector(".add-todo");
let todoInput=document.querySelector(".todo-input");
let todoitemlist=document.querySelector(".todos-list-container");

addTodoButton.addEventListener("click", addTodo)
todoInput.addEventListener("keypress",addTodo)

function addTodo(e){
    let todoInputValue=todoInput.value; 
    if(((e.type=="keypress" && e.key=="Enter") || e.type=="click") && todoInputValue){
      appendTodo(todoInputValue);  
      todoInput.value="";
    }

}

function appendTodo(todo){
    let Todoitemdiv=document.createElement("div");
    Todoitemdiv.classList.add("todo-item");

    let pTag=document.createElement("p");
    pTag.classList.add("todo");
    pTag.textContent=todo;

    let deletebutton=document.createElement("button");
    deletebutton.classList.add("delete");
    deletebutton.textContent="Delete";
    deletebutton.addEventListener("click",deletetodo);

    Todoitemdiv.append(pTag);
    Todoitemdiv.append(deletebutton);
    
    todoitemlist.append(Todoitemdiv);
}

function deletetodo(e) {
  e.target.parentNode.remove();
}

