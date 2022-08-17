import { Pessoa } from "./Pessoa.js";


export class Cliente extends Pessoa {
    public dataCadastro: Date
    public dataAtualizaca: Date
    public reclamacoes: Array<string>
    private senha: string


    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, genero: string, nomeMae: string,
        nomePai: string, email: string, cep: string, endereço: string, numero: string, bairro: string, cidade: string,
        estado: string, telefone: string, saldo: number, contaCocorrente: string, agencia: string, dataCadastro: Date,
        dataAtualizaca: Date, reclamacoes: Array<string>, senha: string) {
        super(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereço, numero, bairro, cidade, estado, telefone,
            saldo, contaCocorrente, agencia)
        this.dataCadastro = dataCadastro
        this.dataAtualizaca = dataAtualizaca
        this.reclamacoes = reclamacoes
        this.senha = senha
    }
    public getSenha(dadoPessoal: String): String {

        if (dadoPessoal == this.cpf) {

            return this.senha

        } else {

            console.log("Desculpe não podemos fornecer");

            return null

        }

    }


}
