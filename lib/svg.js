class SVG {
    constructor() {
        this.textValue = "";
        this.shapeValue = "";
    };

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeValue}${this.textValue}</svg>`;
    };

    setText(text, textColor) {
        if (text.length < 3) {
            this.textValue = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        } else {
            throw new Error("Your text input needs to be 3 or less characters.");
        };
    };

    setShape(shape) {
        this.shapeValue = shape.render()
    };
};