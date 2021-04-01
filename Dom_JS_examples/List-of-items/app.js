function addItem() {
   let inputElement = document.getElementById('newItemText');
   let itemsListElement = document.getElementById('items');

   let liElement = document.createElement('li'); 
   liElement.innerHTML = inputElement.value;
   inputElement.value = '';
   itemsListElement.appendChild(liElement);

   

}