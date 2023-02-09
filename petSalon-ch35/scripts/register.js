//object literal
let  salon=[]
    
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGen");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtServ");
let inputType = document.getElementById("txtType");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function isValid(aPet){
    let valid = true;
    if(aPet.name === ""){
        valid=false;
        inputName.classList.add("input-alert-error");
    }

    if(aPet.service === ""){
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
    if(aPet.type === ""){
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

function register(){
    let newPet = new petInfo(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputOwner.value,inputPhone.value);
    
    if(isValid(newPet)===true){

    salon.push(newPet);
    updateInfo();
    //displayPetCards();
    displayPetTable();
    
}else{
    alert("Please fill out form");
}
clearForm();
}

function updateInfo(){
    document.getElementById("petNum").innerHTML=salon.length;
}

function delPet(name){

   if( !confirm("Remove " + name + "from Registration?")){
    return;
   }
   
    for(let n = 0; n< salon.length; n++){
        const pet = salon.length[n];
        if (pet.name.toLowerCase().includes(text.toLowerCase()) ) {
            result.push(pet);
        }
    }
}

function search(){
    let text = document.getElementById("txtSearch").value;

    let results = [];
    for(let s=0; s <salon.length; s++){
        const pet = salon.length[s];
        if(pet.name === text){
            results.push(pet);
        }
    }
    console.log(results);
}

function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputType.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
}

function init(){
let guazilla = new petInfo("Guazilla",17,"female","iguana","Reptile","Nail trimming","Tanaka","133-862-8548");
let gustav = new petInfo("Gustav",29,"male","Goldfish","Fish","Scale Brushing","Helen","212-782-9000");
let sam = new petInfo("Sam",10,"male","tuocan","Bird","Beak filing","Manuel","800-962-1413");
salon.push(sam,gustav,guazilla);
updateInfo();
//displayPetCards();
displayPetTable();

}
window.onload=init;