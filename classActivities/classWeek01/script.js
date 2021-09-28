
function myFunc() {
    let newName = document.querySelector('#newName').value;
    let li = document.createElement('li');
    li.innerHTML = newName;

    document.querySelector('#nameList').appendChild(li);
    // list.textContent = 'New List Item'

}


document.getElementById('demo').addEventListener('click', addToList);
