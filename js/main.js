var elForm = document.querySelector("[data-form]");
var elInputImg = document.querySelector("[data-img]");
var elInputName = document.querySelector("[data-name]");
var elInputType = document.querySelector("[data-type]");
var elInputWeight = document.querySelector("[data-weight]");
var elInputHeight = document.querySelector("[data-height]");
var elDivWrap = document.querySelector("[data-div-wrap]");
var elInputSearch = document.querySelector("[data-search]");
var elTemplateCard = document.querySelector("[data-template-card]");
var elTypeSearchInput = document.querySelector("[data-type-search]");

elForm.addEventListener("submit", (evt) => {
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
  elTypeSearchInput.value = "";

  pokemons.unshift(pokemon);

  elDivWrap.prepend(createDiv(pokemon));
});

renderPokemons(pokemons);

function renderPokemons(pPokemons) {
  elDivWrap.innerHTML = "";
  pPokemons.forEach((pokemon) => elDivWrap.append(createDiv(pokemon)));
}

function createDiv(pokemon) {
  var elCard = elTemplateCard.content.cloneNode(true);
  var elCardImg = elCard.querySelector("img");
  var elButtonDelate = elCard.querySelector("[data-card-delate]");

  elButtonDelate.addEventListener("click", (evt) => {
    elButtonDelate.closest(".card").remove();
  });

  elCardImg.src = pokemon.img;
  elCardImg.alt = pokemon.name;
  elCard.querySelector("[data-card-title]").textContent = pokemon.name;
  elCard.querySelector("[data-card-type]").textContent = joinArray(
    pokemon.type,
    ", "
  );
  elCard.querySelector("[data-card-weight]").textContent = pokemon.weight;
  elCard.querySelector("[data-card-height]").textContent = pokemon.height;

  return elCard;
}

elInputSearch.addEventListener("keyup", (evt) => {
  var newPokemons = [];
  pokemons.forEach((pokemon) => {
    if (pokemon.name.includes(elInputSearch.value)) {
      newPokemons.push(pokemon);
    }
  });

  renderPokemons(newPokemons);
});

renderPokemons(pokemons);

elTypeSearchInput.addEventListener("keyup", (evt) => {
  var newPokemons = [];
  pokemons.forEach((pokemon) => {
    if (pokemon.type.includes(elTypeSearchInput.value)) {
      newPokemons.push(pokemon);
    }
  });

  renderPokemons(newPokemons);
});

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
