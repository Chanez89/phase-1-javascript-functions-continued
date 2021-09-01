

//test1
let saturdayFun = (activity = "roller-skate") =>{
    return `This Saturday, I want to ${activity}!`
}


//test2
let mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}


//test3

let wrapAdjective = (flair = "*") => {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}





















/*
//let activity = "";
function saturdayFun (activity){
    switch(activity) {
        case  'bathe my dog': //activity === true:
            return `This Saturday, I want to ${activity}!`;
        default:
            activity = "roller-skate"
            return `This Saturday, I want to ${activity}!`;  
    }
    //console.log(`This Saturday, I want to ${activity}`);
}
//saturdayFun();
//saturdayFun('bathe my dog');



function mondayWork(activity){
    switch(activity) {
        case `${activity}`:
            return `This Monday, I will ${activity}.`;
        default:
            activity = "go to the office"
            return `This Monday, I will ${activity}.`;
    }

}


(function wrapAdjective(){
     const innerFunction = function (singleP = "special"){
        wrapAdjective("%")`${singleP}`;
        return `You are ${singleP}`;
    };

}//)(*)(||);

*/





/*
 index.js
    defines saturdayFun function declaration as specified
      ✓ function exists
      1) uses the default activity 'roller-skate' when no arguments are passed
      2) permits the default activity to be overriden
    defines mondayWork function expression as specified
      3) function exists
      4) uses the default activity 'go to the office' when no arguments are passed
      5) permits the default activity to be overriden
    defines wrapAdjective function according to the specification
      6) function exists
      7) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
      8) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
 */