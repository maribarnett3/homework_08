const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");
// This will be an array of all team member objects created
const teamMembers = [];
// This will be an array of the id values created for each object so there are no duplicates
const idArray = [];
start()
// Do you want to add a team member? If so, choose a type:
// Manager, Engineer, Intern, I'm Done
function start() {
  // let finished = true;
  // while (finished) {
  inquirer.prompt([
    {
      type: "list",
      message: "Choose an employee type:",
      name: "type",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Finished"
      ]
    }
  ]).then(response => {
    // console.log(response)
    if (response.type === "Finished") {
      renderHtmlPage()
      // finished = false;
      return
    }
    const variable = getGenericData(response.type)


  })
  // }



}
function getGenericData(type) {
  let data = {

  }
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your employee's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "emailName",
      message: "What is your employee's email?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "idName",
      message: "What is your employee's id?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    // STUDENT: Add other questions here!


  ]).then(answers => {
    data.name = answers[
      "managerName"
    ]
    data.email = answers[
      "emailName"
    ]
    data.id = answers[
      "idName"
    ]
    //  getGenericData() 
    if (type === "Manager") {
      createManager(data)
      // createEmail

      // createEmployee("manager")
    }

    if (type === "Intern") {
      createIntern(data)
      // createEmail

      // createEmployee("manager")
    }

    if (type === "Engineer") {
      createEngineer(data)
      // createEmail

      // createEmployee("manager")
    }





  });
  return data
}

// createManager()
// ask all the manager questions, when done, go back to start()
function createEmployee(employeeType) {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter name:",
      name: "name"
    }
  ]).then(genericResponses => {
    if (employeeType === "manager") {
      createManager(genericResponses)
    }
  });
}
function createManager(genericData) {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter officeNumber:",
      name: "officeNumber"

    }
  ]).then(response => {
    // process all the answers
    const managerObj = new Manager(genericData.name, genericData.email, response.officeNumber)
    teamMembers.push(managerObj)
    start();
  })
}

function createIntern(genericData) {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter school",
      name: "school"

    }
  ]).then(response => {
    // process all the answers
    const internObj = new Intern(genericData.name, genericData.email, response.school)
    teamMembers.push(internObj)
    start();
  })
}

function createEngineer(genericData) {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter github:",
      name: "github"

    }
  ]).then(response => {
    // process all the answers
    const engineerObj = new Engineer(genericData.name, genericData.email, response.github)
    teamMembers.push(engineerObj)
    start();
  })
}
// STUDENT: This function will call the render function required near the top (line 12), 
// and pass INTO it the teamMembers area; from there, write the HTML returned back to a file 
// in a directory called output.
function renderHtmlPage() {
  const html = render(teamMembers)
  // console.log(html)
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, html, err => {
    // console.log(err)
  })
}