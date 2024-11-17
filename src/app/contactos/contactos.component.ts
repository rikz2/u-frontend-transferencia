import { Component } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { Contacto } from '../models/contacto.model';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent {
  contactos: Contacto[] = [];
  nuevoContacto: Contacto = { id: 0, nombre: '', email: '', telefono: '', enEdicion: false };

  constructor(private contactosService: ContactosService) {
    // Inicializar lista de contactos
    this.contactos = this.contactosService.getContactos().map(contacto => ({
      ...contacto,
      enEdicion: false // Agregar propiedad de edición por defecto
    }));
  }

  agregarContacto(): void {
    this.nuevoContacto.id = this.contactos.length + 1;
    this.nuevoContacto.enEdicion = false; // Desactivar edición en el nuevo contacto
    this.contactosService.agregarContacto({ ...this.nuevoContacto });
    this.contactos = this.contactosService.getContactos();
    this.nuevoContacto = { id: 0, nombre: '', email: '', telefono: '', enEdicion: false };
  }

  eliminarContacto(id: number): void {
    this.contactosService.eliminarContacto(id);
    this.contactos = this.contactosService.getContactos();
  }

  editarContacto(contacto: Contacto): void {
    contacto.enEdicion = true; // Activa el modo de edición para este contacto
  }

  guardarEdicion(contacto: Contacto): void {
    contacto.enEdicion = false; // Desactiva el modo de edición
    this.contactosService.actualizarContacto(contacto);
  }
}
