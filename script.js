function toggleDark(){
  document.body.classList.toggle("dark");
}


let tempo=30;

setInterval(()=>{

tempo--;

document.getElementById("timer").innerHTML="⏱ "+tempo;

},1000);

if(pontos>=14){

medalha="🥇 Ouro";

}else if(pontos>=10){

medalha="🥈 Prata";

}else{

medalha="🥉 Bronze";

}

confetti({
    particleCount:200,
    spread:120
});

const botao = document.getElementById("darkMode");

// Carregar tema salvo
if(localStorage.getItem("tema") === "dark"){
    document.body.classList.add("dark");
    botao.innerHTML = "☀️";
}

botao.addEventListener("click", ()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        botao.innerHTML="☀️";

        localStorage.setItem("tema","dark");

    }else{

        botao.innerHTML="🌙";

        localStorage.setItem("tema","light");

    }

});

function copiar(botao){

const frase = botao.parentElement.querySelector(".texto-frase").innerText;

navigator.clipboard.writeText(frase);

const toast = document.getElementById("toast");

toast.style.display="block";

setTimeout(()=>{

toast.style.display="none";

},2000);

}

function pesquisar(){

let filtro=document.getElementById("pesquisa").value.toLowerCase();

let cards=document.querySelectorAll(".frase-card");

cards.forEach(card=>{

let texto=card.innerText.toLowerCase();

card.style.display=texto.includes(filtro)?"flex":"none";

});

}

const voltar = document.getElementById("voltarInicio");

if(voltar){

    voltar.addEventListener("click", function(event){

        event.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(function(){

            window.location.href = "home.html";

        },800);

    });

}


// Criar partículas automaticamente
const area = document.querySelector(".particulas");

if(area){

    for(let i = 0; i < 30; i++){

        let particula = document.createElement("span");

        particula.style.left = Math.random() * 100 + "%";
        particula.style.animationDelay = Math.random() * 5 + "s";

        area.appendChild(particula);

    }

}
