import { Pessoa } from "./Pessoa.js";
export class Cliente extends Pessoa {
    constructor(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereço, numero, bairro, cidade, estado, telefone, saldo, contaCocorrente, agencia, dataCadastro, dataAtualizaca, reclamacoes, senha) {
        super(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereço, numero, bairro, cidade, estado, telefone, saldo, contaCocorrente, agencia);
        this.dataCadastro = dataCadastro;
        this.dataAtualizaca = dataAtualizaca;
        this.reclamacoes = reclamacoes;
        this.senha = senha;
    }
    getSenha(dadoPessoal) {
        if (dadoPessoal == this.cpf) {
            return this.senha;
        }
        else {
            console.log("Desculpe não podemos fornecer");
            return null;
        }
    }
}
