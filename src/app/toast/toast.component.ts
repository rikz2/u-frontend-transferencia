import { Component } from '@angular/core';

interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  timeout: number;
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  toasts: Toast[] = []; // Arreglo vacío al inicio

  showToast(message: string, type: 'success' | 'error' | 'info', timeout = 3000): void {
    const toast: Toast = { message, type, timeout };
    this.toasts.push(toast); // Añade el nuevo toast al arreglo
    console.log(this.toasts[0])
    
    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t !== toast); // Elimina el toast después del tiempo especificado
    }, timeout);
  }
}
