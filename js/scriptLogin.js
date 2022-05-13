// Usuários "mockados"
const usuarios = [
  "nicolas@gmail.com",
  "thiago@gmail.com",
  "vinicios@gmail.com",
  "hitalo@yahoo.com",
  "gabriel@hotmail.com",
  "patricia@outlook.com",
];
const senhas = ["123", "batata123", "batata123456", "1111", "123", "9999"];

const validarLogin = () => {
  // arrays de usuario e senha
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;

  // verificação dos inputs
  let index = usuarios.indexOf(email);
  if (index >= 0) {
    senhas[index] === senha ? alert("Login aceito!") : alert("Senha inválida!");
    return;
  }
  alert("Usuário não encontrado!");
};
$(function () {
  $("#navigation").load("navbar.html");
});
$(function () {
  $("#modallogin").load("login.html");
});
$(function () {
  $("#caroussel").load("carousel.html");
});
$(function () {
  $("#footerbar").load("footer.html");
});
