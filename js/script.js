const clock = document.getElementById('clock')

function showTime(){
  
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    //let milliSeconds = date.getUTCMilliseconds()

    // This convertFormat() function created somewhere down below add AM or PM to the 
    // time depending on the hour
    let hoursFormat = convertFormat(hours)

    // This checkTime() function created somewhere down below checks the time to make
    // sure it displays properly like at mid-night instead of showing 00 it should show
    // 12
    hours = checkTime(hours)

    // This addZero function created somewhere down below and returned its value prefixes
    // a zero to all the time variables when they are below 10
    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${hoursFormat}`
}

function convertFormat(time2){
    let format = 'AM'
    if(time2 >= 12){
        format = 'PM'
    } 

    return format;
}

function checkTime(time){
    if (time > 12){
        time = time - 12;
    }
    if(time === 0){
        time = 12;
    }
    return time;
}

function addZero(time){
    if (time < 10){
        time = '0' + time;
    }
    return time
}

showTime()
setInterval(showTime, 1000) 