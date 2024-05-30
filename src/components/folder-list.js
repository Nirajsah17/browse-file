class FolderList extends HTMLElement {
  constructor() {
    super();
    this.id = "bekjbkb"
    this.name = "apps";
    this.modified ="3 May"
    this.permissions ="drwxrwxr-x";
    this.owner = "john"
    this.fileCount = "240"
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
        <div class="py-3 px-6 text-left">${this.fileCount} items</div>
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

export { FolderList };
export default FolderList;
