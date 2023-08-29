const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
    test("test should render red circle", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="red" />';
        const circle = new Circle();
        circle.setShapeColor("red");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Triangle", () => {
    test("test should render green triangle", () => {
        const expectedSvg =
            '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
        const triangle = new Triangle();
        triangle.setShapeColor("green");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Square", () => {
    test("test should render blue square", () => {
        const expectedSvg =
            '<rect x="90" y="40" width="120" height="120" fill="blue" />';
        const square = new Square();
        square.setShapeColor("blue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});