//entrada de dados
class classeHeroi{
     constructor(nome,idade,classe){
        this.nome = nome //estrutura da classe que está guardando o Nome
        this.idade = idade//estrutura da classe que está guardando a idade
        this.classe = classe//estrutura da classe que está guardando a classe
     }
     
     // esta estrutura de repetição serve apenas para selecionar o ataque de cada classe
     atacando(){
      if (this.classe==="Ninja")
         return(" shuriken")
      if (this.classe==="Guerreiro")
         return(" espada")
      if (this.classe==="Mago")
         return(" Magia")
      else (this.classe==="Monge")
         return(" artes marciais")
     }
     // o desafio original contava com a mensagem do método ataque : "o {tipo} atacou usando {ataque}"
     //ex: mago atacou usando magia".Eu quis adaptar um pouco para usar todas as informações.
     ataque(){
      console.log(`o ${this.classe} , de nome ${this.nome} e idade ${this.idade} atacou usando ${this.atacando()}`)
     }
}

let Ninja =new classeHeroi("Ronaldo","27","Ninja")
let Guerreiro =new classeHeroi("Sander","34","Guerreiro")
let Mago =new classeHeroi("Gilmar","70","Mago")
let Monge =new classeHeroi("Robson","200","Monge")


//a mensagem de ataque de cada classe 
Ninja.ataque();
Guerreiro.ataque();
Mago.ataque();
Monge.ataque();