import { fileCard } from "./src/index.js";
import { folderCard } from "./src/index.js";
import { fileList } from "./src/index.js";
import { folderList } from "./src/index.js";
import { explorer } from "./src/index.js";
import { navigator } from "./src/index.js";

import "./global.css";
import "./src/tailwind.css";

const components = {
  "fx-file-card": fileCard,
  "fx-folder-card": folderCard,
  "fx-file-list": fileList,
  "fx-folder-list": folderList,
  "fx-explorer": explorer,
  "fx-navigator": navigator,
};

class FileExplorer {
  constructor(id) {
    this.validateParams(id);
    this.init(components);
    this.state = {
      directory: {},
      views: ["list", "grid"],
      view: "list",
      activeId: 1,
    };
  }

  validateParams(id) {
    if (id instanceof String) this.el = document.getElementById(id);
    if (id instanceof HTMLElement) this.el = id;
  }

  init(components) {
    this.initComponents(components);
    this.el.appendChild(document.createElement("fx-explorer"));
  }

  initComponents(components) {
    for (let key in components) {
      if (customElements.get(key)) continue;
      customElements.define(key, components[key]);
    }
  }

  setData(data) {
    if (dir === undefined)
      return console.error("Please pass correct directory schema");
    if (dir instanceof Object) return console.error("Invalid directory");
    this.state.directory = dir;
    const explorer = this.el.querySelector("fx-explorer");
    explorer.fileSystem = data;
    explorer.view = this.view;
  }

  get directory() {
    return this.state.directory;
  }

  set directory(val) {
    if (val === undefined)
      return console.error("Please pass correct directory schema");
    if (val instanceof Object) return console.error("Invalid directory");
    this.state.directory = val;
    const explorer = this.el.querySelector("fx-explorer");
    explorer.activeId = this.state.directory.id;
    explorer.fileSystem = data;
  }

  get views() {
    return this.state.views;
  }

  get view() {
    return this.state.view;
  }

  set view(val) {
    if (!this.state.views.includes(val)) return;
    this.state.view = val;
    const explorer = this.el.querySelector("fx-explorer");
    explorer.view = val;
  }
}

export default FileExplorer;
export { FileExplorer };
