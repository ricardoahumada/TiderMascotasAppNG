import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { FavsComponent } from './favs/favs.component';

const routes: Routes = [
  { path: 'candidatos', component: CandidatosComponent, pathMatch: 'full' },
  { path: 'favs', component: FavsComponent, pathMatch: 'full' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatModule' },
  { path: '', redirectTo: 'candidatos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
