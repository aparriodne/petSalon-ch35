//global var

// register inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

// pet info storage
let pets=[]

// constructor
function petInfo(n,a,g,b,s,t,o,p){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
    this.owner=o;
    this.phone=p;
}

function deletePet(name){

   if( !confirm("Press OK to DELETE "+name+"'s appointment?")){
    return;
   }
    for(let n=0; n<pets.length; n++){
        const pet = pets[n];
         if(pet.name === name){
            pets.splice(n,1);
            displayPetTable();
            updateInfo();
         }
    }
}

// validate entry
function isValid(aPet){
    let valid = true;
    inputName.classList.remove("input-alert-error")
    inputAge.classList.remove("input-alert-error")
    inputService.classList.remove("input-alert-error")
    inputGender.classList.remove("input-alert-error")
    inputBreed.classList.remove("input-alert-error")
    inputType.classList.remove("input-alert-error")
    inputOwner.classList.remove("input-alert-error")
    inputPhone.classList.remove("input-alert-error")
    if(aPet.name === ""){
        valid=false;
        inputName.classList.add("input-alert-error");
    }
    if(aPet.service === "-- Select option --"){
        valid=false;
        inputService.classList.add("input-alert-error");

    }
    if(aPet.age === ""){
        valid=false;
        inputAge.classList.add("input-alert-error");

    }
    if(aPet.gender === ""){
        valid=false;
        inputGender.classList.add("input-alert-error");

    }
    if(aPet.breed === ""){
        valid=false;
        inputBreed.classList.add("input-alert-error");

    }
    if(aPet.type === "-- Select option --"){
        valid=false;
        inputType.classList.add("input-alert-error");

    }
    if(aPet.owner === ""){
        valid=false;
        inputOwner.classList.add("input-alert-error");

    }
    if(aPet.phone === ""){
        valid=false;
        inputPhone.classList.add("input-alert-error");

    }
    return valid;
}

// register pets
function register(){

    let newPet = new petInfo(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputOwner.value,inputPhone.value,);

    if(isValid(newPet)===true){
        pets.push(newPet);
        updateInfo();
        displayPetTable();
        clearInputs();

    }else{
        alert("Fill required areas.");
    }   

}

// update info
function updateInfo(){
    document.getElementById("petNumber").innerHTML=pets.length;
}

// clear input
function clearInputs(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "-- Select option --";
    inputType.value = "-- Select option --";
    inputOwner.value = "";
    inputPhone.value = "";
    
}

function search(){
    let text = document.getElementById("txtsearch").value;
    let result = [];

    for(let r=0;r<pets.length;r++){
        const pet = pets[r];
        if(pet.name.toLowerCase().includes(text.toLowerCase())){
            result.push(pet);
        }
    }
    console.log(result);
}

// initial display
function init(){
    initFooter();
    // display hours of operation
    // objects
    let guazilla = new petInfo("Guazilla",17,"female","iguana","💉Vaccine","🦎Reptile","Tanaka","133-862-8548");
    let gustav = new petInfo("Gustav",29,"male","Goldfish","🧼Wash","🐠Fish","Helen","212-782-9000");
    let sam = new petInfo("Sam",10,"male","tuocan","✂️Trim","🦜Bird","Manuel","800-962-1413");
    // add pet into the array
    pets.push(guazilla,gustav,sam);
    
    //update count
    updateInfo();
    displayPetTable(); 
    
    
}

// initial loading action
 window.onload=init;
 