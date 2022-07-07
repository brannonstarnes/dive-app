import chartMap from './charts.js'

    
const userDepth = Number(document.querySelector('#depth').value);
const userBT = Number(document.querySelector('#bt').value); //BT is bottom time      


function getUsableDepth(userDepth){
    let testDepth = 10
    let newDepth = 1
    while (userDepth < 60 && userDepth > testDepth) {
        testDepth = testDepth + 5;
    } 
    while (userDepth >= 60 && userDepth > testDepth) {
        testDepth = testDepth + 10;
    }
    if (testDepth > 190) {
        alert('Depth Shall Not Exceed 190fsw!')
    } else {
        newDepth = testDepth
    }
    return newDepth
}   




function getChart(newDepth){
    var chart = chartMap.get(Number(newDepth))
    return chart
}




function getSchedule(userBT, newDepth){
    var newBT;
    for (const key in chartMap.get(Number(newDepth))) {
        if (userBT > key) {
            continue;
        } else {
            newBT = key;
            break; 
        }
    }  
    return newBT;
}



var newDepth = getUsableDepth(userDepth) //get corrected depth
var table = getChart() //gets chart by using corrected depth
var schedule = getSchedule(userBT, newDepth) //determines which schedule to use in chart 




//Repet Group Designator
function getRGD(table, schedule) {
    const RGD = table[schedule];
    return RGD
}

getRGD(table, schedule)
