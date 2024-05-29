import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { ApiService } from 'src/.api-client/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, MaterialModule],
})
export class AppComponent {
  $getHello!: Observable<void>;

  constructor(private api: ApiService) {}

  getHello() {
    this.$getHello = this.api.appControllerGetHello();
  }
}
