import { Component } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { Contacto } from '../models/contacto.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent {
  contactos: Contacto[] = [];
  nuevoContacto: Contacto = { id: 0, nombre: '', email: '', telefono: '', enEdicion: false };

  constructor(private contactosService: ContactosService, private notificationService: NotificationService) {
    // Inicializar lista de contactos
    this.contactos = this.contactosService.getContactos().map(contacto => ({
      ...contacto,
      enEdicion: false // Agregar propiedad de edición por defecto
    }));
  }

  agregarContacto(): void {
    if (!this.nuevoContacto.nombre || !this.nuevoContacto.telefono) {
      this.notificationService.showError('El nombre y el teléfono son obligatorios');
      return;
    }
    this.nuevoContacto.id = this.contactos.length + 1;
    this.contactosService.agregarContacto({ ...this.nuevoContacto });
    this.notificationService.showSuccess('Contacto agregado correctamente');
    this.nuevoContacto = { id: 0, nombre: '', email: '', telefono: '', enEdicion: false };
  }
  

  eliminarContacto(id: number): void {
    this.contactosService.eliminarContacto(id);
    this.contactos = this.contactosService.getContactos();
    this.notificationService.showInfo('Contacto eliminado');
  }

  editarContacto(contacto: Contacto): void {
    contacto.enEdicion = true; // Activa el modo de edición para este contacto
  }

  guardarEdicion(contacto: Contacto): void {
    // No guardar si los datos son inválidos
    if (!contacto.nombre || !contacto.telefono) {
      alert('El nombre y el teléfono son obligatorios.');
      return;
    }
    contacto.enEdicion = false; // Salir del modo edición
    this.contactosService.actualizarContacto(contacto);
  }
  
}
