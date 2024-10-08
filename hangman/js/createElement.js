class CreateElement {
  constructor (name, classes = [], text = '', atributes = {}) {
    this.name = name;
    this.classes = classes;
    this.atributes = atributes;
    this.text = text;

    this.element = this.create();
  }

  create() {
    const result = document.createElement(this.name);
    if (this.classes.length > 0) result.classList.add(...this.classes);
    for (let key in this.atributes){
      result.setAttribute(key, this.atributes[key]);
    }
    result.innerText =  this.text;
    return result;
  }
}

export default CreateElement;