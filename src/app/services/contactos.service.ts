import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private contactos: Contacto[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '123456789' },
    { id: 2, nombre: 'Ana Gómez', email: 'ana@example.com', telefono: '987654321' },
    { id: 3, nombre: 'Luis Fernández', email: 'luis@example.com', telefono: '555123456' },
  ];

  getContactos(): Contacto[] {
    return this.contactos;
  }

  agregarContacto(contacto: Contacto): void {
    this.contactos.push(contacto);
  }

  eliminarContacto(id: number): void {
    this.contactos = this.contactos.filter(contacto => contacto.id !== id);
  }

  actualizarContacto(contactoActualizado: Contacto): void {
    const index = this.contactos.findIndex(c => c.id === contactoActualizado.id);
    if (index !== -1) {
      this.contactos[index] = contactoActualizado;
    }
  }
}
