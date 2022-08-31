var elForm = document.querySelector("[data-form]");
var elInputImg = document.querySelector("[data-img]");
var elInputName = document.querySelector("[data-name]");
var elInputType = document.querySelector("[data-type]");
var elInputWeight = document.querySelector("[data-weight]");
var elInputHeight = document.querySelector("[data-height]");
var elDivWrap = document.querySelector("[data-div-wrap]");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var pokemon = {
    name: null,
    img: null,
    type: [],
    weight: null,
    height: null,
  };
  pokemon.name = elInputName.value;
  pokemon.img = elInputImg.value;
  pokemon.type = elInputType.value.split(",");
  pokemon.weight = elInputWeight.value;
  pokemon.height = elInputHeight.value;

  elInputImg.value = "";
  elInputName.value = "";
  elInputType.value = "";
  elInputWeight.value = "";
  elInputHeight.value = "";

  pokemons.unshift(pokemon);

  elDivWrap.prepend(createDiv(pokemon));
});

renderPokemons();

function renderPokemons() {
  for (var i = 0; i < pokemons.length; i++) {
    var pokemon = pokemons[i];

    elDivWrap.append(createDiv(pokemon));
  }
}

function createDiv(pokemon) {
  var elDivCard = document.createElement("div");
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
  elP.textContent = joinArray(pokemon.type);
  elSpan.textContent = `${pokemon.weight}`;
  elSpan1.textContent = `${pokemon.height}`;
  elBtn.textContent = "Delate";

  elDivCard.classList.add("card");
  elImg.classList.add("card-img-top");
  elDivBody.classList.add("card-body");
  elBtn.classList.add("btn-danger");
  elSpan.classList.add("span");
  elh6.append(elSpan, elSpan1);
  elDivBody.append(elh5, elP, elh6, elBtn);
  elDivCard.append(elImg, elDivBody);

  return elDivCard;
}

// const close = document.querySelectorAll("button");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", () => {
//     close[i].parentElement.style.display = "none";
//     close[i].parentElement.remove();
//   });
// }

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
