import inquirer from 'inquirer';

inquirer
  .prompt([
    {
    name:"numberOne",
    message:"enter a number",
    type:"number",
    validate:(numberOne)=>{
      if(isNaN(numberOne)){
        return ('enter a valid number')
      } else {
        return true
      }
    }
  },
  {
    name:"numberTwo",
    message:"enter second number",
    type:"number",
    validate:(numberTwo)=>{
      if(isNaN(numberTwo)){
        return ('enter a valid number')
      } else {
        return true
      }
    }
 },
 {
  name:"operator",
  message:"choose an operation:",
  type:"list",
  choices:['+','-','*','/']
 }
])
  .then((answers) => {
    switch (answers.operator) {
      case '+':
        console.log(answers.numberOne+answers.numberTwo)
        break;
      case '-':
        console.log(answers.numberOne-answers.numberTwo)
        break;
      case '*':
        console.log(answers.numberOne*answers.numberTwo)
        break;
      case '/':
        console.log(answers.numberOne/answers.numberTwo)
        break;
    
      default:
        console.log('invalid input')
        break;
    }
  })

function plus (){
  let c = a+b;
  console.log(c);
}