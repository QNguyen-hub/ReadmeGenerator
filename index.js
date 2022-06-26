const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of the project?",
      name: "projectname",
    },
    {
      type: "input",
      message: "What is it about??",
      name: "about",
    },
    {
      type: "input",
      message: "What coding languages is being used for this project?",
      name: "languages",
    },
    {
      type: "input",
      message: "What npm are being use for project?",
      name: "npm",
    },
    {
      type: "input",
      message: "What issues did you have when working on this project?",
      name: "issue",
    },
    {
      type: "input",
      message: "What are the future prospect of this project?",
      name: "prospect",
    },
    {
      type: "input",
      message: "Link to the screenshot or video of the project?",
      name: "screenshot",
    },
    {
      type: "input",
      message: "GitHub Pages link.",
      name: "pages",
    },
    {
      type: "input",
      message: "GitHub Repository link.",
      name: "repository",
    },
  ])
  .then((userInput) =>
    fs.writeFile(
      "README.MD",
      `<h># ${userInput.projectname}</h1>
      <p>This project is about ${userInput.about}</p>
      <h2># Languages</h2>
      <p> This project uses these languages ${userInput.languages}</p>
      <h2># NPM</h2>
      <p> This project utilizes these NPM ${userInput.npm}
      <h2># Challenges</h2>
      <p> Some of the challenges of this projects are: ${userInput.issues}</p>
      <h2># Prospect</h2>
      <p> Future prospect or development of this project are: ${userInput.prospect}</p>
      <h2># Screenshot or Video</h2>
      <h2># GitHub Pages</h2>
      <a href=${userInput.pages}>View the GitHub Pages</a>
      <h2># GitHub Repository</h2>
      <a href=${userInput.repository}>View the GitHub Repository</a>`,
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  );
