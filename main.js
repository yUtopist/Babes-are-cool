// testing
const d = document, w = window;
const submitOpen = d.querySelector('#header-button-submit'),
  submitPopUp = d.querySelector('#submit-container'),
  submitClose = d.querySelector('#submit-button-close');

submitOpen.addEventListener('click', () => {
  submitPopUp.style.display = 'flex'
})
submitClose.addEventListener('click', () => {
  submitPopUp.style.display = 'none'
})


const taskParent = document.querySelector('#list')

// Code below is for Task adding logic. First we reference input fields:
const titleField = document.querySelector('#post-title');
const descField = document.querySelector('#post-desc');
const postButton = document.querySelector('#post-button');
// then we add click event listener to the button and make it do stuff
postButton.addEventListener('click', function () {
  if (titleField.value != '' && descField.value != '') {
    // creating tag element <task-element> in the abstruct buffer of the browser
    const task = document.createElement('task-element');
    // and then adding attributes to it, those need for web component to work.
    task.setAttribute('title', titleField.value);
    task.setAttribute('desc', descField.value);
    // and then adding that element from the browser's buffer to the HTML page.
    taskParent.appendChild(task);

    // Reseting input fields
    titleField.value = '';
    descField.value = '';

    submitPopUp.style.display = 'none'
  }
  else {
    // If any of the input fields is empty then giving an alert pop up.
    window.alert('Fill up Title and Description fields')
  }
})


const DeleteTask = () => {
  // console.log(event.target)
  // const instantParent = this.parentNode.parentNode;
  // instantParent.remove()
}

function UncompleteTask() {
  const instant = event.target;
  const instantParent = instant.parentNode.parentNode;
  instantParent.style.opacity = '1';
  instantParent.querySelector('.task-title').style.textDecorationLine = "none";
  instant.textContent = '✔ Complete';
  instant.setAttribute('onClick', 'javascript: CompleteTask()');
}

function CompleteTask() {
  const instant = event.target;
  const instantParent = instant.parentNode.parentNode;
  instantParent.style.opacity = '0.7';
  instantParent.querySelector('.task-title').style.textDecorationLine = "line-through";
  instant.textContent = '✔ Uncomplete';
  instant.setAttribute('onClick', 'javascript: UncompleteTask()');
}


