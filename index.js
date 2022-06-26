const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "input",
      message: "Where do you live?",
      name: "location",
    },
    {
      type: "input",
      message: "Tell something about yourself?",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your Linkedin URL?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "What is your Github URL?",
      name: "github",
    },
  ])
  .then((userInput) =>
    fs.writeFile(
      "index.html",
      `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
  </head>
  <body id="main">
      <h1>Hi! My name is ${userInput.username}</h1>
      <p>I am from ${userInput.location}</p>
      <p>${userInput.bio}</p>
      <div>
      <a href="https://${userInput.linkedin}">Linkedin</a>
      <a href="https://${userInput.github}">Github</a>
      </div>
      <style>
      #main {
        background-color: whitesmoke;
        display: flex;
        flex-direction: column;
        margin: 50px;
      }

      a {
        display: flex;
        border: 1px solid linen;
        justify-content: space-between;
        flex-direction: column;
        background-color: white;
        padding: 10px;
        width: 150px;
      }
    </style>
  </body>
  </html>`,
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  );
