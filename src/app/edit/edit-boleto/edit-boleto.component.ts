import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boleto } from 'src/app/models/Boleto';
import { BoletoService } from 'src/app/service/boleto.service';

@Component({
  selector: 'app-edit-boleto',
  templateUrl: './edit-boleto.component.html',
  styleUrls: ['./edit-boleto.component.css']
})
export class EditBoletoComponent implements OnInit {

  boleto : Boleto = new Boleto()
  idBoleto : number

  constructor(
    private boletoService: BoletoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idBoleto = this.route.snapshot.params['id']
    this.findBoleto(this.idBoleto)
  }

  findBoleto(id: number){
    this.boletoService.getBoleto(id).subscribe((resp: Boleto)=>{
      this.boleto = resp
    })
  }

  atualizar(){
    this.boletoService.putBoleto(this.boleto).subscribe((resp: Boleto)=>{
      this.boleto = resp
      this.router.navigate(['/cadastro'])
    })
  }

}
