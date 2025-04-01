document.addEventListener('DOMContentLoaded', function () {
    const aumentaFOnteBotao = documentElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;
    
    aumentaFOnteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0,1;
        document.body.style.fontSize = `${ tamanhoAtualFonte } rem`;
    };
        

});
