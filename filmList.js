import filmContainer from "./filmContainer.js";

const $template = document.createElement("template");
$template.innerHTML = `
<div class = "film-list">
</div>
`;
export default class filmList extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$list = this.querySelector(".film-list");
  }
  static get observedAttributes() {
    return ["films"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "films") {
      console.log(newValue);
      let data = JSON.parse(newValue);
      for (let filmData of data) {
        let $filmContainer = new filmContainer();
        $filmContainer.setAttribute("name", filmData.name);
        $filmContainer.setAttribute("original-name", filmData.originalName);
        $filmContainer.setAttribute("duration", filmData.duration);
        $filmContainer.setAttribute("image", filmData.image);
        $filmContainer.setAttribute("film-type", filmData.type);
        this.$list.appendChild($filmContainer);
      }
    }
  }
}
window.customElements.define("film-list", filmList);
