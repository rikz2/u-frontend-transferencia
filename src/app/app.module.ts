import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component'; // Importar FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Agregar FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

