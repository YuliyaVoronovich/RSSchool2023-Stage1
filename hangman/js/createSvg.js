class CreateSvg {
    constructor (tag, classes = [], atributes = {}) {
      this.tag = tag;
      this.classes = classes;
      this.atributes = atributes;
  
      this.element= this.createSvg();
    }
  
    createSvg() {
      const result = document.createElementNS('http://www.w3.org/2000/svg', this.tag, this.atributes);
      if (this.classes.length > 0) result.classList.add(...this.classes);
      for (let i in this.atributes)
        result.setAttributeNS(null, i, this.atributes[i]);
      return result;
    }
}

export default CreateSvg;