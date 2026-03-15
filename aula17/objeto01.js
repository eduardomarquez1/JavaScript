// Aula Final do Curso JS 
// Pequenos ensinamentos sobre objetos

// Esse é o objeto amigo, ele contém os atributos: nome, sexo e peso. E Possui o método: engordar(p)

let amigo = { // Declarando o objeto 
    // atributos
    nome: "Eduardo",
    sexo: "M",
    peso: 85.4,

    //método
    engordar(p=0){
        console.log("Engordou")
        this.peso += p
    }
}

amigo.engordar(2) // chamando o metodo engordar com parâmetro = 2
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`) // imprimindo nome e peso no console