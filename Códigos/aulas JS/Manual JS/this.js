const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){
        console.log(this.firstName + " " + this.lastName);
    },
    getId: function() {
        console.log(this.id);
    }
}

pessoa.fullName();

pessoa.getId();

/* A palavra reservada this é uma referencia de contexto
No exemplo, this refere-se ao objeto pessoa

Em um objeto (método) - Próprio objeto dono do método
Sozinha - Objeto global(em navegadores, window)
Função - Objeto global
Evento - elemento que recebeu o evento*/ 

const obj = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(obj, 1 ,5);

/*Call: Manda de parâmetro o this que será utilizado na função */

const obj2 = {
    num1: 2,
    num2: 4,
};
function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.apply(obj2,[1,5])

/*Apply: é possivel passar parâmetro para essa função dentro de um array */

const retornaNomes = function () {
    console.log(this.nome)
}

let bruno = retornaNomes.bind({ nome: 'Bruno'});

bruno();

/*Bind: Clona a estrutura da função onde é chamada e aplica o valor do objeto passado
como parâmetro */