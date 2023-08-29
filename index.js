const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const SVG = require("./lib/svg");
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
        type: "list", 
        name: "shape",
        message: "What shape would you like to create?",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor", 
        message: "What color would you like your shape to be? (red, green, blue etc..)"
    },
    {
        type: "input", 
        name: "text",
        message: "What would you like your SVG to say? (3 or less characters)"
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like your text to be? (red, green, blue etc..)"
    }
]

const init = () => {
    
};

init()