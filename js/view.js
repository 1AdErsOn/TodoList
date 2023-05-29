import AddTodo from './components/add-todo.js';

export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();

        this.addTodoForm.onClick((tittle, description) => this.addTodo(tittle, description));
    }
    setModel(model){
        this.model = model;
    }
    addTodo(tittle, description){
        //this.model.addTodo(tittle, description);
        const todo = this.model.addTodo(tittle, description);//model
        //todo.tittle = 'YOUTUBE';
        this.createRow(todo);
    }
    removeTodo(id){
        this.model.removeTodo(id);//model
        document.getElementById(id).remove();
    }
    toggleCompleted(id){
        this.model.toggleCompleted(id);
    }
    createRow(todo){
        const row = table.insertRow();
        row.setAttribute('id', todo.id);
        row.innerHTML = `
        <td>${todo.tittle}</td>
        <td>${todo.description}</td>
        <td class="text-center">
        
        </td>
        <td class="text-right">
        <button class="btn btn-primary mb-1">
        <i class="fa fa-pencil"></i>
        </button>

        </td>
        `;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);//view
        row.children[2].appendChild(checkbox);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = `<i class="fa fa-trash"></i>`;
        removeBtn.onclick = () => this.removeTodo(todo.id);//view
        //console.log('Borrando Fila');
        row.children[3].appendChild(removeBtn);
    }
}