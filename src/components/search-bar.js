function navigator(o) {
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
      this.innerHTML = this.renderPaths(paths);
    }

    renderPaths(paths) {
      let arrow = `
      <svg class="rtl:rotate-180 w-3 h-3 text-fg-default mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 9L5 5 1 1"/>
      </svg>

      `;
      return `
        <div class="w-full flex">
          ${paths
            .map(
              (path) => `
              <div class="p-1">${path.name}</div>
              <div class="p-1">${arrow}</div>
          `
            )
            .join("")}
        </div>
      `;
    }

    connectedCallback() {
      // this.render([{id:1, name:'home'}]);
    }
  }

  return Navigator;
}
export { navigator };
export default navigator;
