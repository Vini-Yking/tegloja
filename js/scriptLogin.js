const usuarios = ['nicolas@gmail.com', 'thiago@gmail.com', 'vinicios@gmail.com', 'hitalo@yahoo.com', 'gabriel@hotmail.com', 'patricia@outlook.com']
const senhas = ['123', 'batata123', 'batata123456', '1111', '123', '9999']

const validarLogin = () => {
    // arrays de usuario e senha
    var entrou = Boolean(false)
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;

    // verificação dos inputs
    var index = usuarios.indexOf(email);
    if(index >= 0){
        if(senhas[index] == senha)
            return true;
        else
            return false;
    }
};
