function displayPetCards (){
    //get DIV from html
    const DIV = document.getElementById("pets");
    let card="";
    //travel array
    for(let i=0;i< salon.length;i++){
        let pet = salon[i];
        card+=`
        <div class="pet">
            <h5>${pet.name}</h5>
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
//don't forget to execute this function in the browser console
//displayPetCards

window.onload;