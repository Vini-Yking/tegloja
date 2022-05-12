function validarSenha(psw1, psw2)
{
   var senha1 = document.getElementById('senha1').value;
   var senha2 = document.getElementById('senha2').value;
    if (senha1 != "" && senha2 != "" && senha1 !== senha2)
    {
    	alert('senhas diferentes');
    }
}