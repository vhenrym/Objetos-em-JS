function pessoa(nome, idade, rua) {
    this.nome = nome;
    this.idade = idade;
    this.rua = rua;
    this.falar = function () {
        console.log("OLÁ, SOU " + this.nome)
    }
}
const pessoa1 = new pessoa("Homer", 39, "Av. Sempre-verde 742");
const pessoa2 = new pessoa("Marge", 36, "Av. Sempre-verde 742");
pessoa1.falar();
pessoa2.falar();
console.log(pessoa1, pessoa2);
