function duplicateCount(text){
    let count = 0;
    let obj = {};
    for (let i of text) {
        i = i.toLowerCase();
        if(!obj[i]){
            obj[i] = 1
        }else{
            obj[i]++
        }
    }

    for(let i in obj){
        if(obj[i] > 1){
            count++
        }
    }
    return count

    // return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;

    // return text.toLowerCase().split('').filter(function(val, i, arr){
    //     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    //   }).length;
}