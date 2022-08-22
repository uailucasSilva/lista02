texto = prompt("Informe um texto:");
array = texto.split(" ");
tamanho = array.length;
result = array[0].concat(" ", array[tamanho - 1])

alert(result);