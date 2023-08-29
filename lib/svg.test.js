const SVG = require("./svg");
const { Circle } = require("./shapes");

test("test should render svg", () => {
    const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    const actualSvg = svg.render()
    expect(actualSvg).toEqual(expectedSvg);
});

test("test should add text message and color", () => {
    const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>';
    const svg = new SVG();
    svg.setText("ABC", "red");
    const actualSvg = svg.render()
    expect(actualSvg).toEqual(expectedSvg);
});

test("test should add a shape", () => {
    const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /></svg>';
    const circle = new Circle();
    circle.setShapeColor("blue");
    const svg = new SVG();
    svg.setShape(circle);
    const actualSvg = svg.render()
    expect(actualSvg).toEqual(expectedSvg);
});