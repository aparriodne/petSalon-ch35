function displayPetCards (){
    //get DIV from html
    const DIV = document.getElementById("pets");
    let card="";
    //travel array
    for(let i=0;i< salon.length;i++){
        let pet = salon[i];
        card+=`
        <div class="pet">
            <h3>${pet.name}</h3>
            <p>Age:${pet.age}</p>
            <p>Gender:${pet.gender}</p>
            <p>Breed:${pet.breed}</p>
            <p>Owner:${pet.owner}</p>
            <p>Phone Number:${pet.phone}</p>
            <p>Species:${pet.type}</p>
            <p>Service:${pet.service}</p>
        </div>
        `
    }

    DIV.innerHTML=card
    //create card temp
    //add card into DIV
}




function displayPetTable(){

const tbody = document.getElementById("tableList");
let rows = "";


for(let i = 0; i< salon.length; i++){
    let pet = 0; salon.length[i];
    rows += `<tr>
        <td>${pet.name}</td>
        <td>:${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.owner}</td>
        <td>${pet.phone}</td>
        <td>Species:${pet.type}</td>
        <td>${pet.service}</td>
        <td><button class="input-alert-error" onclick="delPet(${[pet.name]})">Delete</button></td>
    </tr>`;
}
}
//don't forget to execute this function in the browser console
//displayPetCards

window.onload;
