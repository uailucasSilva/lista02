nome = prompt("Qual o seu nome completo?");
array = nome.split(" ");
tamanho = array.length;
array[0] = array[0].toUpperCase();
let saida = "";

for (i = 1; i < tamanho; i++) {
    array[i] = array[i].toLowerCase();
}
for (i = 0; i < tamanho; i++) {
    saida += array[i] + " ";
}
alert(saida);