import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditClienteComponent } from './edit/edit-cliente/edit-cliente.component';
import { EditBoletoComponent } from './edit/edit-boleto/edit-boleto.component';
import { DeleteClienteComponent } from './delete/delete-cliente/delete-cliente.component';
import { DeleteBoletoComponent } from './delete/delete-boleto/delete-boleto.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    EditClienteComponent,
    EditBoletoComponent,
    DeleteClienteComponent,
    DeleteBoletoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
