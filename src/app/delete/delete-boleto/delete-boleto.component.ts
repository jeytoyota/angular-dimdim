import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boleto } from 'src/app/models/Boleto';
import { BoletoService } from 'src/app/service/boleto.service';

@Component({
  selector: 'app-delete-boleto',
  templateUrl: './delete-boleto.component.html',
  styleUrls: ['./delete-boleto.component.css']
})
export class DeleteBoletoComponent implements OnInit {

  boleto : Boleto = new Boleto()
  idBoleto : number

  constructor(
    private boletoService: BoletoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.idBoleto = this.route.snapshot.params['id']
    this.findBoleto(this.idBoleto)
  }

  findBoleto(id: number){
    this.boletoService.getBoleto(id).subscribe((resp: Boleto)=>{
      this.boleto = resp
    })
  }

  apagar(id : number = this.idBoleto){
    this.boletoService.deleteBoleto(id).subscribe((resp: Boleto)=>{
      this.boleto = resp
      alert('Apagado com sucesso!')
      this.router.navigate(['/cadastro'])
    })
  }

}
