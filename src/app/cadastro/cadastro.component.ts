import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boleto } from '../models/Boleto';
import { Cliente } from '../models/Cliente';
import { BoletoService } from '../service/boleto.service';
import { ClienteService } from '../service/cliente.service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  listaClientes : Cliente[]
  listaBoletos : Boleto[]
  cliente: Cliente = new Cliente()
  boleto: Boleto = new Boleto()

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private boletoService: BoletoService
  ) { }

  ngOnInit() {
    this.findAllClientes()
    this.findAllBoletos()
  }

  findAllClientes(){
    this.clienteService.getAllClientes().subscribe((resp: Cliente[])=>{
      this.listaClientes = resp
    })
  }

  findAllBoletos(){
    this.boletoService.getAllBoletos().subscribe((resp: Boleto[])=>{
      this.listaBoletos = resp
    })
  }

  cadastrarCliente(){
    this.clienteService.postCliente(this.cliente).subscribe((resp: Cliente)=>{
      this.cliente = resp
      this.findAllClientes()
      this.cliente = new Cliente()
      alert('Cadastrado com sucesso!')
    })
  }

  cadastrarBoleto(){
    this.boletoService.postBoleto(this.boleto).subscribe((resp: Boleto)=>{
      this.boleto = resp
      this.findAllBoletos()
      this.boleto = new Boleto()
      alert('Cadastrado com sucesso!')
    })
  }

}
