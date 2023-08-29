class Shape {
    constructor() {
        this.color = ""
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}
