import { Cliente } from "./Cliente"

export class Boleto {
    public idBoleto: number
	public dtVencimento: string
	public valor: number
	public cnpj: string
	public cdBarras: string
    public cliente: Cliente
}