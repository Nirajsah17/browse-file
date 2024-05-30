class FileList extends HTMLElement {
  constructor() {
    super();
    // this.id = "lejfoeifip"
    // this.name = "mkdocs.sh";
    // this.type = "program";
    // this.extension = "sh";
    // this.size = "15 MB";
    // this.modified ="3 May"
    // this.permissions ="drwxrwxr-x";
    // this.owner = "john"
  }

  static get observedAttributes() {
    return ["name", "type", "extension", "size", "modified", "permissions", "owner"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log({ name, oldValue, newValue });
    this.render();
  }

  render() {
    return `
    <div id="${this.getAttribute("id")}" data-id="${this.getAttribute("id")}" class="flex border-b border-border-default hover:bg-bg-accentEmphasis p-2 rounded 
    cursor-default">
    <div data-id="${this.getAttribute("id")}" class="flex flex-1 text-fg-default">
      <div data-id="${this.getAttribute("id")}" class="py-3 px-6 text-left">${this.getAttribute("name")}</div>
    </div>
      <div data-id="${this.getAttribute("id")}" class="flex text-fg-muted">
        <div data-id="${this.getAttribute("id")}" class="py-3 px-6 text-left">${this.getAttribute("size")}</div>
        <div data-id="${this.getAttribute("id")}" class="py-3 px-6 text-left">${this.getAttribute("owner") || "root"}</div>
        <div data-id="${this.getAttribute("id")}" class="py-3 px-6 text-left">${this.getAttribute("permissions")}</div>
        <div data-id="${this.getAttribute("id")}" class="py-3 px-6 text-left">${this.getAttribute("modified")}</div>
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
