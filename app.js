var forca = function(dicPalavras, divErros, divAcertos){
    var erros = '';
    var acertos = '';
    var palavraSorteada = '';
    var lacunas = '';
    var palavras = dicPalavras;
    var local = 0;
    var inicia = function(){
        this.erros = '';
        this.acertos = '';
        this.local=0;

        // Como colocar xonteudo em um htnl de id
        exibeHTML(divAcertos,acertos.length);
        exibeHTML(divErros,erros);
        palavraSorteada = palavras[
            Math.floor(
            Math.random() * palavras.length
            )];
        this.lacunas = '';
        for(var i=0; i< palavraSorteada.length; i++){
            lacunas += ' _ ';
        }
        exibeHTML(divAcertos,lacunas);
        /*document.onkeypress = (evt) => {
		    evt = evt || window.event;
		    var charCode = evt.keyCode || evt.which;
		    var charStr = String.fromCharCode(charCode);
		    this.verificaLetra(charStr);
		};*/

        
    };
    var testePublico =  () => {
        this.local = 9;
    }
    var testePrivado = function(){
        this.local = 9;
    }
    var retornaPublico = () =>{
        return this.local;
    }
    var verificaLetra = (letra) => {
        //console.log('letra='+ letra);
        if(palavraSorteada.indexOf(letra,0) > -1){
            //console.log('Acertou '+ palavraSorteada.indexOf(letra,0) );
            adicionaAcerto(letra);
        }else{
            //console.log('Errou '+ palavraSorteada.indexOf(letra,0) );
            adicionaErro(letra);
        }
         atualizaHTML();
        //se letra na palavra sorteada
        //adicionaacerto
        //senao
        //adicionaerro
    };
    var adicionaAcerto = (letra) => {
        if(acertos.indexOf(letra , 0) == -1){
            adicionaNovoAcerto(letra);
        }
        //se letra ja esta em acerto
        //nao faz nada
        //senao
        //adicionaNovoAcerto
    };
    //function(letra) = (letra) => 
    var adicionaNovoAcerto = (letra) =>{
        acertos += letra;
        //adiciona letra ao atributo  acertos
    };

    var adicionaErro = (letra) => {
        
        if(erros.indexOf(letra) == -1){
            adicionaNovoErro(letra);
        }
        //se letra ja esta em erro
        //nao faz nada
        //senao
        //adicionaNovoErro
    };
    var adicionaNovoErro = function(letra){
        erros += letra;
        //adiciona letra ao atributo  erros

    };
    
    var verificaStatusJogo = () => {

      //se o tamahho de erro >= 5
        //alerta o usuario que morreu
        
    //se nao ha _ em lacunas
        // avisa que ganhou
    };
    var exibeHTML = function(a,b){
       // if (document) document.getElementById(a).innerHTML = b;
    };
    var atualizaHTML = () =>{
        exibeHTML(divErros, erros);
        lacunas = '';
        for(var i=0; i< palavraSorteada.length; i++){
            //console.log('letraSort='+palavraSorteada.charAt(i));
            //console.log('acertos='+acertos);

            if(acertos.indexOf(palavraSorteada.charAt(i)) != -1) {
                lacunas += palavraSorteada.charAt(i) + ' ';
            }else{
                lacunas += ' _ ';
            }
        }
        exibeHTML(divAcertos,lacunas)
    }
    
    return{
        erros : erros,
        acertos: acertos,
        inicia: inicia,
        palavras: palavras,
        palavraSorteada:palavraSorteada,
        verificaLetra: verificaLetra,
        adicionaNovoErro: adicionaNovoErro,
        adicionaAcerto: adicionaAcerto,
        adicionaErro: adicionaErro,
        adicionaNovoAcerto: adicionaNovoAcerto,
        testePublico: testePublico,
        testePrivado: testePrivado,
        retornaPublico: retornaPublico
    };
}
/*window.onload = function() {
    var partida = new forca(
        ["mineral", "dinossauro", "quadrilha",
    "vampiro","luar","jangada","abacaxi"],
    "erros",
    "palavra"
    );
    
    partida.inicia();
    
    partida.testePrivado();
    console.log(partida.retornaPublico());
    partida.testePublico();
    console.log(partida.retornaPublico());
    

}*/
module.exports =  forca;