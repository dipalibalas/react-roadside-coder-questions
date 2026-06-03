document.addEventListener("DOMContentLoaded",()=>{
    const todoForm = document.querySelector(".todo-form");
    const todoInput = document.querySelector(".todo-input");
    const todoSubmit = document.querySelector(".todo-submit");
    const todoList = document.querySelector(".todo-list");
    let isEditMode = false;
    let editItem = null;
    todoForm.addEventListener("submit",(event)=>{
        event.preventDefault()
        const todoText =todoInput.value.trim();

        if(todoText !== ""){
            if(isEditMode){
                editItem.firstChild.textContent = todoText;
                todoSubmit.innerText = "Add Todo";
                 todoInput.value = ""
                isEditMode = false;
                editItem=null;
            }else{
                // add todo
                addTodo(todoText)
                todoInput.value = ""
            }
            
        }else{
            alert("Please enter valid task.")
        }
    })

    todoList.addEventListener("click",(event)=>{
        const target = event.target;
        if(target.tagName === "BUTTON"){
            const todoItem = target.parentNode;
            if(target.innerText === "❌"){
                todoItem.remove(); // Delete Todo
            }else if(target.innerText === "✏️"){
                isEditMode = true;
                editItem = todoItem;
                todoSubmit.innerText = "Edit Todo";
                todoInput.value = todoItem.firstChild.textContent;
                todoInput.focus();
            }
        }
    })

    const addTodo = (todoText)=>{
        const todoItem = document.createElement("li");
        const editButton = document.createElement("button");
        const removeButton = document.createElement("button");

        todoItem.innerHTML = `<span>${todoText}</span>`;
        editButton.innerText = `✏️`;
        removeButton.innerText = `❌`

        todoItem.appendChild(editButton);
        todoItem.appendChild(removeButton);
        todoList.appendChild(todoItem);
    }


})