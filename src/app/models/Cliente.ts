import { Boleto } from "./Boleto"

export class Cliente {

    public id: number
	public nome: string
	public cpf: string
	public dtNascimento: string
	public rg:string 
    public boleto: Boleto[]
}