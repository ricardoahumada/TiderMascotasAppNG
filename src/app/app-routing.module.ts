import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatosComponent } from './candidatos/candidatos.component';

const routes: Routes = [
  {path:'candidatos', component: CandidatosComponent,pathMatch:'full'},
  {path:'', redirectTo:'candidatos',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
