export default class Model {
    constructor(){
        this.view = null;
        this.todos = [];
        this.currendId = 1;
    }
    setView (view){
        this.view = view;
    }
    getTodos (){
        return this.todos;
    }
    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id);
    }
    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
        //console.log(id);
    }
    addTodo (tittle, description){
        const todo = {
            id: this.currendId++,
            tittle,
            description,
            completed : false
        }
        this.todos.push(todo);
        console.log(this.todos);
        //return Object.assign({}, todo);
        return {...todo};
    }
    removeTodo(id){
        const index = this.findTodo(id);
        //console.log(this.todos[index]);
        this.todos.splice(index, 1);
    }
}