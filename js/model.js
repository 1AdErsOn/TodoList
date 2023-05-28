export default class Model {
    constructor(){
        this.view = null;
        this.todos = [];
    }
    setView (view){
        this.view = view;
    }
    getTodos (){
        return this.todos;
    }
    addTodo (tittle, description){
        console.log(tittle, description);
    }
}