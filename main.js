"use strict"

const cidades = [
    {nome: 'tabua', cor: 'red', icon: 'balao.png'},
    {nome: 'Roraima', cor: 'blue', icon: 'canhao.png'},
    {nome: 'Jandira City', cor: 'yellow', icon: 'carrossel.png'},
    {nome: 'Pombo', cor: 'purple', icon: 'parque.png'},
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

cidades.forEach(criarMenu)