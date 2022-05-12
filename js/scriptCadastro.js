const testevalidado = () => {
  senha2cor = document.querySelector("#senha2");
  senha2cor.style.border = "1px solid red";

  senha2cor.style.transition = "800ms";

  label = document.querySelectorAll(".obrigatorio")[3];
  label.style.color = "red";
  label.textContent = label.textContent.toUpperCase();
  labelnome = document.querySelectorAll(".field")[3];
  labelnome.style.color = "red";
};

const teste = () => {
  senha2cor = document.querySelector("#senha2");
  senha2cor.style.border = "";

  senha2cor.style.transition = "800ms";

  label = document.querySelectorAll(".obrigatorio")[3];
  label.style.color = "";
  label.textContent = "* senha coincide";
  labelnome = document.querySelectorAll(".field")[3];

  labelnome.style.color = "";
};

const validarSenha = () => {
  let senha1 = document.querySelector("#senha1").value;
  let senha2 = document.querySelector("#senha2").value;
  if (senha1 != "" && senha2 != "" && senha1 !== senha2) {
    testevalidado();
  } else {
    teste();
  }
};

function check() {
  let nome = document.querySelector("#nome").value;
  let email = document.querySelector("#emailCadastro").value;
  let senha1 = document.querySelector("#senha1").value;
  let senha2 = document.querySelector("#senha2").value;

  if (
    nome !== "" &&
    email !== "" &&
    senha1 !== "" &&
    senha2 !== "" &&
    senha1 === senha2
  )
    return true;
  else {
    return false;
  }
}

function msg() {
  if (check()) {
    alert("Cadastro Feito!");
  } else {
    for (i = 0; i < 4; i++) {
      document.querySelectorAll(".obrigatorio")[i].textContent =
        "* Cheque esse campo";
      document.querySelectorAll(".obrigatorio")[i].style.color = "red";
      document.querySelectorAll(".obrigatorio")[i].style.transition = "800ms";
    }

    alert("Faltam dados obrigatórios.");
  }
}
