//pokemon information type
const typeColors = new Map([
    [1, ['grass', 'background-color:rgb(222, 253, 224)']],
    [2, ['water', 'background-color:rgb(222, 243, 253)']],
    [3, ['fire', 'background-color:rgb(253, 223, 223)']],
    [4, ['bug', 'background-color:rgb(248, 213, 163)']],
    [5, ['poison', 'background-color:rgb(152, 215, 165)']]
  ]);
  ​
  const fetchPokemons = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon') // rest API => /list => full list /list/:id => single item with details
  }
  ​
  // object 
  const colorMapping = {
    grass: 'grass',
    water: 'water',
    fire: 'fire',
    bug: 'bug',
    poison: 'poison'
  }
  ​
  const colorArr = [
    'grass',
    'water',
    'fire',
    'bug',
    'poison',]
  ​
  //create muliple card by using for loop
  // const idInput = document.querySelector('.container');
  // let idString = "";
  // for (let i = 1; i <= 10; i++) {
  //   idString = "#0" + i;
  //   idInput.innerHTML += `
  //               <div class="card ${colorArr[Math.floor(i / 2)]}">
  //                 <div class="image"></div>
  //                 <div class="infor">
  //                   <p class="id">${idString}</p>
  //                   <h3 class="name"> name </h2>
  //                   <small class="type">Type: ${renderType(Math.floor(i / 2))}</small>
  //                 </div>
  //               </div>`;
  // }
  ​
  // 1. fetch results(20 pokemons)
  // 2. render pokemon cards 
  const renderCards = (pokemons) => {
    if (!pokemons || !pokemons.length) return null
  ​
    const idInput = document.querySelector('.container');
    let idString = "";
    for (let i = 1; i <= pokemons.length; i++) {
      const curPokemon = pokemons[i]
      idString = "#0" + i;
      idInput.innerHTML += `
                  <div class="card ${colorArr[Math.floor(i / 2)]}">
                    <div class="image"></div>
                    <div class="infor">
                      <p class="id">${idString}</p>
                      <h3 class="name"> ${curPokemon.name
        } </h2>
                      <small class="type">Type: ${renderType(Math.floor(i / 2))}</small>
                    </div>
                  </div>`;
    }
  }
  ​
  const res = fetchPokemons()
  ​
  const callbackFn = data => {
    data.json().then((result) => {
      console.log(result)
      renderCards(result.results)
    })
    console.log(data)
  }
  res.then(callbackFn)
  ​
  console.log(res)
  ​
  ​
  // // 1
  // const cardDiv = document.createElement('div')
  // cardDiv.classList.add('card')
  ​
  // // 2
  // const imageDiv = document.createElement('div')
  ​
  // const infoDiv = document.createElement('div')
  ​
  ​
  // cardDiv.append(imageDiv)
  // cardDiv.append(infoDiv)
  ​
  // console.log(cardDiv)
  ​
  ​
  style = "' + renderColor(Math.ceil(i / 2)) + '"
  ​
  //use map index render pokemon color
  function renderColor(key) {
    if (typeColors.get(key)) {
      return typeColors.get(key)[1];
    }
  }
  ​
  //use map index render pokemon type info
  function renderType(key) {
    if (typeColors.get(key)) {
      return typeColors.get(key)[0];
    }
  }