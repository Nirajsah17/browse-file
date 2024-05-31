import { FileCard } from "./src/index.js";
import { FolderCard } from "./src/index.js";
import { FileList } from "./src/index.js";
import { FolderList } from "./src/index.js";
import { Explorer } from "./src/index.js";
import { Navigator } from "./src/index.js";

import "./src/tailwind.css"
customElements.define("fx-file-card", FileCard);
customElements.define("fx-folder-card", FolderCard);
customElements.define("fx-file-list", FileList);
customElements.define("fx-folder-list", FolderList);
customElements.define("fx-explorer", Explorer);
customElements.define("fx-navigator", Navigator);
