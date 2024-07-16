import { produtosAPI } from "./produtosAPI.js";
import { deletaProduto } from "./deletarProduto.js";

const lista = document.querySelector("[data-lista]");
const limpar = document.querySelector("[data-botao-limpar]");

export default function constoiCard(nome, valor, imagem, id) {
  const produto = document.createElement("div");
  produto.className = "products__item";
  produto.innerHTML = `<img src="${imagem}" class="products__image">
            <div class="product__item_description">
              <h4 class="product__item_description_h4">${nome}</h4>
              <div class="product__price_icon">
                <p class="product__item_description_p">$ ${valor}</p>
                <button class="button__default" id="${id}" data-form-delete>
                  <img src="./image/🦆 icon _trash 2_.png" class="product__icon_trash">
                </button>
              </div>
            </div>`

  return produto;
}

async function listaProdutos() {
  try {
    const listaApi = await produtosAPI.listaProdutos();

    listaApi.forEach(elemento => lista.appendChild(
      constoiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id)));

    const btnDelete = document.querySelectorAll("[data-form-delete]");
    btnDelete.forEach(btn => {
      btn.addEventListener("click", async () => {
        await deletaProduto(btn.id);

      });
    });

  } catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel exibir os Produtos na tela</h2>`
  }
}

function limparInput() {
  const nomeInput = document.getElementById('nome')
  const valorInput = document.getElementById('valor')
  const imagemInput = document.getElementById('imagem')

  nomeInput.value = '';
  valorInput.value = '';
  imagemInput.value = '';
}

limpar.addEventListener("click", (evento) => {
  evento.preventDefault()
  limparInput();
});

listaProdutos()
