import { produtosAPI } from "./produtosAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
  evento.preventDefault();
  const imagem = document.querySelector("[data-imagem]").value;
  const nome = document.querySelector("[data-nome]").value;
  const valor = document.querySelector("[data-valor]").value;
  try {
    await produtosAPI.criaProduto(nome, valor, imagem);
  } catch (e) {
    alert(e)
  }
}

formulario.addEventListener("submit", evento => criarProduto(evento));


