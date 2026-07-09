emailjs.init("f4k71b1FFs7-3RSIx");

document
.getElementById("formContato")
.addEventListener("submit",function(e){

e.preventDefault();

emailjs.send("SOUZINHA_1234","template_xb0m8qs",{

nome:document.getElementById("nome").value,

email:document.getElementById("email").value,

mensagem:document.getElementById("mensagem").value

})

.then(()=>{

alert("Mensagem enviada com sucesso!");

this.reset();

})

.catch(()=>{

alert("Erro ao enviar.");

});

});