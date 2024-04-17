let chave = "0bbd881280b71eff05a03b509feba8b2";

function colocarNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C";
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".umidade").innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%";    
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&units=metric").then((resposta) => resposta.json());
    //AWAIT = ESPERE
    //FETCH -> ferramenta do javascript para acessar servidores
    //THEN -> ENTÃO
    //JSON -> JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)
    colocarNaTela(dados);
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value;
    let city = cidade.charAt(0).toUpperCase() + cidade.slice(1);
    console.log(city);
    if (cidade.length === 0) {
        document.querySelector(".cidade").innerHTML = "Cidade não selecionada";
        document.querySelector(".temp").innerHTML = "0 °C";
        document.querySelector(".icone").src = "";
        document.querySelector(".umidade").innerHTML = "Umidade: 0%";
    }else{
        buscarCidade(cidade);
    }
}