import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMeubleComponent } from './create-meuble/create-meuble.component';
import { MeubleListComponent } from './meuble-list/meuble-list.component'
import {UpdateMeubleComponent} from "./update-meuble/update-meuble.component";

const routes: Routes = [
  {path: 'update-meuble/:id', component: UpdateMeubleComponent},
  {path: 'meubles', component: MeubleListComponent},
  {path: 'create-meuble', component: CreateMeubleComponent},
  {path: '', redirectTo: 'meubles', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
