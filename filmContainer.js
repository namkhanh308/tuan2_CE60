const $template = document.createElement("template");
$template.innerHTML = `<div class="film-container">
<div class="film-img">
  <div class="film-type">ABC</div>
</div>
<div class="film-infor">
  <div class="film-name">1</div>
  <div class="original-name">2</div>
  <div class="duration"></div>
</div>
</div>`;
export default class filmContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$name = this.querySelector(".film-name");
    this.$originalName = this.querySelector(".original-name");
    this.$duration = this.querySelector(".duration");
    this.$filmType = this.querySelector(".film-type");
    this.$image = this.querySelector(".film-img");
  }
  static get observedAttributes() {
    return ["name", "original-name", "duration", "film-type", "image"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "name") {
      this.$name.innerHTML = newValue;
    } else if (attrName == "original-name") {
      this.$originalName.innerHTML = newValue;
    } else if (attrName == "duration") {
      this.$duration.innerHTML = newValue;
    } else if (attrName == "image") {
      this.$image.style.backgroundImage = `url('${newValue}')`;
    } else if (attrName == "film-type") {
      this.$filmType.innerHTML = newValue;
    }
  }
  connectedCallback() {
    console.log("lần đầu ");
  }
  disconnectedCallback() {
    console.log("component đã bị xóa");
  }
}
window.customElements.define("film-container", filmContainer);
