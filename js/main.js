const url = 'https://pokeapi.co/api/v2/pokemon/';
const card = document.getElementById('card');
const mygt = document.getElementById('mygt');
let getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUlr = url + id;
    fetch(finalUlr)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data)
        });

};
mygt.addEventListener('click', getPokeData);
window.addEventListener('load', getPokeData);

let generateCard = (data) => {
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.front_default;
    const pokeName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statspeed = data.stats[5].base_stat;
    console.log(data);
    card.innerHTML = `
    
    <p class="hp">
     <span><i class="bi bi-heart-half"></i>
     </span>
        ${hp}
            </p>
            <img src=${imgSrc}>
            <h2 class="name">${pokeName}</h2>
            <div class="stats">
                <div>
                    <h3>${statAttack}</h3>
                    <i class="bi bi-eyedropper"></i>
                </div>
                <div>
                    <h3>${statDefense}</h3>
                    <i class="bi bi-shield-fill"></i>
                </div>
                <div>
                    <h3>${statspeed}</h3>
                    <i class="bi bi-lightning-fill"></i>
                </div>
            </div>
    
    `;

};