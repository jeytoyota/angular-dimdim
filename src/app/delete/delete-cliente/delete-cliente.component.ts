import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/service/cliente.service.service';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.css']
})
export class DeleteClienteComponent implements OnInit {

  cliente : Cliente = new Cliente()
  idCliente : number

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.idCliente = this.route.snapshot.params['id']
    this.findCliente(this.idCliente)
  }

  findCliente(id: number){
    this.clienteService.getCliente(id).subscribe((resp: Cliente)=>{
      this.cliente = resp
    })
  }

  apagar(id : number = this.idCliente){
    this.clienteService.deleteCliente(id).subscribe((resp: Cliente)=>{
      this.cliente = resp
      alert('Apagado com sucesso!')
      this.router.navigate(['/cadastro'])
    })
  }


}
