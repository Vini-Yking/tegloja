let origem = document.location.origin;
let listaLocais = [
  `${origem}/index.html`,
  `${origem}/index02.html`,
  `${origem}/index03.html`,
  `${origem}/index04.html`,
];

const navegaNext = () => {
  var local = window.location.pathname;

  switch (local) {
    case "/index.html":
      document.querySelector(".next").href = listaLocais[1];

      break;
    case "/index02.html":
      document.querySelector(".next").href = listaLocais[2];

      break;
    case "/index03.html":
      document.querySelector(".next").href = listaLocais[3];
      break;

    default:
      document.querySelector(".next").href = listaLocais[0];
  }
  teste = () => {
    local.hash = "aqui";
  };
  teste();
};

const navegaPrev = () => {
  let local = window.location.pathname;

  switch (local) {
    case "/index02.html":
      document.querySelector(".previos").href = listaLocais[0];
      break;
    case "/index03.html":
      document.querySelector(".previos").href = listaLocais[1];
      break;
    case "/index04.html":
      document.querySelector(".previos").href = listaLocais[2];
      break;

    default:
      document.querySelector(".previos").href = listaLocais[3];
  }
};
