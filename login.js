document.getElementById("loginForm").addEventListener("submit",(e)=>{

e.preventDefault();

const usuario=document.getElementById("usuario").value;
const senha=document.getElementById("senha").value;

let usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];

const usuarioEncontrado=usuarios.find(

u=>u.usuario===usuario && u.senha===senha

);

if(usuarioEncontrado){

localStorage.setItem("usuarioLogado",JSON.stringify(usuarioEncontrado));

alert("Bem-vindo "+usuarioEncontrado.nome);

window.location.href="home.html";

}else{

alert("Usuário ou senha incorretos.");

}

});