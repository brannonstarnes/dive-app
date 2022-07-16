export default function stringifyTime(dateObj){
    let hours = addLeadingZerosToTimes(dateObj.getHours());
    let min = addLeadingZerosToTimes(dateObj.getMinutes());
    let sec = addLeadingZerosToTimes(dateObj.getSeconds());
    console.log(hours,':', min,'::', sec)
    
    
    return(`${hours}:${min}::${sec}`)
}


function addLeadingZerosToTimes(timeIncrement){
        if (timeIncrement < 10){
            console.log("added zero to ", timeIncrement)
            timeIncrement = `0${timeIncrement}`;
        }
        return timeIncrement;
    }