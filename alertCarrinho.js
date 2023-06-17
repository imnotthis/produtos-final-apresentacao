function alertCarrinho(){
    alert("Produto adicionado ao carrinho!");
}

function encherCoracao() {
    var imagem = document.getElementById("coracao");
    
    if (imagem.src.endsWith("coracaoVazio.jpg")) {
        imagem.src = "coracaoCheio.jpg";
    } else {
        imagem.src = "coracaoVazio.jpg";
    }
}
