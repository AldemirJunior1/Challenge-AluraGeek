async function listaProdutos() {
  const conexao = await fetch("http://localhost:3000/produtos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}


async function criaProduto(nome, valor, imagem) {
  const conexao = await fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      valor: valor,
      imagem: imagem
    })
  });
  if (!conexao.ok) {
    throw new Error("Não foi possivel enviar o Produto");
  }

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function deletaProduto(idProduto) {
  try {
    const conexao = await fetch(`http://localhost:3000/produtos/${idProduto}`, {
      method: "DELETE",
    });
    if (!conexao.ok) {
      throw new Error(`Erro ao deletar produto: ${conexao.statusText}`);
    }
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
  }
}

export const produtosAPI = {
  listaProdutos,
  criaProduto,
  deletaProduto
}