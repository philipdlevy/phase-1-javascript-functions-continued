// code your solution here
function saturdayFun(param1 = "roller-skate") {
    return `This Saturday, I want to ${param1}!`
}
saturdayFun();

function mondayWork(param = "go to the office") {
    return `This Monday, I will ${param}.`
}
mondayWork();


function wrapAdjective(flair = "*") {
    const innerFunction = function (parameter = "special") {
        return `You are ${flair}${parameter}${flair}!`
    }
    return innerFunction;
}











/*

function wrapAdjective() {
    const innerFunction = function (parameter = "special");
      return `You are ${parameter}`
}
*/