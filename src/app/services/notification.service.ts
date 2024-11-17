import { Injectable } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private toastComponent!: ToastComponent;

  registerToastComponent(toastComponent: ToastComponent): void {
    this.toastComponent = toastComponent;
  }

  showSuccess(message: string): void {
    this.toastComponent.showToast(message, 'success');
  }

  showError(message: string): void {
    this.toastComponent.showToast(message, 'error');
  }

  showInfo(message: string): void {
    this.toastComponent.showToast(message, 'info');
  }
}
