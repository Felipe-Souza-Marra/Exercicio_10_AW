const stringChecker = require("./extesions/string/checker")

class Pessoa {

  constructor(data) {

    this.nome = data.nome;
    this.sobrenome = data.sobrenome;
    this.cpf = data.cpf;
    this.email = data.email;
    this.telefone = data.telefone;
    this.altura = data.altura;
    this.peso = data.peso;

  }

  checkData() {

    var erros = [];

    erros.push(stringChecker.email(this.email));
    console.log(this.email);

    return erros

  }
}

module.exports = Pessoa;