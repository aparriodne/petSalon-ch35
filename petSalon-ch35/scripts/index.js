let operation = {
    name:"Sacles N' Tales",
    phone:"161-218-2436",
    workingHours:{
        open:"7:00 am",
        close:"9:00 pm"
    },
    adress:{
        street:"1095 K St Suite B",
        zip:"92101",
        city:"San Diego"
    },
}
function displayHours(){
    document.getElementById("operate").innerHTML=`${operation.name} Open from ${operation.workingHours.open} to ${operation.workingHours.close}`;
}

function initFooter(){
    displayHours();
}
window.onload=initFooter;