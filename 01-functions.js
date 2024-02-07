function minhaFunction(){
    //Este
    this.name = 'Yasmim';
    // return '';
}

console.log(new minhaFunction());

const minhaArrowFunction = () =>{
    this.name = 'Yasmim';
}

function minhaFunction2(){
    this.nome = 'Yasmim';

    const minhaArrowFunction2 = () => {
        this.sobrenome = 'Soares';
    }
    minhaArrowFunction2();
}

console.log(new minhaFunction2());

function soma(...argumentos){
    console.log(argumentos);
}

soma(1,2,3,4,5,6, 'yasmim');

function soma2(primeiro_argumento, ...argumentos){
    console.log({primeiro_argumento});
    console.log({argumentos});
}

soma2(7,8,9,10,11,12, 'soares');

const Retorno = () => 'Hellor world';

const RetornoCorpo = () => ({
    id: '123',
    name: 'Yasmim'
})

console.log(RetornoCorpo());

const algumNumero = 10;

const somaTernario = () => (
    algumNumero >= 10?
    'Maior ou igual a 10'
    : 'Menor que 10'
);

console.log(somaTernario());