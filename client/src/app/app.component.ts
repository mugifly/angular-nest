import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/.api-client/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  $getHello!: Observable<void>;

  constructor(private api: ApiService) {}

  getHello() {
    this.$getHello = this.api.appControllerGetHello();
  }
}
