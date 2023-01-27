let btnOrdernarPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdernarPreco.addEventListener('click', ordernarLivrosPreco)

function ordernarLivrosPreco() {
      let livrosOrdernados = livros.sort((a , b) => a.preco - b.preco)
      exibirOsLivros(livrosOrdernados)
}