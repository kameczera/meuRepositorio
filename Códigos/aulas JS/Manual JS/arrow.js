const helloWorld = function(){
    return "Hello World"
}

/* const helloWorld = () => {
    return "Hello World";
}

const helloWorld = () => "Hello World"; */

const soma = (a,b) => console.log(a + b);

soma(4,6);

/* Arrow functions não fazem hoisting (chamar a variável antes de declara-la) */

/* "this" sempre será o objeto global. Métodos para modificar seu valor não
irão funcionar

Não existe o objeto "arguments"

O construtur (ex: new MeuObjeto()) também não pode ser utilizado
*/