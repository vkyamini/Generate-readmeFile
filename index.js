const inquirer = require('inquirer');
const markDown = require('./generatereadme');
const fs = require("fs")
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter your project title?',
      name: 'title',
    },
    {  
        type: 'input',
        message: 'Enter your project description?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please enter installation instruction',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'Please enter usage information',
        name: 'Usage',
      },
      {
       
        type: 'list',
        message: 'Please select the License',
        name: 'License',
        choices:['MIT','SIL','GNUGPLv3','IBM','Mozilla'],
      },
      {
        type: 'input',
        message: 'please enter contribution guidelines',
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'please enter test intruction',
        name: 'Test',
      },
      {
        type: 'input',
        message: 'please enter Questions',
        name: 'Questions',
      },
      {
        type: 'input',
        message: 'please enter you GitHub username',
        name:'GitHub'
      },
      {
        type:'input',
        message: 'please give you main-ID',
        name: 'email',
    },
  ]).then(data=>{ 
    const mark = markDown.generateMarkdown(data);
    fs.writeFile(`README.md`,mark,(err)=>
    {
      if(err){
        throw err
      }console.log("sucess")
    })
    console.log(mark);
  });
  
  
