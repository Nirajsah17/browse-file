import { listContents } from "../lib/utils.js";

class ListView extends HTMLElement {
  constructor() {
    super();
    this.data = {};
    this.activeId = ""
  }

  static get observedAttributes() {
    return ["name"];
  }

  initData(activeId,data){
    const filterData = listContents(activeId,data);
  }

  show(){
    
  }

  static set() {}

  attributeChangedCallback(name, oldValue, newValue) {
    console.log({ name, oldValue, newValue });
    this.render();
  }

  render(data) {
    return `

    `;
  }



  connectedCallback() {
    this.innerHTML = this.render();
  }
}

export { ListView };
export default ListView;
