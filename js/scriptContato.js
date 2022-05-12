span = document.createElement("span");
spantext = document.createTextNode("não pode ficar em branco");

const testevalidadoEmail = () => {
  emailcor = document.querySelector("#emailContato");
  emailcor.style.border = "1px solid red";
  label2 = document.querySelectorAll("label")[1];

  emailcor.style.transition = "800ms";

  span.appendChild(spantext);
  label2.textContent = "Email " + label2.appendChild(span).textContent;
  label2.style.color = "red";
};

const testevalidadoNome = () => {
  nomecor = document.querySelector("#nome");
  nomecor.style.border = "1px solid red";
  nomecor.style.transition = "800ms";
  label = document.querySelectorAll("label")[0];

  span.appendChild(spantext);
  label.textContent = "Nome " + label.appendChild(span).textContent;
  label.style.color = "red";
};

const testeNome = () => {
  nomecor = document.querySelector("#nome");
  nomecor.style.border = "";
  label.textContent = "Nome Ok!";
  nomecor.style.transition = "800ms";

  label = document.querySelectorAll("label")[0];
  label.style.color = "lightgreen";
};

const testeEmail = () => {
  email = document.querySelector("#emailContato");
  email.style.border = "";
  label2.textContent = "Email Ok!";
  email.style.transition = "800ms";

  label2 = document.querySelectorAll("label")[1];
  label2.style.color = "lightgreen";
};

const validarNome = (nome) => {
  var nome = document.querySelector("#nome").value;

  if (nome === "") {
    testevalidadoNome();
  } else {
    testeNome();
  }
};

const validarEmail = (email) => {
  var email = document.querySelector("#emailContato").value;

  if (email === "") {
    testevalidadoEmail();
  } else if (
    email.includes("@") === false ||
    email.includes(".com") === false
  ) {
    label2.textContent = `Email precisa ter "@" e ".com"`;
  } else {
    testeEmail();
  }
};
