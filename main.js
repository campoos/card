"use strict"

const cidades = [
    {nome: 'Jandira', cor: 'red', icon: 'balao.png'},
    {nome: 'Roraima', cor: 'blue', icon: 'canhao.png'},
    {nome: 'Xique Xique', cor: 'yellow', icon: 'carrossel.png'},
    {nome: 'Juazeiro', cor: 'purple', icon: 'parque.png'}
]

const cards = [
    {imagem: 'pneu.webp', titulo: 'Pneu', desc: 'O Pneu Durable é robusto e durável, ideal para maquinários de construção e equipamentos industriais. Com 12 camadas (12 PR) e design Tubeless (sem câmara), oferece resistência a impactos e maior capacidade de carga. Sua construção sem câmara facilita a manutenção e proporciona maior segurança.', preco: 'R$150.00', cor: 'tomato'},
    {imagem: 'enaldinho.webp', titulo: 'Livro Enaldinho', desc: 'O Livro Ilustrado Oficial Enaldinho é uma obra divertida e cheia de aventuras, inspirada no fenômeno Enaldinho, um dos maiores influenciadores da internet. Com ilustrações envolventes, o livro traz a história do criador de conteúdo de forma empolgante, perfeita para fãs de todas as idades.', preco: 'R$22,47', cor: 'magenta'},
    {imagem: 'painel.jfif', titulo: 'Painel Solar', desc: 'O Painel Solar é a solução ideal para quem busca economia de energia e sustentabilidade. Com tecnologia de ponta, oferece alta eficiência na conversão de luz solar em energia elétrica, ajudando a reduzir os custos com eletricidade e a preservar o meio ambiente.', preco: '750', cor: 'green'},
    {imagem: 'betoneira.png', titulo: 'Betoneira', desc: 'A Betoneira Elétrica 400L é a ferramenta perfeita para quem precisa de alta capacidade e eficiência na mistura de concreto. ela é ideal para obras de médio a grande porte, proporcionando agilidade na produção de concreto e garantindo uma mistura homogênea.', preco: '50', cor: 'orange'},
]


function criarMenu (cidade) {
    const menu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novaImagem = document.createElement('img')

    novaImagem.src = `./icon/${cidade.icon}`

    novoLink.href = '#'
    novoLink.textContent = cidade.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    menu.appendChild(novoItem)
}

function criarCards (card) {
    const main = document.getElementById('main')
    const novoContainer = document.createElement('div')
    const novaImg = document.createElement('img')
    const novaH1 = document.createElement('h1')
    const novaSpan = document.createElement('span')
    const novoP = document.createElement('p')
    const novoBotao = document.createElement('button')

    novaImg.src = `./icon/${card.imagem}`

    novaH1.textContent = card.titulo

    novaSpan.textContent = card.desc

    novoP.textContent = card.preco
    novoP.style = `--cor-botao: ${card.cor}`

    novoBotao.textContent = 'Add to cart'
    novoBotao.style = `--cor-botao: ${card.cor}`

    novoContainer.appendChild(novaImg)
    novoContainer.appendChild(novaH1)
    novoContainer.appendChild(novaSpan)
    novoContainer.appendChild(novoP)
    novoContainer.appendChild(novoBotao)

    main.appendChild(novoContainer)
}

cidades.forEach(criarMenu)
cards.forEach(criarCards)