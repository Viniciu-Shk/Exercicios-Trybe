const IU = require('readline-sync');

const weight = IU.questionInt('What\'s your weight in kilograms?');

const height = IU.questionFloat('what\'s your height in meters? use x.xx notation!');

const bmi = () => {
  const result = (weight / (height ** 2)).toFixed(1);
  console.log('Your BMI is: ', result);
  if(Number(result) < 18.5) console.log('Below weight')
  else if(18.5 <= Number(result) && Number(result) <= 24.9) console.log('Regular weight')
  else if(25 <= Number(result) && Number(result) <= 29.9) console.log('Overweight')
  else if(30 <= Number(result) && Number(result) <= 34.9) console.log('Obesity grade 1')
  else if(35 <= Number(result) && Number(result) <= 39.9) console.log('Obesity grade 2')
  else console.log('Obesity grades 3 and 4');
} 

module.exports = bmi;