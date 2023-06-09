import Alert from './alert.js';

export default class Modal{
  constructor(){
    this.tittle = document .getElementById('modal-title');
    this.description = document .getElementById('modal-description');
    this.btn = document .getElementById('modal-btn');
    this.completed = document .getElementById('modal-completed');
    this.alert = new Alert('modal-alert');
    
    this.todo = null;
  }
  setValues(todo){
    this.todo = todo;
    this.tittle.value = todo.tittle;
    this.description.value = todo.description;
    this.completed.checked = todo.completed;
  }
  onClick(callback){
    this.btn.onclick = () => {
      if (!this.tittle.value || !this.description.value){
        this.alert.show('title and description are required');
        return;
      } 
      this.alert.hide();
      $('#modal').modal('toggle');
      callback(this.todo.id, {
        tittle: this.tittle.value,
        description: this.description.value,
        completed: this.completed.checked
      });
    }
  }
}