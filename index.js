import getData from './src/utils.js'

export default function solution(content){
  // BEGIN
  const data = getData(content);
  const count = data.length;
  console.log(`Count: ${count}`);

  //TASK2
  const cities = [];

  data.map((item) => {
    if (!cities.includes(item[7])) {cities.push(item[7])} 
  });
  cities.sort();
  console.log(`Cities: ${cities.join(', ')}`);

//TASK3
const minHum = 100;
const maxHum = 0;

const max = data.reduce((acc, item) => {
  return Number(item[3]) >= acc? acc = Number(item[3]): acc;
}, 0);
const min = data.reduce((acc, item) => {
  return Number(item[3]) <= acc? acc = Number(item[3]): acc;
}, 100);

console.log(`Humidity: Min: ${min}, Max: ${max}`);

//TASK4
const result4 = data.reduce((preVal, curVal) => {
  return curVal[1] > preVal[1] ? curVal: preVal;
});

console.log(`HottestDay: ${result4[0]} ${result4[7]}`);

//TASK5
 const result5 = data.reduce((preVal, curVal) => {
   const overagePre = (Number(preVal[1]) + Number(preVal[2])) / 2;
   const overageCur = (Number(curVal[1]) + Number(curVal[2])) / 2;
   return overageCur >= overagePre ? curVal: preVal;
 });

console.log(`HottestCity: ${result5[7]}`);

  // END
}