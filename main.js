const produto1 = {
    nome: "Bebedouro Pet inteligente",
    marca: "TOCCO",
    preco: 599,
    nomeArquivoImagem: "WF004-(1).jpg",
};
const produto1 = {
    nome: "Bebedouro Pet inteligente",
    marca: "TOCCO",
    preco: 599,
    nomeArquivoImagem: "WF004-(1).jpg",
};
const cartaoProduto = `<div id="card-produto-1">
<img 
  src="./Image/${produto1.nomeArquivoImagem}" 
  alt="Bebedouro pet inteligente modelo Fresco Mini Plus Fountain"
  style="height: 300px;"
/>
<p>${produto1.marca}</p>  
<p>${produto1.nome}</p>
<p>${produto1.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto
