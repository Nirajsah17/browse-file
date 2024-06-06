function folderList(o) {
  class FolderList extends HTMLElement {
    constructor() {
      super();
      // this.id = "bekjbkb"
      // this.name = "apps";
      // this.modified ="3 May"
      // this.permissions ="drwxrwxr-x";
      // this.owner = "john"
      // this.fileCount = "240"
    }

    static get observedAttributes() {
      return [
        "name",
        "type",
        "extension",
        "size",
        "modified",
        "permissions",
        "owner",
      ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log({ name, oldValue, newValue });
      this.render();
    }

    render() {
      return `
      <div id="${this.getAttribute("id")}" data-id="${this.getAttribute(
        "id"
      )}" class="flex border-b border-border-default bg-bg-subtle hover:bg-bg-overlay p-2 rounded 
      cursor-default">
      <div data-id="${this.getAttribute(
        "id"
      )}" class="flex flex-1 text-fg-default">
        <div data-id="${this.getAttribute(
          "id"
        )}" class="py-3 px-6 text-left">${this.getAttribute("name")}</div>
      </div>
        <div data-id="${this.getAttribute("id")}" class="flex text-fg-muted">
          <div data-id="${this.getAttribute(
            "id"
          )}" class="py-3 px-6 text-left">${
        this.getAttribute("fileCount") || 0
      } items</div>
          <div data-id="${this.getAttribute(
            "id"
          )}" class="py-3 px-6 text-left">${
        this.getAttribute("owner") || "root"
      }</div>
          <div data-id="${this.getAttribute(
            "id"
          )}" class="py-3 px-6 text-left">${this.getAttribute(
        "permissions"
      )}</div>
          <div data-id="${this.getAttribute(
            "id"
          )}" class="py-3 px-6 text-left">${this.getAttribute("modified")}</div>
        </div>
      </div>
      `;
    }

    connectedCallback() {
      this.innerHTML = this.render();
    }
  }
  return FolderList;
}

export { folderList };
export default folderList;
