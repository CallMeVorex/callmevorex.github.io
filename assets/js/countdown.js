function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}
 
// Set the date we're counting down to
 
var countDownDate = new Date("Aug 26, 2018 00:00:00 EDT").getTime();
 
var times = ["Aug 27, 2018 23:51:16 EDT", "Aug 28, 2018 01:34:06 EDT", "Aug 28, 2018 03:16:58 EDT", "Aug 28, 2018 04:59:49 EDT", "Aug 28, 2018 06:42:41 EDT", "Aug 28, 2018 08:25:32 EDT", "Aug 28, 2018 10:08:24 EDT", "Aug 28, 2018 11:51:15 EDT", "Aug 28, 2018 13:34:07 EDT", "Aug 28, 2018 15:16:58 EDT", "Aug 28, 2018 16:59:50 EDT", "Aug 28, 2018 18:42:41 EDT", "Aug 28, 2018 20:25:33 EDT", "Aug 28, 2018 22:08:24 EDT", "Aug 28, 2018 23:51:16 EDT"]
var index = -1
 
// Get todays date and time
var now = new Date().getTime();
   
// Find the distance between now and the count down date
var distance = countDownDate - now;
 
while (distance < 0) {
    index += 1
 
    countDownDate = new Date(times[index]).getTime();
 
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
    document.getElementById("countdown").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";
 
    console.log(distance)
 
    if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Cube Time!";
    }
    if (distance < -19000) {
        index += 1
    countDownDate = new Date(times[index]).getTime();
    }
}, 1000);
