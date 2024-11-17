import { Component, ViewChild } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  constructor(private notificationService: NotificationService) {}

  ngAfterViewInit(): void {
    this.notificationService.registerToastComponent(this.toastComponent);
  }
}
