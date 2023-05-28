export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.btn = document.getElementById('add');
        this.btn.onclick = () => this.addTodo('Titulo', 'Descripcion');

    }
    setModel(model){
        this.model = model;
    }
    addTodo(tittle, description){
        console.log(tittle,description);
    }
}