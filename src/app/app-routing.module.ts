import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SalaComponent } from './sala/sala.component';


const routes: Routes = [
  {path: '', redirectTo: '/chat/login', pathMatch: 'full'},
  {path: 'chat/login', component: LoginComponent },
  {path: 'chat/salas/:id', component: SalaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
