var cabecalho = document.getElementById('cabecalho');
var posicaoScrollAnterior = window.pageYOffset;

window.addEventListener('scroll', function() {
  var posicaoScrollAtual = window.pageYOffset;
  if (posicaoScrollAtual > posicaoScrollAnterior) {
    cabecalho.style.top = "-50px";
    cabecalho.style.opacity = "0.8";
    cabecalho.style.boxShadow = "1px 1px 4px black";

  } else {
    cabecalho.style.top = "0";
    cabecalho.style.opacity = "1";
    cabecalho.style.boxShadow = "10px 2px 15px black";
  }
  posicaoScrollAnterior = posicaoScrollAtual;
});

const chk = document.getElementById('chk');


chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
})

function aumentarFonte(opcao) {
  const fontes = document.getElementsByClassName("fontes");
  for (i = 0; i < fontes.length; i++) {
    if (fontes[i].style.fontSize) {
      var tamanhoFonte = parseInt(fontes[i].style.fontSize.replace("px", ""));
    } else {
      var tamanhoFonte = 21;
    }

    if (tamanhoFonte < 25) {
      if (opcao == '+') {
        tamanhoFonte += 1;
      }
    }
    if (tamanhoFonte > 15) {
      if (opcao == '-') {
        tamanhoFonte -= 1;
      }
    }

    fontes[i].style.fontSize = tamanhoFonte + "px";
  }
}


var btnNav = document.getElementsByClassName('btn-nav');

var areaInfo = document.getElementById('area-infografico');
var areaArtigo = document.getElementById('area-nosso-artigo');
var areaEntrevista = document.getElementById('area-entrevista');
var areaFicha = document.getElementById('area-ficha');
var areaArtigos = document.getElementById('area-artigos');
var areaPadlet = document.getElementById('area-padlet');
var areaReferencias = document.getElementById('area-referencias');


var id1 = "notClick";
var id2 = "click";
var id3 = "click";
var id4 = "click";
var id5 = "click";
var id6 = "click";
var id7 = "click";


function mostrarInfo() {
  if (id1 == "click") {
    areaArtigos.style.display = "none";
    areaEntrevista.style.display = "none";
    areaFicha.style.display = "none";
    areaArtigo.style.display = "none";
    areaPadlet.style.display = "none";
    areaReferencias.style.display = "none";
    
    for (i = 0; i < btnNav.length; i++) {
      btnNav[i].style.backgroundColor = "#02884e";
    }
    btnNav[0].style.backgroundColor = "#05482b";
    
    areaInfo.style.display = "flex"; 
    areaInfo.style.gap = "50px";
    areaInfo.style.alignItems = "center";
    areaInfo.style.justifyContent = "center";
    id1 = "notClick";

    id2 = "click";
    id3 = "click";
    id4 = "click";
    id5 = "click";
    id6 = "click";
    id7 = "click";
  }
  else {
    areaInfo.style.display = "none";
    id1 = "click";
    btnNav[0].style.backgroundColor = "#02884e";
  }
}

function mostrarArtigo() {
  if (id2 == "click") {
    areaEntrevista.style.display = "none";
    areaInfo.style.display = "none";
    areaArtigos.style.display = "none";
    areaFicha.style.display = "none";
    areaPadlet.style.display = "none";
    areaReferencias.style.display = "none";

    for (i = 0; i < btnNav.length; i++) {
      btnNav[i].style.backgroundColor = "#02884e";
    }
    btnNav[1].style.backgroundColor = "#05482b";
    
    areaArtigo.style.display = "flex";
    areaArtigo.style.gap = "50px";
    areaArtigo.style.alignItems = "center";
    areaArtigo.style.justifyContent = "center";
    id2 = "notClick"; 

    id1 = "click";
    id3 = "click";
    id4 = "click";
    id5 = "click";
    id6 = "click";
    id7 = "click";
  }
  else {
    areaArtigo.style.display = "none";
    id2 = "click";
    btnNav[1].style.backgroundColor = "#02884e";
  }
}

function mostrarEntrevista() {
  if (id3 == "click") {
    areaArtigo.style.display = "none";
    areaInfo.style.display = "none";
    areaArtigos.style.display = "none";
    areaFicha.style.display = "none";
    areaPadlet.style.display = "none";
    areaReferencias.style.display = "none";

    for (i = 0; i < btnNav.length; i++) {
      btnNav[i].style.backgroundColor = "#02884e";
    }
    btnNav[2].style.backgroundColor = "#05482b";
    
    areaEntrevista.style.display = "flex";
    areaEntrevista.style.gap = "50px";
    areaEntrevista.style.alignItems = "center";
    areaEntrevista.style.justifyContent = "center";
    id3 = "notClick";

    id1 = "click";
    id2 = "click";
    id4 = "click";
    id5 = "click";
    id6 = "click";
    id7 = "click";
  }
  else {
    areaEntrevista.style.display = "none";
    id3 = "click";
    btnNav[2].style.backgroundColor = "#02884e";
  }
}

function mostrarFicha() {
  if (id4 == "click") {
    areaArtigo.style.display = "none";
    areaInfo.style.display = "none";
    areaEntrevista.style.display = "none";
    areaArtigos.style.display = "none";
    areaPadlet.style.display = "none";
    areaReferencias.style.display = "none";

    for (i = 0; i < btnNav.length; i++) {
      btnNav[i].style.backgroundColor = "#02884e";
    }
    btnNav[3].style.backgroundColor = "#05482b";
    
    areaFicha.style.display = "flex";
    areaFicha.style.gap = "50px";
    areaFicha.style.alignItems = "center";
    areaFicha.style.justifyContent = "center";
    id4 = "notClick";

    id1 = "click";
    id2 = "click";
    id3 = "click";
    id5 = "click";
    id6 = "click";
    id7 = "click";
  }
  else {
    areaFicha.style.display = "none";
    id4 = "click";
    btnNav[3].style.backgroundColor = "#02884e";
  }
}

function mostrarArtigosUtilizados() {
  if (id5 == "click") {
    areaArtigo.style.display = "none";
    areaInfo.style.display = "none";
    areaEntrevista.style.display = "none";
    areaFicha.style.display = "none";
    areaPadlet.style.display = "none";
    areaReferencias.style.display = "none";

    for (i = 0; i < btnNav.length; i++) {
      btnNav[i].style.backgroundColor = "#02884e";
    }
    btnNav[4].style.backgroundColor = "#05482b";
    
    areaArtigos.style.display = "flex";
    areaArtigos.style.gap = "50px";
    areaArtigos.style.alignItems = "center";
    areaArtigos.style.justifyContent = "center";
    id5 = "notClick";

    id1 = "click";
    id2 = "click";
    id3 = "click";
    id4 = "click";
    id6 = "click";
    id7 = "click";
  }
  else {
    areaArtigos.style.display = "none";
    id5 = "click";
    btnNav[4].style.backgroundColor = "#02884e";
  }
}

function mostrarPadlet() {
  if (id6 == "click") {
    areaArtigo.style.display = "none";
    areaInfo.style.display = "none";
    areaEntrevista.style.display = "none";
    areaFicha.style.display = "none";
    areaArtigos.style.display = "none";
    areaReferencias.style.display = "none";

    for (i = 0; i < btnNav.length; i++) {
      btnNav[i].style.backgroundColor = "#02884e";
    }
    btnNav[5].style.backgroundColor = "#05482b";
    
    areaPadlet.style.display = "flex";
    areaPadlet.style.gap = "50px";
    areaPadlet.style.alignItems = "center";
    areaPadlet.style.justifyContent = "center";
    id6 = "notClick";

    id1 = "click";
    id2 = "click";
    id3 = "click";
    id4 = "click";
    id5 = "click";
    id7 = "click";
  }
  else {
    areaPadlet.style.display = "none";
    id6 = "click";
    btnNav[5].style.backgroundColor = "#02884e";
  }
}

function mostrarReferencias() {
  if (id7 == "click") {
    areaArtigo.style.display = "none";
    areaInfo.style.display = "none";
    areaEntrevista.style.display = "none";
    areaFicha.style.display = "none";
    areaArtigos.style.display = "none";
    areaPadlet.style.display = "none";

    for (i = 0; i < btnNav.length; i++) {
      btnNav[i].style.backgroundColor = "#02884e";
    }
    btnNav[6].style.backgroundColor = "#05482b";
    
    areaReferencias.style.display = "flex";
    areaReferencias.style.gap = "50px";
    areaReferencias.style.alignItems = "center";
    areaReferencias.style.justifyContent = "center";
    id7 = "notClick";

    id1 = "click";
    id2 = "click";
    id3 = "click";
    id4 = "click";
    id5 = "click";
    id6 = "click";
  }
  else {
    areaReferencias.style.display = "none";
    id7 = "click";
    btnNav[6].style.backgroundColor = "#02884e";
  }
}