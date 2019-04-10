
document.addEventListener ("DOMContentLoaded", function(event) { 

    var HOURHAND = document.querySelector("#hour");
    var MINUTEHAND = document.querySelector("#minute");
    var SECONDHAND = document.querySelector("#second");


        var now = new Date (),
        hr = now.getHours (),
        min = now.getMinutes (),
        sec = now.getSeconds ();
        
        var hrAngle = ((hr * 30 + (min/60) *30 + (sec/3600) * 30) + (1/120)),
        minAngle = ((min * 6 + (sec/60) *6 + (1/60)),
        secAngle = ((sec * 6) + 6);

        HOURHAND.style.transform = 'rotate(' + hrAngle  + 'deg)';
        MINUTEHAND.style.transform = 'rotate(' + minAngle  + 'deg)';
        SECONDHAND.style.transform = 'rotate(' + secAngle  + 'deg)';

        function updateArmLocation () {  
            hrAngle += 1/120;
            minAngle += 1/60
            secAngle += 6
            }

        function adjusttime (hrAngle, minAngle, secAngle) {
            
        HOURHAND.style.transform = 'rotate(' + hrAngle  + 'deg)';
        MINUTEHAND.style.transform = 'rotate(' + minAngle  + 'deg)';
        SECONDHAND.style.transform = 'rotate(' + secAngle  + 'deg)';  
    }
setInterval (updateArmLocation, 1000); 
  });

/*var now = new Date (),
hr = now.getHours (hour),
min = now.getMinutes (minute),
sec = now.getSeconds (second);

var secondsAngle =second*6
var minAngle = min*6 + seconds/60 *6
var hourAngle =hr*30 + min/60

SECONDHAND.getElementsByClassName.transform = 'rotate (' + minutesToRotate  + 'deg)';

document.body.innerHTML = `The time now i ${now}`;
*/
/*
document.addEventListener ("DOMContentLoaded", function(event) { 

    setInterval (displayTime, 1000)
    
    function displayTime () {

        var today = new Date ();

        var timenow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
        document.body.innerHTML = `The time now is ${timenow}`;
       
       var today.getMinutes
    
}
  });
*/

/* CODE FOR THE CLOCK

document.addEventListener ("DOMContentLoaded", function(event) { 

    var HOURHAND = document.querySelector("#hour");
    var MINUTEHAND = document.querySelector("#minute");
    var SECONDHAND = document.querySelector("#second");

function displayTime () {

    var now = new Date (),
    hr = now.getHours (),
    min = now.getMinutes (),
    sec = now.getSeconds ();
    
    var hrAngle = hr * 30 + (min/60) *30 + (sec/3600) * 30,
    minAngle = min * 6 + (sec/60) *6,
    secAngle = sec * 6;

    HOURHAND.style.transform = 'rotate(' + hrAngle  + 'deg)';

    MINUTEHAND.style.transform = 'rotate(' + minAngle  + 'deg)';

    SECONDHAND.style.transform = 'rotate(' + secAngle  + 'deg)';

     
}
}); */