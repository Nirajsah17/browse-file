import { listContents } from "../lib/utils.js";

class FileCard extends HTMLElement {
  constructor() {
    super();
    this.id = "blah3"
    this.name = "mkdocs.sh";
    this.type = "program";
    this.extension = "sh";
    this.size = "240 bytes";
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
    <div id="${this.id}" class="flex flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-white h-12 w-12"
        >
        <path d="M10 12.5 8 15l2 2.5"></path>
        <path d="m14 12.5 2 2.5-2 2.5"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path>
      </svg>
      <span class="text-white text-sm mt-2">${this.name}</span>
      <span class="text-gray-400 text-xs">${this.size}</span>
    </div>
    `;
  }



  connectedCallback() {
    this.innerHTML = this.render();
  }
}

export { FileCard };
export default FileCard;
