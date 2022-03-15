function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(workActivity="go to the office") {
    return `This Monday, I will ${workActivity}.` 
}

let wrapAdjective = function(highlight="*") {
    return function(adjective="Awesome!") {
        return `You are ${highlight}${adjective}${highlight}!`
    }
}