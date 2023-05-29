import Alert from './alert.js';

export default class AddTodo {
  constructor(){
    this.btn = document.getElementById('add');
    this.tittle = document.getElementById('title');
    this.description = document.getElementById('description');
    this.alert = new Alert('alert');
  }

  onClick(callback){
    this.btn.onclick = () => {
      if (this.tittle.value === '' || this.description.value == ''){
        /* alert.classList.remove('d-none');
        alert.innerText = 'title and description are required'; */
        this.alert.show('title and description are required');
        //console.error('Incorrecto');
      } else {
        this.alert.hide();
        callback(this.tittle.value, this.description.value);
      }
    }
  }
}