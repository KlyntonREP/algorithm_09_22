function toCamelCase(str){
    let strArr = [];
    let bag = [];
    let check = str.includes("_");
    if(check){
        strArr = str.split("_")
    }else{
        strArr = str.split("-")
    }
    bag.push(strArr[0])
    for (let index = 1; index < strArr.length; index++) {
        let element = strArr[index];
        let first = element[0].toUpperCase()
        element = element.replace(element[0], first)
        bag.push(element)
    }
    return bag.join("")
}
console.log(toCamelCase("The_Stealth_Warrior"));