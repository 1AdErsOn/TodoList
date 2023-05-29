export default class Model {
    constructor(){
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1){
            this.todos = [
                {
                    id: 0,
                    tittle: 'Learm JS',
                    description: 'Watch JS Tutorials',
                    completed: false
                }
            ];
            this.currendId = 1;
        } else {
            this.currendId = this.todos[this.todos.length - 1].id + 1;
        }
    }
    setView(view){
        this.view = view;
    }
    save(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    getTodos(){
        return this.todos;
    }
    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id);
    }
    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        //console.log(this.todos);
        this.save();
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
        this.save();
        //return Object.assign({}, todo);
        return {...todo};
    }
    editTodo(id ,values){
        const index = this.findTodo(id);
        Object.assign(this.todos[index], values);
        this.save();
    }
    removeTodo(id){
        const index = this.findTodo(id);
        this.save();
        //console.log(this.todos[index]);
        this.todos.splice(index, 1);
    }
}