export default class AddTodo {
  constructor(){
    this.btn = document.getElementById('add');
    this.tittle = document.getElementById('title');
    this.description = document.getElementById('description');
  }

  onClick(callback){
    this.btn.onclick = () => {
      if (this.tittle.value === '' || this.description.value == ''){
        /* alert.classList.remove('d-none');
        alert.innerText = 'title and description are required'; */
        console.error('Incorrecto');
      } else {
        callback(this.tittle.value, this.description.value);
      }
    }
  }
}