console.log('ex1-sem5-mod1')

class Funcionario {
  cpf;
  nomeCompleto;
  salario;

    constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  promover(percentual) {
    const multiplicador = percentual / 100 + 1;
    const novoSalario = this.salario * multiplicador;
    this.salario = novoSalario;
   // this.salario = ((this.salario * percentual)/ 100) + this.salario;
  }
}

const ada = new Funcionario('528.442.040-31', 'Ada Lovelace', 1000);

console.log(ada.salario); // 1000

ada.promover(50);

console.log(ada.salario); //1500
