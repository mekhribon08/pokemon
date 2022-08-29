var elForm = document.querySelector("[data-form]");
var elInputImg = document.querySelector("[data-img]");
var elInputName = document.querySelector("[data-name]");
var elInputType = document.querySelector("[data-type]");
var elInputWeight = document.querySelector("[data-weight]");
var elInputHeight = document.querySelector("[data-height]");

for (var i = 0; i < pokemons.length; i++) {
  var pokemons = pokemons[i];

  var elDivWrap = document.createElement("div");
  var elDivCard = document.createElement("div");
  var elImg = document.createElement("img");
  var elDivBody = document.createElement("div");
  var elh5 = document.createElement("h5");
  var elP = document.createElement("p");
  var elP1 = document.createElement("p");
  var elSpan = document.createElement("span");
  var elSpan1 = document.createElement("span");
  var elBtn = document.createElement("button");

  elImg.src = `${pokemons.img}`;
  elImg.alt = pokemons.title;
  elh5.textContent = `${pokemons.name}`;
  elP.textContent = joinArray([pokemons.type]);
  elSpan.textContent = `${pokemons.weight}`;
  elSpan1.textContent = `${pokemons.height}`;
  elBtn.textContent = "Delate";

  elDivBody.append(elImg);
  elP1.append(elSpan, elSpan1);
  elDivBody.append(elh5, elP, elP1, elBtn);
  elDivCard.append(elImg, elDivCard);
  elDivWrap.append(elDivCard);
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
