const form = document.getElementById("cadastroForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const nome=document.getElementById("nome").value;
const email=document.getElementById("email").value;
const usuario=document.getElementById("usuario").value;
const senha=document.getElementById("senha").value;
const confirmar=document.getElementById("confirmar").value;

if(senha!==confirmar){

alert("As senhas não coincidem.");

return;

}

let usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];

const existe=usuarios.find(u=>u.usuario===usuario);

if(existe){

alert("Este usuário já existe.");

return;

}

usuarios.push({

nome,
email,
usuario,
senha

});

localStorage.setItem("usuarios",JSON.stringify(usuarios));

alert("Cadastro realizado com sucesso!");

window.location.href="login.html";

});