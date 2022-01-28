var state = {
    todos: [],
  };
var todoListElement = document.getElementById("todo-list");
var form = document.querySelector(".input-form");
var inputElement = document.getElementById("todo-input");

form.addEventListener("submit", addTodoItem);

function addTodoItem(e) {
  e.preventDefault();
  if (inputElement.value !== "") {
    state.todos.push(inputElement.value);
    printItemToScreen(inputElement.value);
    inputElement.value = "";
  }
  console.log(state.todos);
}

function printItemToScreen(todoItem) {
  var todoHTML = `<div class="todo-item"  >
    <span class="edit" id="item-${todoItem}">${todoItem}</span>
    <button onclick="doubleItem('${todoItem}')">double</button>
    <i onclick="deleteItem('${todoItem}')" class="fa fa-trash-o" style="font-size:20px;color:red"></i>
  </div>`;
  //   deleteItem(todoItem);
  todoListElement.innerHTML += todoHTML;
  console.log(todoItem);
}

//  ['geekster',   'aknsanskanskan']

function deleteItem(item) {
  //   state.todos.splice(index, number of elements to be deleted)
  var index = state.todos.indexOf(item);
  state.todos.splice(index, 1);
  console.log(state.todos);
  renderArray();
}
function doubleItem(item){
    var index1 = state.todos.indexOf(item);
/*     var z = state.todos[index1];
    z = String(z)
    z = z + z */
    item = item +" "+ item
    state.todos[index1] = item
    renderArray()
    
}
/* function editItem(item){
  var index1 = state.todos.indexOf(item);
  var editt = document.querySelector(".edit");
  editt.contentEditable = true;
  console.log(state.todos);
}
function doneItem(item){
  var editt = document.querySelector(".edit");
  editt.contentEditable = false;
  state.todos[index1] = item
  console.log(state.todos);
} */

function renderArray() {
  todoListElement.innerHTML = "";
  for (i in state.todos) {
    printItemToScreen(state.todos[i]);
    function printHello() {
        console.log("hellooooo");
      }
  }
}    
