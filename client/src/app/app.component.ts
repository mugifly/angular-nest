import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ApiService } from '../.api-client/services/api.service';
import { Article } from '../.api-client/models/article';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, AsyncPipe, DatePipe, MaterialModule]
})
export class AppComponent {
  $exampleText!: Observable<string>;
  $exampleArticle!: Observable<Article>;

  isProduction = environment.production;

  constructor(private api: ApiService) {}

  getExampleText() {
    this.$exampleText = this.api.appControllerGetExampleText();
  }

  getExampleArticle() {
    this.$exampleArticle = this.api.appControllerGetExampleArticle();
  }
}
