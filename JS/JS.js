let $ = document;

let todoInput = $.getElementById('input-todo');

let locationOfNewTodo = $.getElementById('location-of-new-todo');

let addBtn = $.getElementById('add-btn');

//addBtn.addEventListener('click', todoAdds);

todoInput.addEventListener('keydown', enterKey);


function enterKey(event) {

    // console.log(event)
    if (event.keyCode === 13) {
        //alert('enter');
        todoAdds();
    }

    function todoAdds() {
        //console.log('sssss');
        let newElem1 = $.createElement('div');
        newElem1.setAttribute('class', 'row justify-content-center')
        locationOfNewTodo.append(newElem1);

        let newElem2 = $.createElement('div');
        newElem2.setAttribute('class', 'col-xl-5 showed-todo')
        newElem1.append(newElem2);

        let newElem3 = $.createElement('p');
        newElem3.innerHTML = todoInput.value;
        newElem3.setAttribute('class', 'todo-name')
        newElem2.append(newElem3);

        let newElem4 = $.createElement('a');
        newElem4.setAttribute('href', '#')
        newElem2.append(newElem4);
        newElem4.addEventListener('click', deletedTodo)

        let newElem5 = $.createElement('img');
        newElem5.setAttribute('src', '../Other/pngwing.com.png');
        newElem5.setAttribute('alt', 'delete');
        newElem5.setAttribute('height', '30px');
        newElem5.setAttribute('width', '30px');
        newElem5.setAttribute('class', 'delete-logo');
        newElem4.append(newElem5);

        todoInput.value = null;
    }

    function deletedTodo(event) {
        //console.log(event);
        event.target.parentNode.parentNode.remove();
    }
}