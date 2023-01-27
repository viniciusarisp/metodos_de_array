let livros = [];

const endpointdaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
      const res = await fetch(endpointdaApi);
      livros = await res.json();
      let livrosComDesconto = aplicarDesconto(livros)
      exibirOsLivros(livrosComDesconto);
}
