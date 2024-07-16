import { produtosAPI } from "./produtosAPI.js";

async function deletaProduto(idProduto) {
  try {
      await produtosAPI.deletaProduto(idProduto);
  } catch (error) {
      console.error("Erro ao deletar produto:", error);
  }

  window.location.reload(true);
}

export { deletaProduto };