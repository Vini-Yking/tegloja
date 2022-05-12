const navegaNext = () => {
  var local = window.location.pathname;
  var origem = document.location.origin;

  switch (local) {
    case "/index.html":
      document.querySelector(".next").href = `${origem}/index02.html`;

      break;
    case "/index02.html":
      document.querySelector(".next").href = `${origem}/index03.html`;

      break;
    case "/index03.html":
      document.querySelector(".next").href = `${origem}/index04.html`;
      break;

    default:
      document.querySelector(".next").href = `${origem}/index.html`;
  }
  teste = () => {
    local.hash = "aqui";
  };
  teste();
};

const navegaPrev = () => {
  var local = window.location.pathname;
  var origem = document.location.origin;

  switch (local) {
    case "/index02.html":
      document.querySelector(".previos").href = `${origem}/index.html`;
      break;
    case "/index03.html":
      document.querySelector(".previos").href = `${origem}/index02.html`;
      break;
    case "/index04.html":
      document.querySelector(".previos").href = `${origem}/index03.html`;
      break;

    default:
      document.querySelector(".previos").href = `${origem}/index04.html`;
  }
};
