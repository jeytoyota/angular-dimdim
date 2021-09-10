import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeleteBoletoComponent } from './delete/delete-boleto/delete-boleto.component';
import { DeleteClienteComponent } from './delete/delete-cliente/delete-cliente.component';
import { EditBoletoComponent } from './edit/edit-boleto/edit-boleto.component';
import { EditClienteComponent } from './edit/edit-cliente/edit-cliente.component';

const routes: Routes = [
  {path:'', redirectTo:'cadastro', pathMatch: 'full'},
  {path:'cadastro', component: CadastroComponent},
  {path:'edit-cliente/:id', component: EditClienteComponent},
  {path:'edit-boleto/:id', component: EditBoletoComponent},
  {path:'delete-boleto/:id', component: DeleteBoletoComponent},
  {path:'delete-cliente/:id', component: DeleteClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
