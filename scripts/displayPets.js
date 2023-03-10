
function displayPetTable(){
    const tbody = document.getElementById("petTable");
    let rows ="";
    for(let p=0;p<pets.length;p++){
        let pet = pets[p];
        rows +=`
        <tr class="petBoard">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.owner}</td>
            <td>${pet.phone}</td>
            <td>${pet.type}</td>
            <td>${pet.service}</td>
            <td><button class="cancel" onclick="deletePet('${pet.name}')">❌</button></td>
        </tr>
        `;
}
    tbody.innerHTML=rows;
}