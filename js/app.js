// Achei que faria sentido o valor ser global e vir antes
let valorFinal = document.querySelector('.carrinho__total');
valorTotal = 0;
valorFinal.lastElementChild.innerHTML = `R$${valorTotal}`;

// Inicio limpando a lista de produtos no carrinho
limpar();

function adicionar() {
    
    // Definindo variáveis produto, valor e quantidade, com base no input do droplist
    let produto = document.querySelector('.produto-input').value.split(" - ")[0];
    let valorProduto = document.querySelector('.produto-input').value.split(" - ")[1];
    let quantidade = document.querySelector('.quantidade-input').value;

    //-----------------------------------------
    // Criei a variável carrinho pra representar a lista de produtos no carrinho
    let carrinho = document.querySelector('.carrinho__produtos');

    //-----------------------------------------
    // Criei a variável listaProdutos para representar um item na lista, criando um novo elemento 'section' pra ela
    let itemLista = document.createElement('section');
    // Adicionei a classe 'carrinho__produtos__produto', pra pegar o style certinho
    itemLista.classList.add('carrinho__produtos__produto');
    // Coloquei ela dentro do carrinho
    carrinho.appendChild(itemLista);

    //-----------------------------------------
    // Criei um 'span' pra quantidade na lista, segundo o HTML e o CSS, pra ficar com a cor azul
    let quantidadeCarrinho = document.createElement('span');
    quantidadeCarrinho.classList.add('texto-azul');
    quantidadeCarrinho.innerHTML = `${quantidade}x`;
    itemLista.appendChild(quantidadeCarrinho);

    // Aqui só adicionei o texto do produto no meio dos dois 'span'
    let produtoCarrinho = document.createTextNode(` ${produto} `);
    itemLista.appendChild(produtoCarrinho);

    // E outro 'span' pro valor do produto na lista, mesmo princípio da quantidade
    let valorCarrinho = document.createElement('span');
    valorCarrinho.classList.add('texto-azul');
    valorCarrinho.innerHTML = `${valorProduto}`;
    itemLista.appendChild(valorCarrinho);
    
    
    valorTotal = valorTotal + (valorProduto.split('$')[1] * quantidade);
    valorFinal.lastElementChild.innerHTML = `R$${valorTotal}`;
}

// Criei a função limpar
function limpar() {
    let carrinho = document.querySelector('.carrinho__produtos');
    let campoQuantidade = document.querySelector('.quantidade-input');

    // Limpa os itens no carrinho, o campo Qtde e o valor total
    carrinho.innerHTML = '';
    campoQuantidade.value = '';

    valorTotal = 0;
    valorFinal.lastElementChild.innerHTML = `R$${valorTotal}`;
}