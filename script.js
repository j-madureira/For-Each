function criarPessoa(nome,idade,cpf){
       return{
              nome: nome,
              idade: idade,
              cpf: cpf
       }
}

var pessoas = [
       criarPessoa(`João`,`20`,`2138732132`),
       criarPessoa(`Murilo`,`15`,`8789231293`),
       criarPessoa(`Ingrid`,`56`,`12321232132131`),
       criarPessoa(`Yara`,`22`,`218732183213`)
]

pessoas.forEach( function(element){
       console.log(element);
})