function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600);
    let min = Math.floor(seconds / 60) % 60;
    let sec  = seconds % 60;

    return padNum(hours) + ":" + padNum(min) + ":" + padNum(sec);
}

let padNum = (num) => {
  if(num < 10){
    return "0" + num;
  }
  return String(num);

    // var hours = parseInt( seconds / 3600 ) ;
    // var minutes = parseInt( seconds / 60 ) % 60;
    // var seconds = seconds % 60;

    // var pad = function(val){
    // return val < 10 ?"0"+val:val;
    // }

    // return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}