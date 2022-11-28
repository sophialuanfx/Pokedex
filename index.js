//pokemon information type
const typeColors = new Map([
    [1, ['grass', 'background-color:rgb(222, 253, 224)']],
    [2, ['water', 'background-color:rgb(222, 243, 253)']],
    [3, ['fire', 'background-color:rgb(253, 223, 223)']],
    [4, ['bug', 'background-color:rgb(248, 213, 163)']],
    [5, ['poison', 'background-color:rgb(152, 215, 165)']]
]);

//create muliple card by using for loop
const idInput = document.querySelector('.container');
let idString = "";
for (let i = 1; i <= 10; i++) {
    idString = "#0" + i;
    idInput.innerHTML += '<div class="card" style= "' + renderColor( Math.ceil(i / 2)) + '"> <div class="image"></div><div class="infor"><p class="id">' + idString + '</p><h3 class="name"> name </h2><small class="type">' + 'Type:' + renderType( Math.ceil(i / 2)) + '</small></div></div>';
}

//use map index render pokemon color
function renderColor(key) {
    if (typeColors.get(key)) {
        return typeColors.get(key)[1];
    }
}

//use map index render pokemon type info
function renderType(key) {
    if (typeColors.get(key)) {
        return typeColors.get(key)[0];
    }
}
