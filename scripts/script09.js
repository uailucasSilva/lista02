texto = prompt("Informe um texto:");
tamanho = texto.length;
tamanhoAux = tamanho;
count = 0;
for (i = 0; i < tamanho; i++) {
    if (((texto.charAt(i)).toUpperCase()).trim == ((texto.charAt(tamanhoAux - 1)).toUpperCase()).trim) {
        count++;
    }
    tamanhoAux--;
}
if (count == tamanho) {
    alert("O texto informado é um palíndromo");
}
else {
    alert("O texto informado não é um palíndromo");
}