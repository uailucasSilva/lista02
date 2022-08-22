nro = prompt("Informe um número maior ou igual a 2:");
while (nro == null || nro < 2 || isNaN(nro)) {
    alert("Número inválido!");
    nro = prompt("Informe um número maior ou igual a 2:");
}
document.write("<table border=1px>")
document.write("<tr><td>Base decimal</td> <td>Base binária</td> <td>Base hexadecimal</td></tr>")
for (i = 0; i <= nro; i++) {
    document.write(`<tr><td>${(i).toString(10)}</td><td>${(i).toString(2)}</td><td>${(i).toString(16)}</td></tr>`);
}
document.write("</table>");
