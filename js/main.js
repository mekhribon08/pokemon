var elForm = document.querySelector("[data-form]");
var elInputImg = document.querySelector("[data-img]");
var elInputName = document.querySelector("[data-name]");
var elInputType = document.querySelector("[data-type]");
var elInputWeight = document.querySelector("[data-weight]");
var elInputHeight = document.querySelector("[data-height]");
var elDivWrap = document.querySelector("[data-div-wrap]");
var elDivCard = document.querySelector("[data-div-card]");

for (var i = 0; i < pokemons.length; i++) {
  var pokemon = pokemons[i];

  var elImg = document.createElement("img");
  var elDivBody = document.createElement("div");
  var elh5 = document.createElement("h5");
  var elP = document.createElement("p");
  var elh6 = document.createElement("h6");
  var elSpan = document.createElement("span");
  var elSpan1 = document.createElement("span");
  var elBtn = document.createElement("button");

  elImg.src = `${pokemon.img}`;
  elImg.alt = pokemon.title;
  elh5.textContent = `${pokemon.name}`;
  elP.textContent = joinArray([pokemon.type]);
  elSpan.textContent = `${pokemon.weight}`;
  elSpan1.textContent = `${pokemon.height}`;
  elBtn.textContent = "Delate";

  elImg.classList.add("card-img-top");
  elDivBody.classList.add("card-body");
  elBtn.classList.add("btn-danger");

  elh6.append(elSpan, elSpan1);
  elDivBody.append(elh5, elP, elh6, elBtn);
  elDivCard.append(elImg, elDivBody);
  // elDivWrap.append(elDivCard);
}

function joinArray(arr, separator = "") {
  var str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];

    if (i !== arr.length - 1) {
      str += separator;
    }
  }
  return str;
}
