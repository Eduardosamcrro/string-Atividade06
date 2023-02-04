const nome = 'Eduardo';
const concatenacao = 'Olá '+ nome + '!'; 
//O template é a expressao "`" que serve para encorporar Multi-linhas e interpolaçao
const template =` 
    Olá
    ${nome}!`
    console.log(concatenacao, template);
    // expressoes...
console.log(`6 * 9 = ${6 * 9}`);

const up =  texto => texto.toUpperCase();//toUpperCase serve para deixar o texto em caixa alta
console.log(`Ei... ${up("cuidado ai")}!`);
