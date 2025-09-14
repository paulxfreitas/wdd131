const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', function() {

    if (input.value.trim() === "") {
        alert("Please enter a chapter!");
        input.focus();
        return;
    }

    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    });

    input.value = "";
    input.focus();

});