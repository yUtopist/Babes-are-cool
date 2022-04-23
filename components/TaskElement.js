const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import '../styles.css'
  </style>
  <div class="task">
    <div class="task-content">
      <h3 class="task-title"></h3>
      <p class="task-desc"></p>
    </div>
    <div class="task-controls">
      <button class="task-complete">✔ Complete</button>
      <button class="task-edit">✏ Edit</button>
      <button class="task-delete">❌ Delete</button>
    </div>
  </div>`;

class TaskElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  };

  connectedCallback() {
    // This code runs when web component is inserted to the page
    this.shadowRoot.querySelector('.task-title').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('.task-desc').innerText = this.getAttribute('desc');

    this.shadowRoot.querySelector('.task-delete').addEventListener('click', () => {
      this.remove()
    })
    this.shadowRoot.querySelector('.task-complete').addEventListener('click', () => {
      if (!this.classList.contains('completed')) {
        this.classList.add('completed')
      }
      else {
        this.classList.remove('completed')
      }
    })
  };
  disconnectedCallback() {
    // This code runs ones web component has been removed from the page
  };
}

window.customElements.define('task-element', TaskElement);