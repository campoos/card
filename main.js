"use strict"

const cidades = [
    {nome: 'tabua', cor: 'red', icon: 'balao.png'},
    {nome: 'Roraima', cor: 'blue', icon: 'canhao.png'},
    {nome: 'Jandira City', cor: 'yellow', icon: 'carrossel.png'},
    {nome: 'Pombo', cor: 'purple', icon: 'parque.png'}
]

const cards = [
    {imagem: 'balao.png', titulo: 'Pneu', desc: 'dsfartsfhsfhdahhgfdghuirhewnjtk5hbjkgbsucxhvnf,guidzgjkshjkdhgkjdg', preco: '50', cor: 'red'},
    {imagem: 'canhao.png', titulo: 'Sapatenis', desc: 'dsfartsfhsfhdahhgfdghuirhewnjtk5hbjkgbsucxhvnf,guidzgjkshjkdhgkjdg', preco: '50', cor: 'purple'},
    {imagem: 'carrossel.png', titulo: 'Cachumbeira', desc: 'dsfartsfhsfhdahhgfdghuirhewnjtk5hbjkgbsucxhvnf,guidzgjkshjkdhgkjdg', preco: '50', cor: 'yellow'},
    {imagem: 'parque.png', titulo: 'Ratos safados', desc: 'dsfartsfhsfhdahhgfdghuirhewnjtk5hbjkgbsucxhvnf,guidzgjkshjkdhgkjdg', preco: '50', cor: 'blue'}
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