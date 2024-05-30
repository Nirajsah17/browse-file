class FileList extends HTMLElement {
  constructor() {
    super();
    this.id = "lejfoeifip"
    this.name = "mkdocs.sh";
    this.type = "program";
    this.extension = "sh";
    this.size = "15000";
    this.modified ="3 May"
    this.permissions ="drwxrwxr-x";
    this.owner = "john"
  }

  static get observedAttributes() {
    return ["name","type","extension","size","modified","permissions","owner"];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    console.log({ name, oldValue, newValue });
    this.render();
  }

  render() {
    return `
    <div id="${this.id}" class="flex border border-t-black text-white">
    <div class="flex flex-1">
      <div class="py-3 px-6 text-left">${this.name}</div>
    </div>
      <div class="flex">
        <div class="py-3 px-6 text-left">${this.size}</div>
        <div class="py-3 px-6 text-left">${this.owner}</div>
        <div class="py-3 px-6 text-left">${this.permissions}</div>
        <div class="py-3 px-6 text-left">${this.modified}</div>
      </div>
    </div>
    `;
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }
}

export { FileList };
export default FileList;
