function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}
 
// Set the date we're counting down to
 
var countDownDate = new Date("Sep 2, 2018 07:25:00 EDT")
 
// Get todays date and time
var now = new Date().getTime();
      
var minutes = 25
var seconds = 49.75
   
// Find the distance between now and the count down date
var distance = countDownDate.getTime() - now;
while (distance < 0) {
    countDownDate.setSeconds(countDownDate.getSeconds() + minutes*60+seconds)
    console.log("TEST")
 
    distance = countDownDate - now;
}
 
// Update the count down every 1 second
var x = setInterval(function() {
 
    // Get todays date and time
    var now = new Date().getTime();
   
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
   
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = "Printing Rune #2! Possible Finish Time: " + hours + "h "
    + minutes + "m " + seconds + "s ";
 
    console.log(distance)
 
    if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Cube Time!";
    }
    if (distance < -19000) {
    countDownDate.setSeconds(countDownDate.getSeconds() + minutes*60+seconds);
    }
}, 1000);
