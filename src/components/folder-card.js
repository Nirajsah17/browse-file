function folderCard(o) {
  class FolderCard extends HTMLElement {
    constructor() {
      super();
      this.id = "blah3";
      this.name = "apps";
      this.fileCount = "240";
    }

    static get observedAttributes() {
      return ["name", "type", "extension", "size", ""];
    }

    static set() {}

    attributeChangedCallback(name, oldValue, newValue) {
      console.log({ name, oldValue, newValue });
      this.render();
    }

    render() {
      return `
      <div id="${
        this.id
      }" class="flex flex-col text-fg-default hover:bg-bg-subtle p-1 rounded cursor-default m-1">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#8d9094c5"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-fg-default h-12 w-12"
      data-id="${this.getAttribute("id")}"
      >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
      </path>
      </svg>
        <span data-id="${this.getAttribute(
          "id"
        )}" class="text-fg-default text-sm mt-2">${this.name}</span>
        <span data-id="${this.getAttribute(
          "id"
        )}" class="text-fg-muted text-xs">${this.fileCount} items</span>
      </div>
      `;
    }

    connectedCallback() {
      this.innerHTML = this.render();
    }
  }
  return FolderCard;
}

export { folderCard };
export default folderCard;
