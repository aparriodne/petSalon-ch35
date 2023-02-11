// function displayPetCards(){

//     const DIV = document.getElementById("petCard");
//     let card="";
//     for(let p=0;p<pets.length;p++){
//         let pet = pets[p];
//         card += `
//         <div class="pet">
//             <h3>${pet.name}</h3>
//             <p>Age:${pet.age}</p>
//             <p>Gender:${pet.gender}</p>
//             <p>Breed:${pet.breed}</p>
//             <p>Owner:${pet.owner}</p>
//             <p>Phone Number:${pet.phone}</p>
//             <p>Species:${pet.type}</p>
//             <p>Service:${pet.service}</p>
//         </div>`;
//     }
//     DIV.innerHTML=card; 
// }

function displayPetTable(){

    const tbody = document.getElementById("petTable");
    let rows ="";
    for(let p=0;p<pets.length;p++){
        let pet = pets[p];
        rows +=`
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.owner}</td>
            <td>${pet.phone}</td>
            <td>${pet.type}</td>
            <td>${pet.service}</td>
            <td><button class="btn btn-sm btn-outline-danger" onclick="deletePet('${pet.name}')">❌</button></td>
        </tr>
        `;

}
    tbody.innerHTML=rows;
}