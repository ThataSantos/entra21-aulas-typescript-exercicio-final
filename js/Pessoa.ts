export class Pessoa {
    public nome: string
    public cpf: string
    public rg: string
    public dataNascimento: string
    public genero: string
    public nomeMae: string
    public nomePai: string
    public email: string
    public cep: string
    public endereço: string
    public numero: string
    public bairro: string
    public cidade: string
    public estado: string
    public telefone: string
    public saldo: number
    public contaCocorrente: string
    public agencia: string



    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, genero: string, nomeMae: string,
        nomePai: string, email: string, cep: string, endereço: string, numero: string, bairro: string, cidade: string,
        estado: string, telefone: string, saldo: number, contaCocorrente: string, agencia: string) {
        this.nome = nome
        this.cpf = cpf
        this.rg = rg
        this.dataNascimento = dataNascimento
        this.genero = genero
        this.nomeMae = nomeMae
        this.nomePai = nomePai
        this.email = email
        this.cep = cep
        this.endereço = endereço
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.telefone = telefone
        this.saldo = saldo
        this.contaCocorrente = contaCocorrente
        this.agencia = agencia



    }
}
