class Navigator extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render(paths) {
    this.innerHTML = this.renderPaths(paths)
  }

  renderPaths(paths){
    let arrow = `
    <svg class="rtl:rotate-180 w-3 h-3 text-fg-default mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 6 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></path>
    </svg>
    `;
    return `
      <div class="w-full flex">
        ${paths.map(path => `
            <div class="p-1">${path.name}</div>
            <div class="p-1">${arrow}</div>
        `).join('')}
      </div>
    `;
  }

  connectedCallback() {
    this.render([{id:1, name:'home'}]);
  }
}

export { Navigator };
export default Navigator;
