import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contactos', component: ContactosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
