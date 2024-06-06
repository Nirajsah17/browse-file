import directory from "@data/filesystem.json";
import { listContents } from "@lib/utils.js";
import { getBreadcrumbPath } from "@lib/utils.js";

function explorer(o) {
  class Explorer extends HTMLElement {
    constructor() {
      super();
      this.view = "list"; // 'list' and 'grid' view
      this.viewList = ["list", "grid"];
      this.fileSystem = o.directory || {};
      this.activeId = 1;

      this.innerHTML = `
      <div class="flex flex-col w-full h-full justify-between">
        <div class="flex flex-row h-7">
          <fx-navigator id="navigator"></fx-navigator>
        </div>
        <div id="explorer-content" class="flex flex-1"></div>
        <div class="items-center justify-center">Footer</div>
      </div>
      `;
    }

    static get view() {
      this.view;
    }

    static get views (){
      return this.viewList;
    }

    static set view(val) {
      this.view = val;
      this.render();
    }

    static get fileSystem() {
      return this.fileSystem;
    }

    static set fileSystem (data){
      this.fileSystem = data;
      this.render();
      return this.fileSystem;
    }

    static get activeId() {
      return this.activeId;
    }

    static set activeId(val) {
      this.activeId = val;
      this.render();
    }

    static get observedAttributes() {
      return ["name", "type"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }

    render(viewType = this.view) {
      if (!this.viewList.includes(viewType)) return;
      if(!this.fileSystem) return "Add directory json";
      const list = listContents(this.fileSystem, this.activeId);
      const paths = getBreadcrumbPath(this.fileSystem, this.activeId);
      const breadcrumb = this.querySelector("#navigator");
      console.log(breadcrumb);
      // breadcrumb.render(paths)
      console.log(list);
      if (!list.length) return "Empty";
      if (viewType == "list") {
        return this.renderList(list);
      }
      if (viewType == "grid") {
        return this.renderGrid(list);
      }
    }

    renderList(data) {
      return `
        <div class="w-full flex flex-col">
          ${data
            .map(
              (item) => `
            ${
              item.type === "directory"
                ? `<fx-folder-list id="${item.id}" name="${item.name}" permissions="${item.permissions}" modified="${item.modified}"></fx-folder-list>`
                : `<fx-file-list id="${item.id}" name="${item.name}" size="${item.size}" permissions="${item.permissions}" modified="${item.modified}"></fx-file-list>`
            }
          `
            )
            .join("")}
        </div>
      `;
    }

    renderGrid(data) {
      return `
        <div class="w-full flex">
          ${data
            .map(
              (item) => `
            ${
              item.type === "directory"
                ? `<fx-folder-card  id="${item.id}" name="${item.name}"></fx-folder-card>`
                : `<fx-file-card id="${item.id}" size="${item.size}"></fx-file-card>`
            }
          `
            )
            .join("")}
        </div>
      `;
    }

    openFolder(id) {
      this.activeId = id;
      let listNode = this.querySelector("#explorer-content");
      let res = this.render();
      if (res) {
        listNode.innerHTML = res;
      }
    }

    connectedCallback() {
      let listNode = this.querySelector("#explorer-content");
      listNode.innerHTML = this.render();
      listNode.addEventListener("dblclick", (e) => {
        let id = Number(e.target.dataset.id);
        this.openFolder(id);
      });
    }
  }

  return Explorer;
}

export { explorer };
export default explorer;
