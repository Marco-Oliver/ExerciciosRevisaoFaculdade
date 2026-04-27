function alterarTexto() {
    let novoTexto = prompt("Digite um novo texto:");

    if (novoTexto) {
        document.getElementById("paragrafo").innerText = novoTexto;
    }
}