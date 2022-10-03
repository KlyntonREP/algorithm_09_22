function descendingOrder(n) {
    let toArr = Array.from(String(n), Number);
    let toSort = toArr.sort((a,b) => b - a);
    let toInt = Number(toSort.join(""));
    return toInt;

    // return parseInt(String(n).split('').sort().reverse().join(''))
    // return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
    // return parseInt(n.toString().split('').sort().reverse().join(''), 10);

}
