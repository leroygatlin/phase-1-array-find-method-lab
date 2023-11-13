// code your solution here   
function superbowlWin(record){
    const foundObject = record.find(element =>{
    return element.result === "W"
    })
    if (foundObject){
        return foundObject.year
    } else { return undefined}
}