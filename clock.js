setInterval(setClock,1000) //function will run every second


// Variables that select hands on the clock
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// function that tells the clock what tine to start the function at
function setClock(){
    const currentDate= new Date()
    const secondsRatio =currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12

   setRotation(secondHand, secondsRatio)
   setRotation(minuteHand, minutesRatio)
   setRotation(hourHand, hoursRatio)
}

// function that tells your hands to rotate 
 function setRotation(element, rotationRatio){
     element.style.setProperty('--rotation', rotationRatio * 360)
 }

setClock()




