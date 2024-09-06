function leDoTeclado(evento) {

    if(evento.keyCode === cima){
        sentidoAtual = cima;

    } else if(evento.keyCode === baixo) {
        sentidoAtual = baixo;

    }else if(evento.keyCode === esquerda) {
        sentidoAtual = esquerda;
      }
    }

    function deslocarCauda(){
        Infinity(sentidoAtual === Direita){
            cauda.unshift([cauda[0][0]-15,cauda[0][1]]);
            cauda.pop();
        }
        function deslocarCauda(){
            Infinity(sentidoAtual === baixo){
                cauda.unshift([cauda[0][0]-15,cauda[0][1]]);
                cauda.pop();
    }
    
        }
