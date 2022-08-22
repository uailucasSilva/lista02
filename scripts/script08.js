texto = prompt("Informe um texto:");
array = texto.split(" ");
tamanho = array.length;
result = "";
const letras = [''];

for (i = 0; i < tamanho; i++) {
    if (~letras.includes(array[i].charAt(0))) {
        letras.push(array[i].charAt(0));
    }
}
letras.splice(0, 1);

letrasSemRep = letras.filter(function (match, i) {
    return letras.indexOf(match) === i;
});

tamanhoLetras = letrasSemRep.length;

for (i = 0; i < tamanhoLetras; i++) {
    document.write("</p>Palavras inciadas com a letra " + letrasSemRep[i] + ":</p><ul>")
    for (j = 0; j < tamanho; j++) {
        if (letrasSemRep[i] == array[j].charAt(0)) {
            document.write("<li>" + array[j] + "</li>");
        }
    }
    document.write("</ul>");
}
