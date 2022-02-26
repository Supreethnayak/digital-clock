const getTime = ()=>{
    // get current time
    let d = new Date()

    let hrs = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    
    // change hrs to 1 if 13
    hrs = hrs % 12 // 12%12 = 0
    
    hrs = hrs == 0 ? 12:hrs
    
    // append 0 to min is min < 10
    min = min <= 9 ? '0'+min : min
    
    // append 0 to sec is sec < 10
    sec = sec <= 9 ? '0'+sec : sec
    
    let amPm = hrs >= 12 ? 'PM' : 'AM'
    return `${hrs} : ${min} : ${sec} ${amPm}`

}

// anonymus function -> run all time without calling
setInterval(()=>{
    // console.log();
    let clockOb = document.querySelector('.clock')
    clockOb.innerHTML = getTime()
},1000)
