document.getElementById("botao").addEventListener("click", function () {
    const mensagem = "Não tenha medo de errar as estrelas nascem do caos!";
  
    const p = document.createElement("p");
    p.textContent = mensagem;
  
    this.insertAdjacentElement("afterend", p);
  });