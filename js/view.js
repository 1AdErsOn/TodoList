import AddTodo from './components/add-todo.js';
import Modal from './components/modal.js';

export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        //instances
        this.addTodoForm = new AddTodo();
        this.modal = new Modal();
        //callback
        this.addTodoForm.onClick((tittle, description) => this.addTodo(tittle, description));
        this.modal.onClick((id, values) => this.editTodo(id, values));
    }
    setModel(model){
        this.model = model;
    }
    render(){
        const todos = this.model.getTodos();
        /* for(const todo of todos){
            this.createRow(todo);
        } */
        todos.forEach((todo) => this.createRow(todo));
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
    editTodo(id,values){
        /* console.log(id);
        console.log(values); */
        this.model.editTodo(id, values);
        //this.render();
        const row = document.getElementById(id);
        row.children[0].innerText = values.tittle;
        row.children[1].innerText = values.description;
        row.children[2].children[0].checked = values.completed;
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
            <!--create input-->
        </td>
        <td class="text-right">
            <!--create buttons-->
        </td>
        `;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);//view
        row.children[2].appendChild(checkbox);

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'mb-1');
        editBtn.setAttribute('data-toggle','modal');
        editBtn.setAttribute('data-target','#modal');
        editBtn.innerHTML = `<i class="fa fa-pencil"></i>`;
        editBtn.onclick = () => this.modal.setValues(todo);//view
        row.children[3].appendChild(editBtn);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = `<i class="fa fa-trash"></i>`;
        removeBtn.onclick = () => this.removeTodo(todo.id);//view
        //console.log('Borrando Fila');
        row.children[3].appendChild(removeBtn);
    }
}