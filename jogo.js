var largura = window.innerWidth
var altura = window.innerHeight
var vidas = 1
var tempo = 15 //representando 15 segundos

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criarMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    criarMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
    criarMosquitoTempo = 750
}

function ajustarTamanhoPalco() {
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(largura, altura)
}

ajustarTamanhoPalco()

var cronometro = setInterval(function() {

    tempo--

    if(tempo <= 0) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = './vitoria.html'
    } else {

    }

    document.getElementById('cronometro').innerHTML = tempo
    
}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3) {
            window.location.href = './fim_de_jogo.html'
        } else {
            document.getElementById('vida' + vidas).src="./images/coracao_vazio.png"
            vidas++
        }
        
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = './images/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    //incluir a imagem no body 
    document.body.appendChild(mosquito)

    //lado esquerdo ou direito
    console.log(ladoAleatorio())
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0: 
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0: 
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}

