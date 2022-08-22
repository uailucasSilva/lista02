texto = prompt("Informe um texto:");
letra = prompt("Informe uma letra:");
array = texto.split(" ");
tamanho = array.length;A
result = "";

for (i = 0; i < tamanho; i++) {
    if (array[i].charAt(0).toUpperCase() == letra.toUpperCase()) {
        result = result.concat(" ", array[i]);
    }
}
document.write(`<p>${result}</p>`);
