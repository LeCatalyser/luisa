#!/usr/bin/env node
// ^^ That needs to stay as line 1 of the file to make it executable

var inquirer = require("inquirer");

function luisa_salcedo() {
  var options = [
    {
      type: "List",
      name: "Option",
      message: "When presented with a choice, what will be your response?",
      choices: [
        "Quit",
        "Create a plan",
        "Build a tribe",
        "Overcome",
        "Fulfill your purpose"
      ]
    }
  ];

  inquirer.prompt(options).then(answers => {
    if (answers.option === "quit") {
      process.exit(1);
    }
    if (answers.option === "create a plan") {
      execute();
    }
    if (answers.option === "build a tribe") {
      community();
    }
    if (answers.option === "overcome") {
      persevere();
    }
    if (answers.opton === "fulfill your purpose") {
      purpose();
    }
  });
}
luisa_salcedo();

function quit() {
  var questions = [
    //do I always need all these questions?
    {
      type: "input",
      name: "option",
      message: "What I lack in understanding, I make up in grit; quitting isn't an option"
    }
  ];
  // inquirer.prompt(options).then(answers => {
  //   state.
  // });
}

//publish to npm, run npm publish
//make npm account
//run npm publish
