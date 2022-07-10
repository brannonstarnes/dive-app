import {chartMap} from "./charts";

export function getUsableDepth(userDepth){
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



export function getChart(newDepth){
    var chart = chartMap.get(newDepth)
    return chart
}


export function getSchedule(userBT, chart){
    var newBT = 0;
    for (const key in chart) {
        if (Number(userBT) > Number(key)) {
            continue;
        } else {
            newBT = key;
            return newBT
        } 
    }  
}



// var newDepth = getUsableDepth(userDepth) //get corrected depth
// var table = getChart() //gets chart by using corrected depth
// var schedule = getSchedule(userBT, newDepth) //determines which schedule to use in chart 




// // Repet Group Designator
export function getRGD(table, schedule) {
    const RGD = table[schedule]
    return RGD
}


