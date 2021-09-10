import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/service/cliente.service.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  cliente : Cliente = new Cliente()
  idCliente : number

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idCliente = this.route.snapshot.params['id']
    this.findCliente(this.idCliente)
  }

  findCliente(id: number){
    this.clienteService.getCliente(id).subscribe((resp: Cliente)=>{
      this.cliente = resp
    })
  }

  atualizar(){
    this.clienteService.putCliente(this.cliente).subscribe((resp: Cliente)=>{
      this.cliente = resp
      this.router.navigate(['/cadastro'])
    })
  }

}
