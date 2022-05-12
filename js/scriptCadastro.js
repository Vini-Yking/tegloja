const testevalidado = () => {
  senha2cor = document.querySelector("#senha2");
  senha2cor.style.border = "1px solid red";

  senha2cor.style.transition = "800ms";

  label = document.querySelectorAll(".obrigatorio")[3];
  label.style.color = "red";
  labelnome = document.querySelectorAll(".field")[3];
  labelnome.style.color = "red";
};

const teste = () => {
  senha2cor = document.querySelector("#senha2");
  senha2cor.style.border = "";

  senha2cor.style.transition = "800ms";

  label = document.querySelectorAll(".obrigatorio")[3];
  label.style.color = "";
  labelnome = document.querySelectorAll(".field")[3];
  labelnome.style.color = "";
};

const validarSenha = () => {
  var senha1 = document.querySelector("#senha1").value;
  var senha2 = document.querySelector("#senha2").value;
  if (senha1 != "" && senha2 != "" && senha1 !== senha2) {
    testevalidado();
  } else {
    teste();
  }
};

function check() {
  var nome = document.querySelector("#nome").value;
  var email = document.querySelector("#emailCadastro").value;
  var senha1 = document.querySelector("#senha1").value;
  var senha2 = document.querySelector("#senha2").value;

  if(nome !== "" && email !== "" && senha1 !== "" && senha2 !=="" && senha1 === senha2)
    return true;
  else{
    return false;
  }
}


function msg() {
  if(check())
    alert("Cadastro Feito!");
  else{
    alert("Faltam dados obrigatórios.")
  }
}

