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
      `<h1># ${userInput.projectname}</h1>
      <p>This project is about ${userInput.about}</p>
      <h2>Table of Content</h2>
      <h3><ul>
      <li><a href="#languages">Languages</a></li>
      <li><a href="#npm">NPM</a></li>
      <li><a href="#challenges">Challenges</a></li>
      <li><a href="#prospect">Procpect</a></li>
      <li><a href="#screenshot">Screenshot/Video</a></li>
      <li><a href="#git">GitHub</a></li>
      </ul></h3>
      <h2 id="languages"># Languages</h2>
      <p> This project uses these languages ${userInput.languages}</p>
      <h2 id="npm"># NPM</h2>
      <p> This project utilizes these NPM ${userInput.npm}
      <h2 id="challenges"># Challenges</h2>
      <p> Some of the challenges of this projects are: ${userInput.issues}</p>
      <h2 id="prospect"># Prospect</h2>
      <p> Future prospect or development of this project are: ${userInput.prospect}</p>
      <h2 id="screeenshot"># Screenshot or Video</h2>
      <h2 id="git"># GitHub Pages</h2>
      <a href=${userInput.pages}>View the GitHub Pages</a>
      <h2># GitHub Repository</h2>
      <a href=${userInput.repository}>View the GitHub Repository</a>`,
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  );
