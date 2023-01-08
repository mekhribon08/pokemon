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
var elSelectType = document.querySelector("[data-select]");
var elAl = document.querySelector("[data-alpha]");
var elOption = document.querySelector("[data-option]");
var elFavList = document.querySelector("[data-favourites-list]");

const favourites = getFavourites();

renderFav(favourites);

elDivWrap.addEventListener("click", (evt) => {
  onFavouriteClick(evt);
});

function onFavouriteClick(evt) {
  const el = evt.target.closest("[data-card-add]");

  if (!el) return;

  const id = +el.dataset.id;
  if (favourites.includes(id)) {
    favourites.splice(favourites.indexOf(id), 1);
  } else {
    favourites.push(id);
  }
  setFavourites(favourites);

  renderPokemons(pokemons);
}

function setFavourites(favourites) {
  localStorage.setItem("favourites", JSON.stringify(favourites));
  renderFav(favourites);
}

function renderFav(favourites) {
  let html = "";

  favourites.forEach((item) => {
    let pokemon = pokemons.find((pokemon) => pokemon.id === item);
    html += `<span class="badge bg-success m-2">${pokemon.name}</span>`;
  });

  elFavList.innerHTML = html;
}

function getFavourites() {
  const stringFav = localStorage.getItem("favourites") || "[]";
  return JSON.parse(stringFav);
}

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
  pPokemons.filter((pokemon) => elDivWrap.append(createDiv(pokemon)));
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
  elCard.querySelector("[data-card-delate]").dataset.id = pokemon.id;
  elCard.querySelector("[data-card-add]").dataset.id = pokemon.id;
  elCard.querySelector("[data-card-add]").textContent = favourites.includes(
    pokemon.id
  )
    ? "Added"
    : "Add";
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
  // pokemons.forEach((pokemon) => {
  //   if (pokemon.name.includes(elInputSearch.value)) {
  //     newPokemons.push(pokemon);
  //   }
  // });
  pokemons.filter((pokemon) => {
    if (pokemon.name.includes(elInputSearch.value)) {
      newPokemons.push(pokemon);
    }
  });

  renderPokemons(newPokemons);
});

renderPokemons(pokemons);

elTypeSearchInput.addEventListener("keyup", (evt) => {
  var newPokemons = [];
  pokemons.filter((pokemon) => {
    if (pokemon.type.includes(elTypeSearchInput.value)) {
      newPokemons.push(pokemon);
    }
  });

  renderPokemons(newPokemons);
});

elSelectType.addEventListener("change", (evt) => {
  const option = pokemons.filter((pokemon) =>
    pokemon.type.includes(elSelectType.value)
  );

  renderPokemons(option);
});

elAl.addEventListener("change", (evt) => {
  const optionn = pokemons.sort(
    (a, b) =>
      a.name.toLowerCase().charCodeAt() - b.name.toLowerCase().charCodeAt()
  );

  renderPokemons(optionn);
});

elAl.addEventListener("change", (evt) => {
  const optionnn = pokemons.sort(
    (a, b) =>
      b.name.toLowerCase().charCodeAt() - a.name.toLowerCase().charCodeAt()
  );

  renderPokemons(optionnn);
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

document.addEventListener("click", (evt) => {
  orModalBtnClick(evt);
  onModalOutsideClick(evt);
  onModalCloseClick(evt);
});

function orModalBtnClick(evt) {
  const el = evt.target.closest("[data-modal-open]");

  if (!el) return;

  const modalSel = el.dataset.modalOpen;

  document.querySelector(modalSel).classList.add("show");
}

function onModalOutsideClick(evt) {
  const el = evt.target;

  if (!el.matches("[data-modal]")) return;

  el.classList.remove("show");
}

function onModalCloseClick(evt) {
  const el = evt.target.closest("[data-modal-close]");

  if (!el) return;

  el.parentElement.parentElement.classList.remove("show");
}
