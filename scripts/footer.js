//global var
let salon = {
    name:"Sacles N' Tales",
    phone:"161-218-2436",
    time:{
        open:"7:00 am",
        close:"9:00 pm"
    }
}
// hours of operation
function displayHours(){
    document.getElementById("hours").innerHTML=`${salon.name} is open from ${salon.time.open} to ${salon.time.close}`;
}
// display hours
function initFooter(){
    displayHours();
}
// display on load
window.onload=initFooter;
