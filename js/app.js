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

    // Desafio pós aulas de impedir a adição de um produto com quantidade inválida
    if(quantidade == '' || quantidade <= 0) {
        alert('Precisa informar a quantidade!');
        return;
    }

    // Definindo todas as variáveis de elementos antes pra criar condicional com base nelas
    // Criei a variável carrinho pra representar a lista de produtos no carrinho
    let carrinho = document.querySelector('.carrinho__produtos');
    // Criei a variável listaProdutos para representar um item na lista, criando um novo elemento 'section' pra ela
    let itemLista = document.createElement('section');
    // Criei um 'span' pra quantidade na lista, segundo o HTML e o CSS, pra ficar com a cor azul
    let quantidadeCarrinho = document.createElement('span');
    // Aqui só adicionei o texto do produto no meio dos dois 'span'
    let produtoCarrinho = document.createTextNode(` ${produto} `);
    // E outro 'span' pro valor do produto na lista, mesmo princípio da quantidade
    let valorCarrinho = document.createElement('span');
    //aqui eu adicionei um atributo id pra ajudar na condicional
    itemLista.setAttribute('id', `${produto}`);

    // Essa condicional verifica se, ao adicionar um produto no carrinho, ele já está listado lá (não foi feito na solução na aula, então fiquei feliz de ter feito)
    // Dessa forma, caso esteja, ela não adiciona uma nova linha na lista, e sim, soma a quantidade no produto que já está lá
    // (isso foi bem difícil hahahaha, com certeza tem uma forma mais simples de fazer, mas fui testando coisas, pesquisando métodos, e cheguei nesse modelo)
    if(document.querySelector('.carrinho__produtos').textContent.includes(`${produto}`)) {
        // Defini uma variável pra pegar o texto da quantidade na lista
        let textoQuantidade = document.getElementById(`${produto}`).childNodes[0].textContent.split('x')[0];
        // Outra variável pra pegar a linha em que a quantidade é exibida
        let listaQuantidadeProduto = document.getElementById(`${produto}`).childNodes[0];
        
        // Aqui eu atualizo a quantidade exibida somando a que está sendo adicionada
        listaQuantidadeProduto.textContent = (parseInt(textoQuantidade) + parseInt(`${quantidade}`)) + 'x';

        // Atualizo o valor total do carrinho
        valorTotal = valorTotal + (valorProduto.split('$')[1] * quantidade);
        valorFinal.lastElementChild.innerHTML = `R$${valorTotal}`;
    } 
    // Caso o produto adicionado não está listado lá, crio uma nova linha com ele
    else {
        // Adicionei a classe 'carrinho__produtos__produto', pra pegar o style certinho
        itemLista.classList.add('carrinho__produtos__produto');
        // Coloquei ela dentro do carrinho
        carrinho.appendChild(itemLista);
        
        // Crio uma nova linha passando a quantidade
        quantidadeCarrinho.classList.add('texto-azul');
        quantidadeCarrinho.innerHTML = `${quantidade}x`;
        itemLista.appendChild(quantidadeCarrinho);

        // O produto
        itemLista.appendChild(produtoCarrinho);

        // E o valor
        valorCarrinho.classList.add('texto-azul');
        valorCarrinho.innerHTML = `${valorProduto}`;
        itemLista.appendChild(valorCarrinho);

        // Atualizo o valor total do carrinho        
        valorTotal = valorTotal + (valorProduto.split('$')[1] * quantidade);
        valorFinal.lastElementChild.innerHTML = `R$${valorTotal}`;
    }
    // Na aula adicionaram essa linha que zera a quantidade
    document.querySelector('.quantidade-input').value = '';
}

// Criei a função limpar
function limpar() {
    let carrinho = document.querySelector('.carrinho__produtos');
    let campoQuantidade = document.querySelector('.quantidade-input');

    // Limpa os itens no carrinho, o campo Qtde
    carrinho.innerHTML = '';
    campoQuantidade.value = '';

    // e o valor total
    valorTotal = 0;
    valorFinal.lastElementChild.innerHTML = `R$${valorTotal}`;
}