nome = prompt("Qual o seu nome?");
sobrenome = prompt("Qual o seu sobrenome?");
qtd = prompt("Quantas vezes o nome deverá ser exibido?");
cor = prompt("Qual a cor que o nome deverá ser exibido?");

for (i=1; i<=qtd; i++)
    if(~i%2==0){
        document.write(`<p>${nome} ${sobrenome}</p>`)
    }
    else{
        document.write(`<p style='color:${cor}'>${nome} ${sobrenome}</p>`)
    }
